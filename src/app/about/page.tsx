import type { Metadata } from "next";
import Image from "next/image";
import LightboxImage from "@/components/ui/LightboxImage";
import Link from "next/link";
import { Lightbulb, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import CtaBand from "@/components/sections/CtaBand";

const timelinePhases = [
  {
    label: "Phase 1",
    title: "Engineering Foundation",
    body: "Started in engineering and drafting-oriented work, building a practical understanding of production workflows, modeling needs, and where teams typically lose time.",
  },
  {
    label: "Phase 2",
    title: "Process and Operations Exposure",
    body: "Expanded into work that involved process thinking, internal coordination, and support for digital systems. That exposure helped sharpen the focus on repeatability, training, and operational clarity.",
  },
  {
    label: "Phase 3",
    title: "Automation Shift",
    body: "Moved from solving workflow pain manually into building tools, scripts, estimators, and support systems that reduce repetitive work and make delivery more consistent.",
  },
  {
    label: "Phase 4",
    title: "Current Specialization",
    body: "The current focus is Revit API tooling, AutoCAD .NET, AutoLISP modernization, APS-connected workflows, documentation, and rollout support for BIM and CAD teams.",
  },
];

const goldBtn = "min-w-40 rounded-none border border-primary bg-primary text-primary-foreground hover:bg-primary/90";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Justine Bautista, the solutions engineer behind DevCAD Solutions.",
};

function Divider() {
  return <div className="mx-auto h-px w-full max-w-6xl bg-primary/60" />;
}

export default function AboutPage() {
  const profileImage =
    PlaceHolderImages.find((img) => img.id === "hero-image-1") ??
    PlaceHolderImages.find((img) => img.id === "footer-avatar");

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/60 via-background to-background pt-24 md:pt-32">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-border/70 bg-card shadow-[0_20px_60px_rgba(90,82,76,0.12)]">
            <div className="grid lg:grid-cols-[0.95fr_1.1fr]">
              <div className="flex flex-col items-center justify-center gap-6 bg-card px-8 py-12 text-center md:px-12">
                {profileImage && (
                  <LightboxImage
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    data-ai-hint={profileImage.imageHint}
                    width={320}
                    height={320}
                    className="h-52 w-52 rounded-sm object-cover shadow-lg"
                  />
                )}
                <div className="space-y-3">
                  <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
                    Justine Bautista
                  </h1>
                  <p className="text-xl text-muted-foreground">Solutions Engineer</p>
                </div>
                <Button
                  asChild
                  className="min-w-40 rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={`mailto:${siteConfig.links.email}`}>Email me</Link>
                </Button>
              </div>

              <div className="bg-primary px-8 py-12 text-primary-foreground md:px-14 lg:px-16">
                <div className="mx-auto max-w-xl space-y-8">
                  <div className="space-y-6">
                    <h2 className="font-headline text-4xl font-bold text-primary-foreground sm:text-5xl">
                      About Me
                    </h2>
                    <p className="text-lg text-primary-foreground/90">
                      I&apos;m a civil engineer turned software builder focused on automation for BIM, CAD, and technical delivery teams. My work sits at the intersection of engineering workflows, internal tooling, and practical software implementation.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className={goldBtn}>
                      <Link href="/downloads">Resume</Link>
                    </Button>
                    <Button asChild className={goldBtn}>
                      <Link href="/work">Portfolio</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 bg-card px-8 py-10 md:px-12">
              <div className="space-y-6 text-lg text-foreground/85">
                <p>Solutions is actually my middle name.</p>
                <p>
                  I started from engineering and drafting work, which made repetitive production pain easy to spot. The more I saw how much time teams were losing to manual tasks, the more I moved toward building tools instead of working around the friction.
                </p>
                <p>
                  That evolved into a more specialized focus on Revit API tools, AutoCAD automation, workflow utilities, structured estimators, and support material that helps internal teams actually adopt the systems they invest in.
                </p>
              </div>

              <Divider />

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Professional Timeline</p>
                  <h3 className="font-headline text-3xl font-bold text-foreground">How the work evolved</h3>
                  <p className="max-w-3xl text-sm text-muted-foreground">
                    A concise career arc based on the public profile context available and the work represented throughout this site.
                  </p>
                </div>

                <div className="space-y-5">
                  {timelinePhases.map((phase) => (
                    <div key={phase.label} className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
                      <div className="soft-panel p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">{phase.label}</p>
                        <p className="mt-2 font-semibold text-foreground">{phase.title}</p>
                      </div>
                      <div className="soft-panel p-5">
                        <p className="text-sm text-foreground/85">{phase.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Divider />

              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="space-y-5">
                  <p className="max-w-md text-xl italic text-muted-foreground">
                    To improve drafting and modeling workflows through more efficient, accurate, and sustainable technical systems.
                  </p>
                  <div className="flex items-center gap-4">
                    <Target aria-hidden="true" className="h-16 w-16 shrink-0 text-foreground" strokeWidth={1.8} />
                    <h3 className="font-headline text-5xl font-bold text-foreground">
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <h3 className="font-headline text-5xl font-bold text-foreground">
                      Vision
                    </h3>
                    <Lightbulb aria-hidden="true" className="h-16 w-16 shrink-0 text-foreground" strokeWidth={1.8} />
                  </div>
                  <p className="max-w-md text-xl text-muted-foreground">
                    To provide local and global teams with dependable CAD, BIM, and automation solutions that improve delivery quality and reduce avoidable manual work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
