import Link from "next/link";
import { ArrowRight, Braces, Cloud, FileStack, GraduationCap, RefreshCcw, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceIcons = [Braces, Wrench, Cloud, FileStack, RefreshCcw, GraduationCap];

// The sentence a client typically starts with, in the same order as siteConfig.services.
const clientNeeds = [
  "“We keep doing this manually in Revit.”",
  "“Our drafters repeat the same AutoCAD steps.”",
  "“We need exports to run in the cloud.”",
  "“Models, drawings and spreadsheets don’t connect.”",
  "“Our old LISP tools are hard to maintain.”",
  "“We built a tool, but nobody uses it.”",
];

export default function ServicesSummary() {
  return (
    <section aria-labelledby="services-summary" className="pt-0 md:pt-0 lg:pt-0">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow">Ways I can help</span>
              <h2 id="services-summary" className="section-heading">
                Start with the sentence your team keeps repeating.
              </h2>
              <p className="section-copy">
                The fix might be a Revit add-in, an AutoCAD command, a desktop tool, an APS workflow, or better
                documentation. The starting point is always the production friction.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Services, timelines &amp; process
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <li key={service.title} className="soft-panel flex gap-4 p-5">
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm italic text-primary">{clientNeeds[index]}</p>
                    <h3 className="mt-1 font-headline text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground">{service.title}</h3>
                    <p className="mt-1.5 hidden text-sm leading-6 text-muted-foreground sm:block">{service.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
