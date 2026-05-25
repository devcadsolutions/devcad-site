import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="space-y-8 reveal-left" style={{ animationDelay: "120ms" }}>
          <span className="eyebrow">Where The Work Usually Starts</span>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Most useful automation starts as ordinary production friction: the step someone repeats every week, the check that depends on memory, or the old script the team still needs but no longer wants to maintain.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowFriction.map((item) => (
              <div
                key={item}
                className="border-l-2 border-primary/30 bg-white/60 px-4 py-4 text-sm font-medium text-foreground/80"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-foreground/85">Revit API</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-foreground/85">AutoCAD .NET</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-foreground/85">AutoLISP Modernization</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-foreground/85">WPF Tools</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-foreground/85">APS Integrations</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/work">
                See Project Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Link href="/contact">Tell Me The Workflow</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
