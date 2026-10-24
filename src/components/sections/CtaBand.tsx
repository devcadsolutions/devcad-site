import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type CtaBandProps = {
  title?: string;
  body?: string;
};

/** Closing call to action shared by the home, about and services pages. */
export default function CtaBand({
  title = "Tell me the workflow that keeps wasting your team’s time.",
  body = "Send the software involved, the manual steps, and where the process breaks. I’ll help you work out whether it needs a small script, a Revit add-in, an AutoCAD tool, an APS workflow, or better documentation.",
}: CtaBandProps) {
  return (
    <section className="pt-4 md:pt-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary px-5 py-10 text-primary-foreground shadow-[0_30px_80px_-44px_rgba(62,46,33,0.64)] sm:px-8 lg:px-10 lg:py-12">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,hsl(0_0%_100%_/_0.12),transparent_65%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-semibold tracking-[-0.035em] md:text-4xl">{title}</h2>
              <p className="max-w-2xl text-base leading-7 text-primary-foreground/85 md:text-lg md:leading-8">{body}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-base">
                <Link href="/contact">
                  Describe your workflow
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 rounded-full border-white/35 bg-transparent px-5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <a href={`mailto:${siteConfig.links.email}`}>
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email me
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 rounded-full border-white/35 bg-transparent px-5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
