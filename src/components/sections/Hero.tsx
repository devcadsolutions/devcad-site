import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveAvatarHero from "@/components/sections/avatar-hero/InteractiveAvatarHero";

export default function Hero() {
  return (
    <>
      <InteractiveAvatarHero />

      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="space-y-6 reveal-left" style={{ animationDelay: "120ms" }}>
          <span className="eyebrow">What I Build</span>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Custom tools for BIM and CAD teams that want less manual work, cleaner delivery, and more reliable internal workflows.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">Revit API</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">AutoCAD .NET</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">AutoLISP Modernization</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">WPF Tools</span>
            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">APS Integrations</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/work">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
