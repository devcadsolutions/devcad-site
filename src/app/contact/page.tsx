import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the DevCAD Solutions team. Let's discuss your project and how we can help you achieve your goals.",
};

export default function ContactPage() {
  return (
    <>
      <header className="bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Let's Build Together</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We're excited to hear about your project. Fill out the form below or reach out to us directly.
            </p>
          </div>
        </div>
      </header>
       <section>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
                    <p className="text-muted-foreground">
                        For inquiries, project discussions, or partnership opportunities, feel free to contact us.
                    </p>
                    <div className="space-y-4 pt-4">
                        <a href={`mailto:${siteConfig.links.email}`} className="flex items-center gap-4 group">
                           <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Mail className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-muted-foreground break-all">{siteConfig.links.email}</p>
                            </div>
                        </a>
                        {/* Example for a phone number */}
                        {/* <div className="flex items-center gap-4">
                           <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                                <Phone className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div>
                     <ContactForm />
                </div>
            </div>
        </div>
       </section>
    </>
  );
}
