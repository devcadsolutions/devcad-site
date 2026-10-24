import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/layout/PageIntro";
import PortfolioBrowser from "@/components/portfolio/PortfolioBrowser";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { getProjectsInDisplayOrder } from "@/lib/portfolio-projects";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Case studies in Revit API add-ins, AutoCAD automation, Autodesk Platform Services workflows, technical estimators, and web apps by Justine Bautista.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getProjectsInDisplayOrder();
  const categories = siteConfig.portfolioCategories
    .filter((c) => !c.hidden && projects.some((p) => p.categoryHref === c.href))
    .map(({ href, label }) => ({ href, label }));

  return (
    <>
      <PageIntro eyebrow="Portfolio" title="Tools built for real BIM and CAD production work.">
        <p>
          {projects.length} case studies across Revit, AutoCAD, Autodesk Platform Services, technical estimating, and web
          apps. Each one covers the workflow problem, the approach, and the result.
        </p>
      </PageIntro>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Case studies</h2>
          <PortfolioBrowser projects={projects} categories={categories} />

          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border/70 bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-headline text-xl font-semibold tracking-[-0.02em] text-foreground">Have a workflow like these?</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Send the software involved and the steps your team repeats. I&apos;ll tell you what kind of tool would fit.
              </p>
            </div>
            <Button asChild size="lg" className="w-full shrink-0 rounded-full px-6 sm:w-auto">
              <Link href="/contact">
                Describe your workflow
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
