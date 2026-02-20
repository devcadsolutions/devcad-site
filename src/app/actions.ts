"use server";

import { z } from 'zod';
import { generateFaqContent } from '@/ai/flows/faq-content-generation';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: unknown) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, email, message } = result.data;

  try {
    //
    // --- BACKEND INTEGRATION POINT ---
    // Here, you would typically:
    // 1. Send an email using a service like Resend or SendGrid.
    // 2. Write the data to a Firestore collection.
    // 3. Post to a Slack webhook or another notification service.
    //
    // For this example, we'll just log it to the server console.
    console.log("New Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    //
    // ---------------------------------
    
    return { success: true, message: "Form submitted successfully." };

  } catch (error) {
    console.error("Failed to process contact form:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}

export async function getFaqContent(previousState: any, formData: FormData) {
  try {
    const pageContent = `
      DevCAD Solutions is a studio that offers expert services in CAD & 3D Modeling, custom Software Development, Rapid Prototyping & Fabrication, and System Integration. 
      We guide clients through a four-step process: Discover, Build, Deliver, and Support. Our focus is on providing precision engineering and development solutions for various industries. 
      We help businesses turn complex ideas into tangible, market-ready products, working with clients from startups to large enterprises. We prioritize confidentiality with NDAs and can develop projects from a simple idea to a full product.
    `;
    const result = await generateFaqContent({ pageContent });
    
    // Combine new FAQs with existing ones, avoiding duplicates
    const existingQuestions = new Set(previousState.faqs.map((f:any) => f.question));
    const newFaqs = result.faqs.filter(faq => !existingQuestions.has(faq.question));

    return { 
      faqs: [...previousState.faqs, ...newFaqs],
      message: 'Success'
    };

  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { 
      faqs: previousState.faqs, 
      message: `Failed to generate FAQs. ${errorMessage}`
    };
  }
}
