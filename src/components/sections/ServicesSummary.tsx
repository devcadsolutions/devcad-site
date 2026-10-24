import { Braces, Cloud, FileStack, GraduationCap, RefreshCcw, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceAccents = [
  "bg-primary/8 text-primary",
  "bg-primary/8 text-primary",
  "bg-primary/8 text-primary",
  "bg-primary/8 text-primary",
  "bg-primary/8 text-primary",
  "bg-primary/8 text-primary",
];

const serviceLabels = [
  "Revit API",
  "AutoCAD",
  "APS / Cloud",
  "BIM Workflow",
  "Modernization",
  "Documentation",
];

const serviceIcons = [Braces, Wrench, Cloud, FileStack, RefreshCcw, GraduationCap];

const clientNeeds = [
  "We keep doing this manually",
  "We need tools our team can actually use",
  "We need cloud or APS automation",
  "We need better CAD/BIM standards",
  "Our old tools are hard to maintain",
  "We need documentation so tools get adopted",
];

export default function ServicesSummary() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell overflow-hidden px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="max-w-3xl space-y-4 reveal-left">
            <span className="eyebrow">Ways I Can Help</span>
            <h2 className="section-heading">Start with the sentence your team keeps repeating.</h2>
            <p className="section-copy">
              The work may become a Revit add-in, an AutoCAD command, a WPF desktop tool, an APS workflow, or a better-documented internal process. The starting point is the production friction.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {siteConfig.services.map((service, index) => {
              const ServiceIcon = serviceIcons[index % serviceIcons.length];

              return (
              <article
                key={service.title}
                className="soft-panel group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(79,62,46,0.35)] reveal-up"
                style={{ animationDelay: `${100 + index * 70}ms` }}
              >
                <div className="hidden items-start justify-between gap-4 sm:flex">
                  <div className={`inline-flex w-fit rounded-full border border-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${serviceAccents[index % serviceAccents.length]}`}>
                    {serviceLabels[index % serviceLabels.length]}
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-white/80 text-foreground/80">
                    <ServiceIcon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                </div>
                <p className="text-sm font-semibold text-primary sm:mt-4">
                  {clientNeeds[index % clientNeeds.length]}
                </p>
                <h3 className="mt-1 font-headline text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <div className="mt-4 hidden border-t border-border/70 pt-4 sm:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Focus Stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border/70 bg-white/70 px-3 py-1 text-xs font-medium text-foreground/85"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
