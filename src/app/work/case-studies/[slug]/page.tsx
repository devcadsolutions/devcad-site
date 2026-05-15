import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getProjectBySlug, portfolioProjects } from "@/lib/portfolio-projects";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryLabels: Record<string, string> = {
  "/work/bim-tools": "BIM Tools",
  "/work/cad-tools": "CAD Tools",
  "/work/aps": "APS / Cloud Automation",
  "/work/desktop-software": "Desktop Software",
  "/work/web-apps-sites": "Web Apps & Sites",
  "/work/mobile-app": "Mobile App",
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study",
    };
  }

  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const image = PlaceHolderImages.find((item) => item.id === project.imageId);
  const categoryLabel = categoryLabels[project.categoryHref] ?? "Portfolio";

  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={project.categoryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {categoryLabel}
          </Link>
          <Link
            href="/work/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            Back to Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-10">
          <div className="max-w-4xl space-y-4">
            <span className="eyebrow">Case Study</span>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">{project.overview}</p>
            <p className="max-w-3xl text-base leading-7 text-foreground/80">{project.engagement}</p>
          </div>

          <div className="section-shell overflow-hidden p-5 sm:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="space-y-4">
                {image && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/70 bg-primary/10">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="soft-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Technologies</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-xs font-medium text-foreground/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="soft-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Tags</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/work?tag=${encodeURIComponent(tag)}`}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-4 lg:grid-cols-3">
                  <DetailCard label="Problem" value={project.problem} />
                  <DetailCard label="Approach" value={project.solution} />
                  <DetailCard label="Outcome" value={project.result} />
                </div>

                <div className="soft-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Project Story</p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-foreground/85">
                    <p>{project.engagement}</p>
                    <p>{project.solution}</p>
                    <p>{project.result}</p>
                  </div>
                </div>

                <div className="soft-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Key Features</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.keyFeatures.map((feature) => (
                      <p key={feature} className="flex items-start gap-2 text-sm leading-6 text-foreground/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-panel p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">{label}</p>
      <p className="mt-3 text-sm leading-6 text-foreground/85">{value}</p>
    </div>
  );
}
