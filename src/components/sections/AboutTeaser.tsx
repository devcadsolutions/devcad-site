import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const strengths = [
  {
    title: "AEC Context",
    description: "Built with drafting, BIM, and delivery realities in mind.",
  },
  {
    title: "Usable Tools",
    description: "Focused dialogs, clear buttons, useful defaults, and fewer confusing choices.",
  },
  {
    title: "Rollout Support",
    description: "Setup notes, edge cases, and handoff material so tools keep being used.",
  },
];

export default function AboutTeaser() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:px-10 lg:py-12">
          <div className="space-y-4">
            <span className="eyebrow">Why Work With Me</span>
            <h2 className="section-heading">
              Software built close to drawings, models, standards, and deadlines.
            </h2>
            <p className="section-copy">
              DevCAD sits between AEC production and software development: understanding how drawings are issued, how Revit models get messy, and how internal tools need to fit into real delivery habits.
            </p>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/about">
                Read My Background
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item) => (
              <li key={item.title} className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
