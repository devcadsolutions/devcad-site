import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CtaBand() {
  return (
    <section className="pt-12 md:pt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary px-5 py-10 text-primary-foreground shadow-[0_30px_80px_-44px_rgba(62,46,33,0.64)] sm:px-8 lg:px-10 lg:py-12">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,hsl(0_0%_100%_/_0.12),transparent_65%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div className="space-y-4 reveal-left">
              <h2 className="font-headline text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
                Tell me the workflow that keeps wasting your team&apos;s time.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg md:leading-8">
                Send the software involved, the manual steps, where the process breaks, and what a better handoff would look like. I&apos;ll help you figure out whether it needs a small script, a Revit add-in, an AutoCAD tool, an APS workflow, or better documentation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-base">
                <Link href="/contact">
                  Tell Me The Workflow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/35 bg-transparent px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.links.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email on Gmail
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/35 bg-transparent px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <a href="https://www.linkedin.com/in/engrjvb/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
