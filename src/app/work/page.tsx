import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import PortfolioTagBrowser from "@/components/portfolio/PortfolioTagBrowser";
import { portfolioProjects } from "@/lib/portfolio-projects";
import PageHeroBackground from "@/components/layout/PageHeroBackground";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore DevCAD Solutions case studies across Revit API, AutoCAD automation, APS workflows, BIM/CAD tooling, and technical estimators.",
};

export default function WorkPage() {
  const portfolioCategories = siteConfig.portfolioCategories.filter((c) => !c.hidden);

  return (
    <>
      <header className="relative overflow-hidden py-20 md:py-24 lg:py-32">
        <PageHeroBackground opacity="82" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal-up">
            <span className="eyebrow">Portfolio</span>
            <h1 className="mx-auto mt-6 max-w-5xl font-headline text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl">
              Automation projects for BIM, CAD, and technical teams.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-muted-foreground md:text-xl md:leading-8">
              Browse by category, then review concise case studies across CAD, BIM, APS, and delivery tooling.
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell px-6 py-12 sm:px-8 lg:py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-3">
                <h2 className="section-heading">Portfolio Categories</h2>
                <p className="text-base leading-7 text-muted-foreground">Pick a lane.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioCategories.map((category, index) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="soft-panel group p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_56px_-36px_rgba(79,62,46,0.45)] reveal-up"
                  style={{ animationDelay: `${100 + index * 70}ms` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Portfolio</p>
                  <h3 className="mt-3 font-headline text-2xl font-semibold tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary">
                    {category.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{portfolioProjects.filter((project) => project.categoryHref === category.href).length} case studies</p>
                  <p className="mt-6 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                    View category
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="pt-0">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="section-shell px-6 py-12 sm:px-8 lg:py-16">
                <p className="text-sm text-muted-foreground">Loading portfolio browser...</p>
              </div>
            </div>
          </section>
        }
      >
        <PortfolioTagBrowser projects={portfolioProjects} />
      </Suspense>
    </>
  );
}
