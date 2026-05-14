import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { getProjectsByCategory } from "@/lib/portfolio-projects";

export const metadata: Metadata = {
  title: "Desktop Software",
  description: "Desktop and workbook-based tools for engineering estimation, internal workflows, and technical support systems.",
};

export default function DesktopSoftwarePage() {
  const projects = getProjectsByCategory("/work/desktop-software");

  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Portfolio Category</p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">Desktop Software</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Desktop-style and workbook-driven tools for technical estimation, operational support, and internal delivery workflows.
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
