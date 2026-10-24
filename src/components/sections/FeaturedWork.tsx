import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-projects";

const FEATURED_SLUGS = [
  "revit-toposolid-topography-alignment-tool",
  "cracknell-import-family-via-cad",
  "cracknell-revit-toolbar",
];

export default function FeaturedWork() {
  const featured = FEATURED_SLUGS
    .map((slug) => portfolioProjects.find((p) => p.slug === slug))
    .filter((p): p is PortfolioProject => Boolean(p));

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4 reveal-left">
              <span className="eyebrow">Project Examples</span>
              <h2 className="section-heading">Workflow pain turned into practical internal tools.</h2>
              <p className="section-copy">
                A few examples from the places where production teams lose time: Revit geometry, CAD-to-BIM placement,
                internal tool access, Autodesk cloud extraction, and repeatable technical delivery work.
              </p>
            </div>
            <Button asChild size="lg" className="w-full rounded-full px-6 sm:w-auto">
              <Link href="/work">
                See More Project Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3" aria-label="Featured case studies">
            {featured.map((project, index) => (
              <li key={project.slug} className="reveal-up w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto" style={{ animationDelay: `${100 + index * 80}ms` }}>
                <FeaturedCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: PortfolioProject }) {
  const image = PlaceHolderImages.find((item) => item.id === project.imageId);

  return (
    <Link
      href={`/work/case-studies/${project.slug}`}
      className="group soft-panel flex h-full flex-col overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-32px_rgba(79,62,46,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-primary/5">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/70 bg-white/75 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="font-headline text-xl font-semibold leading-snug tracking-[-0.03em] text-foreground">
          {project.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{project.result}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-1 text-sm font-semibold text-primary transition-all group-hover:gap-3">
          View case study
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
