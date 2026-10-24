import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCategoryLabel, getProjectCoverImage, type PortfolioProject } from "@/lib/portfolio-projects";

type ProjectCardProps = {
  project: PortfolioProject;
  /** Heading level for the title so pages keep a correct outline. */
  headingLevel?: "h2" | "h3";
  showCategory?: boolean;
  priority?: boolean;
  className?: string;
};

/** Compact case-study card: cover, stack, title, outcome, link. */
export default function ProjectCard({ project, headingLevel = "h3", showCategory = false, priority = false, className }: ProjectCardProps) {
  const image = getProjectCoverImage(project);
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        "group soft-panel relative flex h-full flex-col overflow-hidden p-3 transition duration-300 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:-translate-y-1 hover:shadow-[0_24px_56px_-32px_rgba(79,62,46,0.45)] motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border/60 bg-[#f1ede8]">
        {image ? (
          <Image
            src={image.imageUrl}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 90vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full flex-col justify-end bg-[linear-gradient(hsl(0_0%_100%/0.07)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%/0.07)_1px,transparent_1px),linear-gradient(135deg,hsl(27_8%_36%),hsl(27_10%_24%))] bg-[size:22px_22px,22px_22px,100%_100%] p-4 text-primary-foreground"
          >
            <Code2 className="mb-2 h-6 w-6 text-[#D8B07C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/80">
              {getCategoryLabel(project.categoryHref)}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {showCategory && (
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              {getCategoryLabel(project.categoryHref)}
            </span>
          )}
          {project.technologies.slice(0, showCategory ? 2 : 3).map((tech) => (
            <span key={tech} className="rounded-full border border-border/70 bg-white/75 px-2.5 py-1 text-[11px] font-medium text-foreground/80">
              {tech}
            </span>
          ))}
        </div>
        <Heading className="font-headline text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground">
          <Link href={`/work/case-studies/${project.slug}`} className="outline-none after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </Heading>
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{project.result}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3" aria-hidden="true">
            View case study
            <ArrowRight className="h-4 w-4" />
          </span>
          {project.employer && (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
              {project.employer}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
