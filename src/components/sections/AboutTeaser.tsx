import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const strengths = [
  {
    title: "AEC context",
    description: "Civil engineering degree and years on plant design and CAD production before writing tools for it.",
  },
  {
    title: "Usable tools",
    description: "Focused dialogs, clear buttons, useful defaults, and fewer confusing choices.",
  },
  {
    title: "Rollout support",
    description: "Setup notes, edge cases, and handoff material so tools keep being used.",
  },
];

export default function AboutTeaser() {
  return (
    <section aria-labelledby="about-teaser" className="pt-0 md:pt-0 lg:pt-0">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:px-10 lg:py-12">
          <div className="space-y-4">
            <span className="eyebrow">Why work with me</span>
            <h2 id="about-teaser" className="section-heading">
              Software built close to drawings, models, standards, and deadlines.
            </h2>
            <p className="section-copy">
              I understand how drawings get issued, how Revit models get messy, and how internal tools need to fit
              into real delivery habits, because I did that production work first.
            </p>
            <Button asChild size="lg" variant="outline" className="rounded-full border-foreground bg-transparent px-6 hover:bg-foreground hover:text-background">
              <Link href="/about">
                Read my background
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item) => (
              <li key={item.title} className="soft-panel p-4">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
