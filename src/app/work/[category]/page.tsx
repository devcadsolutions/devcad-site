import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { getProjectsByCategory } from "@/lib/portfolio-projects";
import { siteConfig } from "@/config/site";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

function getCategoryConfig(categorySlug: string) {
  const href = `/work/${categorySlug}`;
  return siteConfig.portfolioCategories.find((c) => c.href === href);
}

export function generateStaticParams() {
  return siteConfig.portfolioCategories.map((c) => ({
    category: c.href.replace("/work/", ""),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const config = getCategoryConfig(category);
  if (!config) return { title: "Portfolio Category" };
  return {
    title: config.label,
    description: config.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const config = getCategoryConfig(category);

  if (!config) notFound();

  const projects = getProjectsByCategory(config.href);

  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Portfolio Category</p>
          <h1 className="mt-4 font-headline text-4xl font-bold sm:text-5xl">{config.label}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">{config.description}</p>
        </div>

        {projects.length > 0 ? (
          <ProjectCaseStudyList projects={projects} />
        ) : (
          <div className="py-16 text-center text-muted-foreground">
            <p className="text-lg">No case studies yet — check back soon.</p>
          </div>
        )}

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/work">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
