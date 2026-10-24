import Link from "next/link";
import { ArrowRight, Braces, Cloud, FileStack, GraduationCap, RefreshCcw, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/layout/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Revit API add-ins, AutoCAD .NET and AutoLISP automation, Autodesk Platform Services workflows, legacy tool modernization, and rollout documentation for AEC teams.",
  path: "/services",
});

const serviceIcons = [Braces, Wrench, Cloud, FileStack, RefreshCcw, GraduationCap];

const process = [
  {
    title: "Understand the workflow",
    detail: "We walk through the steps your team repeats, where they break, and what a good output looks like, before any code is written.",
  },
  {
    title: "Agree a focused scope",
    detail: "A clear, small first version: the commands, inputs, outputs, and the Revit or AutoCAD versions it must support.",
  },
  {
    title: "Build with regular check-ins",
    detail: "Remote and async-friendly. You see working builds early and test them on real project files.",
  },
  {
    title: "Hand off so it gets used",
    detail: "Installer or load instructions, a short user guide, and notes on edge cases so the tool keeps working after delivery.",
  },
];

const stack = [
  { label: "Revit & AutoCAD APIs", detail: "C#, .NET, WPF, Revit API, AutoCAD .NET" },
  { label: "Autodesk Platform Services", detail: "Model Derivative, ACC/Docs, Viewer" },
  { label: "Scripting", detail: "AutoLISP, Visual LISP, DCL, VBA, Dynamo, Python" },
  { label: "Web & backend", detail: "React, Next.js, TypeScript, Node.js" },
  { label: "Data & docs", detail: "Excel, Google Sheets, SOPs, rollout guides" },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Revit, AutoCAD, and APS automation for AEC teams."
        actions={
          <>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/contact">
                Describe your workflow
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-foreground bg-transparent px-6 hover:bg-foreground hover:text-background">
              <Link href="/work">See project examples</Link>
            </Button>
          </>
        }
      >
        <p>
          Custom tools for architecture and engineering teams that lose time to repeated clicks, slow exports, and
          standards that break under deadline pressure. Built by someone who has worked on the drafting and modelling
          side of delivery.
        </p>
      </PageIntro>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">What I offer</h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <li key={service.title} className="soft-panel flex flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-headline text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground">{service.title}</h3>
                    <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t border-border/70 pt-4 text-sm">
                    <dt className="font-semibold text-foreground">Typical timeline</dt>
                    <dd className="text-muted-foreground">{service.timeline.replace("Weeks", "weeks")}</dd>
                    <dt className="font-semibold text-foreground">Stack</dt>
                    <dd className="text-muted-foreground">{service.tools.join(", ")}</dd>
                  </dl>
                  {"workHref" in service && service.workHref && (
                    <Link
                      href={service.workHref}
                      className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                    >
                      Related case studies
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:px-10 lg:py-12">
            <div>
              <span className="eyebrow">How I work</span>
              <h2 className="section-heading mt-4">Problem first, then the smallest tool that solves it.</h2>
              <ol className="mt-8 space-y-6">
                {process.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">Tools &amp; stack</h2>
              <dl className="mt-5 divide-y divide-border/70 rounded-xl border border-border/70 bg-white/70">
                {stack.map((item) => (
                  <div key={item.label} className="px-4 py-3">
                    <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
                    <dd className="mt-0.5 text-sm text-muted-foreground">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
