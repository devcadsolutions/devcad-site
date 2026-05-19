import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Mail, Target } from "lucide-react";
import LightboxImage from "@/components/ui/LightboxImage";
import { Button } from "@/components/ui/button";
import CareerTimeline from "@/components/sections/about/CareerTimeline";
import { siteConfig } from "@/config/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const capabilityCards = [
  {
    title: "Workflow Automation",
    body: "I design tools that remove repetitive steps, reduce avoidable checking, and make recurring technical work easier to execute consistently.",
  },
  {
    title: "BIM / CAD Tooling",
    body: "I build around the real constraints of drawing production, model management, exports, and standards-driven delivery instead of treating them like generic software problems.",
  },
  {
    title: "Implementation Support",
    body: "Useful tooling is not enough on its own. I also think about rollout, team usability, and what people need in order to trust and adopt a new workflow.",
  },
  {
    title: "Documentation and Rollout",
    body: "I create the supporting material that helps internal teams use a solution properly, onboard faster, and keep the process working after delivery.",
  },
];

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Justine Bautista, the solutions engineer behind DevCAD Solutions.",
};

function Divider() {
  return <div className="mx-auto h-px w-full max-w-6xl bg-primary/15" />;
}

export default function AboutPage() {
  const profileImage =
    PlaceHolderImages.find((img) => img.id === "hero-image-1") ??
    PlaceHolderImages.find((img) => img.id === "footer-avatar");

  return (
    <section className="bg-gradient-to-b from-secondary/60 via-background to-background pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="section-shell overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-primary px-6 py-10 text-primary-foreground sm:px-8 lg:px-12 lg:py-14">
                <div className="max-w-2xl space-y-6">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/85">
                    Founder Story
                  </span>
                  <div className="space-y-4">
                    <h1 className="font-headline text-4xl font-bold sm:text-5xl lg:text-6xl">
                      Justine Bautista
                    </h1>
                    <p className="text-lg text-primary-foreground/78 sm:text-xl">
                      Solutions Engineer building practical automation for BIM, CAD, and technical delivery teams.
                    </p>
                    <p className="max-w-xl text-base text-primary-foreground/86 sm:text-lg">
                      I started in engineering and drafting environments, where repetitive work, manual checking, and disconnected processes were part of everyday delivery. Over time, that pushed me toward building better systems instead of asking teams to keep working around the same friction.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full bg-white px-6 text-primary hover:bg-white/92">
                      <Link href="/contact">
                        Contact Me
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white/30 bg-transparent px-6 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                    >
                      <Link href="/work">View Portfolio</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center bg-card px-6 py-10 sm:px-8 lg:px-12">
                <div className="w-full max-w-md space-y-6">
                  {profileImage && (
                    <LightboxImage
                      src={profileImage.imageUrl}
                      alt={profileImage.description}
                      data-ai-hint={profileImage.imageHint}
                      width={520}
                      height={620}
                      className="h-auto w-full rounded-[2rem] object-cover shadow-[0_24px_70px_-36px_rgba(79,62,46,0.55)]"
                    />
                  )}
                  <div className="soft-panel space-y-3 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                      What I bring
                    </p>
                    <p className="text-base text-foreground/85">
                      Engineering-aware software thinking, delivery-focused tooling, and support material that helps teams actually use the systems they invest in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-shell px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="space-y-5">
                <span className="eyebrow">Why this work matters to me</span>
                <h2 className="section-heading max-w-2xl">
                  I care about software that makes technical work easier to trust, repeat, and maintain.
                </h2>
                <div className="space-y-4 text-base text-foreground/82 md:text-lg">
                  <p>
                    A lot of workflow pain in BIM and CAD teams is not dramatic. It shows up as small repeated actions, manual checks, awkward handoffs, and tools that technically work but never fully fit how people deliver. Those small gaps add up quickly.
                  </p>
                  <p>
                    My interest in software came from seeing that pattern over and over again. I wanted to build tools that respect the reality of production environments, not just the logic of the code. That means paying attention to usability, clarity, rollout, and the people who will depend on the result.
                  </p>
                  <p>
                    The goal is simple: create systems that reduce friction, improve consistency, and help teams spend more time on valuable technical work instead of avoidable repetition.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="soft-panel p-5">
                  <p className="text-sm font-semibold text-foreground">Engineering-aware</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Built with drawing, model, and delivery constraints in mind.
                  </p>
                </div>
                <div className="soft-panel p-5">
                  <p className="text-sm font-semibold text-foreground">Practical by design</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Focused on solutions that teams can actually adopt and maintain.
                  </p>
                </div>
                <div className="soft-panel p-5">
                  <p className="text-sm font-semibold text-foreground">Rollout-conscious</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Documentation and support matter as much as the tool itself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CareerTimeline />

          <div className="section-shell px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="space-y-8">
              <div className="max-w-3xl space-y-3">
                <span className="eyebrow">Capabilities</span>
                <h2 className="section-heading">What I can help teams do</h2>
                <p className="section-copy">
                  The work is not just about writing code. It is about improving the way technical teams deliver, support, and scale their workflows.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {capabilityCards.map((card) => (
                  <div key={card.title} className="soft-panel card-interactive p-6">
                    <h3 className="font-headline text-2xl font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-shell px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="space-y-8">
              <Divider />
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="soft-panel p-6">
                  <div className="flex items-center gap-3">
                    <Target aria-hidden="true" className="h-10 w-10 shrink-0 text-foreground" strokeWidth={1.8} />
                    <h2 className="font-headline text-3xl font-bold text-foreground">
                      Mission
                    </h2>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">
                    Improve drafting and modeling workflows through technical systems that are more efficient, more dependable, and easier to sustain.
                  </p>
                </div>

                <div className="soft-panel p-6">
                  <div className="flex items-center gap-3">
                    <Lightbulb aria-hidden="true" className="h-10 w-10 shrink-0 text-foreground" strokeWidth={1.8} />
                    <h2 className="font-headline text-3xl font-bold text-foreground">
                      Vision
                    </h2>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">
                    Support local and global teams with dependable CAD, BIM, and automation solutions that improve delivery quality and reduce avoidable manual work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-primary px-6 py-10 text-primary-foreground shadow-[0_30px_80px_-40px_rgba(62,46,33,0.7)] sm:px-8 lg:px-12 lg:py-12">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,hsl(39_44%_76%_/_0.22),transparent_65%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/85">
                  Let&apos;s Build Something Useful
                </span>
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  If your team is dealing with repetitive BIM or CAD work, let&apos;s talk about a better workflow.
                </h2>
                <p className="max-w-2xl text-base text-primary-foreground/78 md:text-lg">
                  I&apos;m most useful when there is real technical friction to solve: repetitive production steps, messy handoffs, internal tooling gaps, or a workflow that works on paper but slows the team down in practice.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-base">
                  <Link href="/contact">
                    Start the conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/35 bg-transparent px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <Link href={`mailto:${siteConfig.links.email}`}>
                    <Mail className="h-4 w-4" />
                    Email me directly
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
