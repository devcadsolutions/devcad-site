import InteractiveAvatarHero from "@/components/sections/avatar-hero/InteractiveAvatarHero";

const workflowFriction = [
  "Repeated sheet exports",
  "Manual Revit family placement",
  "CAD cleanup before issue",
  "Title block consistency",
  "Missing links and references",
  "Legacy AutoLISP tools",
  "APS extraction handoff",
];

export default function Hero() {
  return (
    <>
      <InteractiveAvatarHero />

      <div className="container mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 md:pb-16 md:pt-6 lg:px-8">
        <div className="space-y-5 reveal-left" style={{ animationDelay: "120ms" }}>
          <span className="eyebrow">Where The Work Usually Starts</span>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Most useful automation starts as ordinary production friction: the step someone repeats every week, the check that depends on memory, or the old script the team still needs but no longer wants to maintain.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {workflowFriction.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/30 bg-white/60 px-3 py-2.5 text-sm font-medium text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
