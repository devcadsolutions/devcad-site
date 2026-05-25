import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { portfolioProjects } from "@/lib/portfolio-projects";

const FEATURED_SLUGS = [
  "revit-toposolid-topography-alignment-tool",
  "cracknell-import-family-via-cad",
  "cracknell-revit-toolbar",
];

export default function FeaturedWork() {
  const featured = FEATURED_SLUGS
    .map((slug) => portfolioProjects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof portfolioProjects;

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4 reveal-left">
              <span className="eyebrow">Project Examples</span>
              <h2 className="section-heading">Workflow pain turned into practical internal tools.</h2>
              <p className="section-copy">
                A few examples from the places where production teams lose time: Revit geometry, CAD-to-BIM placement,
                internal tool access, Autodesk cloud extraction, and repeatable technical delivery work.
              </p>
            </div>
            <Button asChild size="lg" className="w-full rounded-full px-6 sm:w-auto">
              <Link href="/work">
                See More Project Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ProjectCaseStudyList projects={featured} />
        </div>
      </div>
    </section>
  );
}
