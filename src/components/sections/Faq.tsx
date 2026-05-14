
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of clients do you work with?",
    answer: "We partner with a diverse range of clients, from innovative startups to established enterprises across industries like architecture, engineering, and manufacturing. Our ideal partner is anyone looking to solve complex workflow or software challenges."
  },
  {
    question: "How do you handle project confidentiality?",
    answer: "We take confidentiality very seriously. All projects can be handled under strict Non-Disclosure Agreements (NDAs), ensuring your intellectual property and workflow secrets are protected."
  },
  {
    question: "Can you take a project from just an idea?",
    answer: "Absolutely. Many of our most successful tools started as a simple observation of a repetitive task. We help you define the requirements, build the prototype, and deliver a production-ready solution."
  },
  {
    question: "Is your software compatible with the latest CAD versions?",
    answer: "Yes, we develop tools that are compatible with the latest releases of AutoCAD, Revit, and other major design software, and we offer support for legacy versions when required."
  }
];

export default function Faq() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Quick answers to common questions about our services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
