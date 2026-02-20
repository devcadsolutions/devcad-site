'use server';
/**
 * @fileOverview A Genkit flow for generating FAQ questions and answers based on provided page content.
 *
 * - generateFaqContent - A function that handles the FAQ content generation process.
 * - GenerateFaqContentInput - The input type for the generateFaqContent function.
 * - GenerateFaqContentOutput - The return type for the generateFaqContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFaqContentInputSchema = z.object({
  pageContent: z.string().describe('The content of the website page to generate FAQs from.'),
});
export type GenerateFaqContentInput = z.infer<typeof GenerateFaqContentInputSchema>;

const GenerateFaqContentOutputSchema = z.object({
  faqs: z.array(
    z.object({
      question: z.string().describe('A relevant question for the FAQ section.'),
      answer: z.string().describe('A concise and accurate answer to the FAQ question.'),
    })
  ),
});
export type GenerateFaqContentOutput = z.infer<typeof GenerateFaqContentOutputSchema>;

export async function generateFaqContent(input: GenerateFaqContentInput): Promise<GenerateFaqContentOutput> {
  return generateFaqContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFaqContentPrompt',
  input: {schema: GenerateFaqContentInputSchema},
  output: {schema: GenerateFaqContentOutputSchema},
  prompt: `You are an expert in creating engaging and informative FAQ sections for websites.
Your goal is to analyze the provided page content and generate a list of 3-5 highly relevant questions and concise, accurate answers for an FAQ section.

Ensure the questions address potential user queries and the answers are direct and helpful, avoiding jargon.

Page Content:
"""
{{{pageContent}}}
"""

Generate the FAQs in the specified JSON format.`,
});

const generateFaqContentFlow = ai.defineFlow(
  {
    name: 'generateFaqContentFlow',
    inputSchema: GenerateFaqContentInputSchema,
    outputSchema: GenerateFaqContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate FAQ content.');
    }
    return output;
  }
);
