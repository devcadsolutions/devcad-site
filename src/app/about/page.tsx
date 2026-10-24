import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CareerTimeline from "@/components/sections/about/CareerTimeline";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Justine Bautista",
  description:
    "Licensed civil engineer turned CAD/BIM software developer. Background in plant design and CAD production, now building Revit, AutoCAD, and APS automation for AEC teams.",
  path: "/about",
  type: "profile",
});

const principles = [
  {
    title: "Engineering-aware",
    body: "Built with drawing, model, and delivery constraints in mind, not treated as a generic software problem.",
  },
  {
    title: "Practical by design",
    body: "Focused dialogs, clear buttons, useful defaults. Tools a production team can adopt and maintain.",
  },
  {
    title: "Rollout-conscious",
    body: "Setup notes, user guides, and edge cases documented, because a tool nobody uses has no value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-8 pt-12 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center lg:gap-16">
            <div className="max-w-3xl space-y-5 reveal-up">
              <span className="eyebrow">About</span>
              <h1 className="font-headline text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                Justine Bautista
              </h1>
              <p className="text-lg font-medium leading-7 text-foreground/90 sm:text-xl sm:leading-8">
                Licensed civil engineer turned software developer, building automation for BIM, CAD, and technical delivery teams.
              </p>
              <div className="section-copy space-y-4">
                <p>
                  I started in engineering and drafting environments, where repetitive work, manual checking, and
                  disconnected processes were part of everyday delivery. Over time that pushed me toward building better
                  systems instead of asking teams to keep working around the same friction.
                </p>
                <p>
                  Today I build Revit add-ins, AutoCAD tools, and Autodesk Platform Services workflows, from the first
                  conversation about the problem through to the user guide.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-foreground bg-transparent px-6 hover:bg-foreground hover:text-background">
                  <Link href="/work">See my work</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-56 sm:w-64 md:w-72 lg:w-80">
              <Image
                src={`${siteConfig.basePath}/profile/prof-pic.webp`}
                alt="Illustrated portrait of Justine at a desk with CAD drawings and code on screen"
                width={640}
                height={640}
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 256px"
                className="h-auto w-full rounded-2xl border border-border/70 shadow-[0_24px_56px_-36px_rgba(79,62,46,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="section-shell grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-10 lg:py-12">
            <div className="space-y-4">
              <span className="eyebrow">Why this work</span>
              <h2 className="section-heading">Software that makes technical work easier to trust, repeat, and maintain.</h2>
              <div className="section-copy space-y-4">
                <p>
                  Most workflow pain in BIM and CAD teams isn&apos;t dramatic. It shows up as small repeated actions,
                  manual checks, awkward handoffs, and tools that technically work but never quite fit how people deliver.
                </p>
                <p>
                  I build tools that respect how production actually happens, so teams spend more time on valuable
                  technical work and less on avoidable repetition.
                </p>
              </div>
            </div>
            <ul className="grid gap-3 self-center">
              {principles.map((item) => (
                <li key={item.title} className="soft-panel p-5">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <CareerTimeline />
        </div>
      </section>

      <CtaBand
        title="If your team is dealing with repetitive BIM or CAD work, let’s talk."
        body="I’m most useful when there is real technical friction to solve: repetitive production steps, messy handoffs, internal tooling gaps, or a workflow that works on paper but slows the team down in practice."
      />
    </>
  );
}
