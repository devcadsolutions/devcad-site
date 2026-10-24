import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-projects";

const FEATURED_SLUGS = [
  "revit-toposolid-topography-alignment-tool",
  "cracknell-import-family-via-cad",
  "cracknell-revit-toolbar",
];

export default function FeaturedWork() {
  const featured = FEATURED_SLUGS.map((slug) => portfolioProjects.find((p) => p.slug === slug)).filter(
    (p): p is PortfolioProject => Boolean(p)
  );

  return (
    <section aria-labelledby="featured-work">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow">Recent work</span>
              <h2 id="featured-work" className="section-heading">
                Workflow pain turned into practical internal tools.
              </h2>
              <p className="section-copy">
                Revit geometry, CAD-to-BIM placement, and one-click access to internal tools, built in-house at Cracknell
                for their production team.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="hidden shrink-0 rounded-full border-foreground bg-transparent px-6 hover:bg-foreground hover:text-background md:inline-flex">
              <Link href="/work">
                All {portfolioProjects.length} case studies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <ul
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
            aria-label="Featured case studies"
          >
            {featured.map((project) => (
              <li key={project.slug} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <Button asChild size="lg" variant="outline" className="w-full rounded-full border-foreground bg-transparent px-6 hover:bg-foreground hover:text-background md:hidden">
            <Link href="/work">
              All {portfolioProjects.length} case studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
