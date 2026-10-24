import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, ExternalLink, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/ui/ImageGallery";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { pageMetadata } from "@/lib/metadata";
import {
  getCategoryLabel,
  getProjectBySlug,
  getProjectImages,
  getRelatedProjects,
  portfolioProjects,
} from "@/lib/portfolio-projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case Study" };
  return pageMetadata({
    title: project.title,
    description: project.overview,
    path: `/work/case-studies/${project.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const images = getProjectImages(project).map((img) => ({ id: img.id, src: img.imageUrl, alt: img.description }));
  const [cover, ...rest] = images;
  const categoryLabel = getCategoryLabel(project.categoryHref);
  const related = getRelatedProjects(project);

  return (
    <article>
      <section className="pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
              <li>
                <Link href="/work" className="underline-offset-4 hover:text-foreground hover:underline">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={project.categoryHref} className="underline-offset-4 hover:text-foreground hover:underline">
                  {categoryLabel}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
            <div className="space-y-5">
              <span className="eyebrow">Case study · {categoryLabel}</span>
              <h1 className="font-headline text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                {project.title}
              </h1>
              {project.employer && (
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Built in-house at {project.employer}
                </p>
              )}
              <p className="section-copy">{project.overview}</p>

              <ul className="flex flex-wrap gap-2" aria-label="Built with">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-xs font-medium text-foreground/85">
                    {tech}
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Open live project
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              )}
            </div>

            {cover ? (
              <ImageGallery
                images={[cover]}
                priorityFirst
                sizes="(min-width: 1024px) 560px, 100vw"
                itemClassName="shadow-[0_24px_56px_-36px_rgba(79,62,46,0.45)]"
              />
            ) : (
              <div className="soft-panel p-6 text-sm leading-6 text-muted-foreground">
                <p className="font-semibold text-foreground">No public screenshots</p>
                <p className="mt-1">
                  This work was delivered on client or internal infrastructure, so screenshots aren&apos;t published here. I can
                  walk through the workflow on a call.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          {project.employerNote && (
            <aside className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-6 text-foreground/85">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" aria-hidden="true" />
              <p>{project.employerNote}</p>
            </aside>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            <StoryCard label="The problem" value={project.problem} />
            <StoryCard label="What I built" value={project.solution} />
            <StoryCard label="The result" value={project.result} />
          </div>

          <div className="soft-panel p-6 sm:p-8">
            <h2 className="font-headline text-2xl font-semibold tracking-[-0.03em] text-foreground">Key features</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-foreground/85">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {rest.length > 0 && (
            <div className="space-y-5">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-headline text-2xl font-semibold tracking-[-0.03em] text-foreground">Screens</h2>
                <p className="text-sm text-muted-foreground">{images.length} images · select to enlarge</p>
              </div>
              <ImageGallery
                images={images}
                className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                itemClassName="aspect-[4/3]"
                fit="cover"
                sizes="(min-width: 1024px) 300px, 45vw"
              />
            </div>
          )}
        </div>
      </section>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="font-headline text-2xl font-semibold tracking-[-0.03em]">Need something similar?</h2>
              <p className="mt-1 text-sm leading-6 text-primary-foreground/80">
                Describe the workflow and the software involved. I&apos;ll reply with questions or a first take on scope.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="w-full shrink-0 rounded-full px-6 sm:w-auto">
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {related.length > 0 && (
            <div className="mt-14 space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="section-heading text-2xl md:text-3xl">Related work</h2>
                <Link
                  href={project.categoryHref}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  All {categoryLabel}
                </Link>
              </div>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <ProjectCard project={p} headingLevel="h3" />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

function StoryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-panel p-5 sm:p-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">{label}</h2>
      <p className="mt-3 text-sm leading-6 text-foreground/85 sm:text-[0.95rem] sm:leading-7">{value}</p>
    </div>
  );
}
