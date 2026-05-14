import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { PortfolioProject } from "@/lib/portfolio-projects";

type ProjectCaseStudyListProps = {
  projects: PortfolioProject[];
  title?: string;
  intro?: string;
};

export default function ProjectCaseStudyList({ projects, title, intro }: ProjectCaseStudyListProps) {
  return (
    <div className="space-y-8">
      {(title || intro) && (
        <div className="max-w-3xl space-y-4">
          {title && <h2 className="section-heading">{title}</h2>}
          {intro && <p className="text-base text-muted-foreground md:text-lg">{intro}</p>}
        </div>
      )}

      <div className="space-y-8">
        {projects.map((project, index) => {
          const image = PlaceHolderImages.find((item) => item.id === project.imageId);

          return (
            <article
              key={project.slug}
              className="section-shell overflow-hidden p-5 sm:p-6 lg:p-8 reveal-up"
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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
                  <div className="soft-panel p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Technologies</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-xs font-medium text-foreground/85"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Case Study</p>
                    <h3 className="font-headline text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-3">
                    <DetailCard label="Problem" value={project.problem} />
                    <DetailCard label="Solution" value={project.solution} />
                    <DetailCard label="Result" value={project.result} />
                  </div>

                  <div className="soft-panel p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Key Features</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.keyFeatures.slice(0, 4).map((feature) => (
                        <p key={feature} className="flex items-start gap-2 text-sm leading-6 text-foreground/85">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{feature}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/work/case-studies/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                    >
                      View this case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-panel p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">{label}</p>
      <p className="mt-2 text-sm leading-6 text-foreground/85">{value}</p>
    </div>
  );
}
