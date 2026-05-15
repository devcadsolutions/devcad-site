import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { getProjectsByCategory } from "@/lib/portfolio-projects";

export const metadata: Metadata = {
  title: "APS / Cloud Automation",
  description: "Autodesk Platform Services and cloud-connected workflow case studies for exports, model processing, and delivery automation.",
};

export default function ApsPage() {
  const projects = getProjectsByCategory("/work/aps");

  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Portfolio Category</p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">APS / Cloud Automation</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Cloud-connected case studies focused on Autodesk Platform Services, export workflows, model processing, and delivery support.
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
