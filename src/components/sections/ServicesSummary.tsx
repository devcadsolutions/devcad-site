import { siteConfig } from "@/config/site";

const serviceAccents = [
  "bg-[#e8d7c1] text-[#6a4d34]",
  "bg-[#dfe8e2] text-[#476553]",
  "bg-[#e0e5ef] text-[#4d5c7f]",
  "bg-[#eadfda] text-[#7a5548]",
  "bg-[#e6dfeb] text-[#655072]",
  "bg-[#e8e2d5] text-[#6c5c3e]",
];

export default function ServicesSummary() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell overflow-hidden px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="max-w-3xl space-y-4 reveal-left">
              <span className="eyebrow">Core Services</span>
              <h2 className="section-heading">Focused AEC automation services.</h2>
              <p className="section-copy">
                Six service lanes. Clear scope. Practical output.
              </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <article
                key={service.title}
                className="soft-panel group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(79,62,46,0.45)] reveal-up"
                style={{ animationDelay: `${100 + index * 70}ms` }}
              >
                <div className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${serviceAccents[index % serviceAccents.length]}`}>
                  Core Service
                </div>
                <h3 className="mt-4 font-headline text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <div className="mt-6 border-t border-border/70 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Focus Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
