import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { portfolioProjects } from "@/lib/portfolio-projects";

export default function FeaturedWork() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4 reveal-left">
              <span className="eyebrow">Featured Projects</span>
              <h2 className="section-heading">Case studies that show the problem, the build, and the practical outcome.</h2>
              <p className="section-copy">
                This is where the work gets specific: Revit tooling, AutoCAD automation, APS-connected workflows,
                and engineering estimation systems built for real delivery teams.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/work">
                Explore Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ProjectCaseStudyList projects={portfolioProjects} />
        </div>
      </div>
    </section>
  );
}
