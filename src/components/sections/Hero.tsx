import InteractiveAvatarHero from "@/components/sections/avatar-hero/InteractiveAvatarHero";
import { portfolioProjects } from "@/lib/portfolio-projects";

// Facts only: every item here is backed by the About page timeline or the portfolio.
const credentials = [
  { value: "Licensed", label: "Civil engineer by training" },
  { value: "Since 2019", label: "Automating CAD & BIM production" },
  { value: "30+", label: "AutoLISP routines shipped on one tool palette" },
  { value: `${portfolioProjects.length}`, label: "Case studies across Revit, AutoCAD & APS" },
];

export default function Hero() {
  return (
    <>
      <InteractiveAvatarHero />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">At a glance</h2>
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-border/70 bg-white/70 lg:grid-cols-4">
          {credentials.map((item, index) => (
            <div
              key={item.label}
              className={[
                "flex flex-col-reverse gap-1 p-4 sm:p-5",
                index % 2 === 1 ? "border-l border-border/70" : "",
                index >= 2 ? "border-t border-border/70 lg:border-t-0" : "",
                index === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <dt className="text-xs leading-5 text-muted-foreground sm:text-sm">{item.label}</dt>
              <dd className="font-headline text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
