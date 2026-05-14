import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { getProjectsByCategory } from "@/lib/portfolio-projects";

export const metadata: Metadata = {
  title: "CAD Tools",
  description: "AutoCAD automation case studies including productivity tools, standards support, and legacy tool modernization.",
};

export default function CadToolsPage() {
  const projects = getProjectsByCategory("/work/cad-tools");

  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Portfolio Category</p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">CAD Tools</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            AutoCAD automation work focused on productivity, drafting consistency, and maintainable internal tooling.
          </p>
        </div>

        <ProjectCaseStudyList projects={projects} />

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/work">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
