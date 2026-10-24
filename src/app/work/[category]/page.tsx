import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/layout/PageIntro";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { getProjectsByCategory } from "@/lib/portfolio-projects";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

function getCategoryConfig(categorySlug: string) {
  return siteConfig.portfolioCategories.find((c) => c.href === `/work/${categorySlug}` && !c.hidden);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.portfolioCategories
    .filter((c) => !c.hidden)
    .map((c) => ({ category: c.href.replace("/work/", "") }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const config = getCategoryConfig(category);
  if (!config) return { title: "Portfolio" };
  return pageMetadata({
    title: `${config.label} Case Studies`,
    description: config.description,
    path: config.href,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const config = getCategoryConfig(category);
  if (!config) notFound();

  const projects = getProjectsByCategory(config.href);
  const otherCategories = siteConfig.portfolioCategories.filter(
    (c) => !c.hidden && c.href !== config.href && getProjectsByCategory(c.href).length > 0
  );

  return (
    <>
      <PageIntro eyebrow="Portfolio" title={config.label}>
        <p>{config.description}</p>
      </PageIntro>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All portfolio work
          </Link>

          {projects.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <li key={project.slug}>
                  <ProjectCard project={project} headingLevel="h2" priority={index < 3} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-12 text-muted-foreground">No case studies in this category yet.</p>
          )}

          <nav aria-label="Other portfolio categories" className="mt-14 border-t border-border/70 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">More categories</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherCategories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="inline-flex min-h-10 items-center rounded-full border border-border/70 bg-white/75 px-4 text-sm font-medium text-foreground/85 transition hover:border-primary/40 hover:text-foreground"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10">
            <Button asChild size="lg" className="w-full rounded-full px-6 sm:w-auto">
              <Link href="/contact">
                Discuss a similar tool
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
