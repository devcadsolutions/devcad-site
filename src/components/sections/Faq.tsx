"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { Bot, Loader2 } from 'lucide-react';
import { getFaqContent } from '@/app/actions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState: { faqs: { question: string; answer: string }[]; message: string } = {
  faqs: [
      {
        question: "What kind of clients do you work with?",
        answer: "We partner with a diverse range of clients, from innovative startups to established enterprises across industries like consumer electronics, industrial automation, and medical devices. Our ideal partner is anyone looking to solve a complex engineering or software challenge."
      },
      {
        question: "How do you handle project confidentiality?",
        answer: "We take confidentiality very seriously. All projects are handled under strict Non-Disclosure Agreements (NDAs), and our internal security protocols ensure your intellectual property is protected at every stage of the development process."
      },
      {
        question: "Can you take a project from just an idea?",
        answer: "Absolutely. Many of our most successful projects started as a rough sketch or a simple 'what if' concept. Our 'Discover' phase is specifically designed to flesh out ideas, validate assumptions, and create a clear path to a tangible product."
      }
  ],
  message: '',
};

function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Suggest more questions with AI
        </>
      )}
    </Button>
  );
}

export default function Faq() {
  const [state, formAction] = useFormState(getFaqContent, initialState);

  return (
    <section className="bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {state.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
            <form action={formAction}>
              <GenerateButton />
            </form>
            {state?.message && state.message !== 'Success' && (
               <Alert variant="destructive" className="mt-4 text-left">
                  <AlertTitle>Generation Failed</AlertTitle>
                  <AlertDescription>
                    {state.message} Please ensure your API key is set up correctly.
                  </AlertDescription>
                </Alert>
            )}
        </div>
      </div>
    </section>
  );
}
