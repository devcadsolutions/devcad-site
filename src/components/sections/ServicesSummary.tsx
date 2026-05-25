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
        <div className="section-shell overflow-hidden px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="max-w-3xl space-y-4 reveal-left">
            <span className="eyebrow">Ways I Can Help</span>
            <h2 className="section-heading">Start with the sentence your team keeps repeating.</h2>
            <p className="section-copy">
              The work may become a Revit add-in, an AutoCAD command, a WPF desktop tool, an APS workflow, or a better-documented internal process. The starting point is the production friction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const ServiceIcon = serviceIcons[index % serviceIcons.length];

              return (
              <article
                key={service.title}
                className="soft-panel group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(79,62,46,0.35)] reveal-up"
                style={{ animationDelay: `${100 + index * 70}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`inline-flex w-fit rounded-full border border-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${serviceAccents[index % serviceAccents.length]}`}>
                    {serviceLabels[index % serviceLabels.length]}
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-white/80 text-foreground/80">
                    <ServiceIcon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {clientNeeds[index % clientNeeds.length]}
                </p>
                <h3 className="mt-2 font-headline text-xl font-semibold tracking-[-0.02em] text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <div className="mt-6 border-t border-border/70 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Focus Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border/70 bg-white/70 px-4 py-2 text-xs font-medium text-foreground/85"
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
