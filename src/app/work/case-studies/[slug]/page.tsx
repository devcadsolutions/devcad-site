import type { Metadata } from "next";
import LightboxImage from "@/components/ui/LightboxImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, ExternalLink, ShieldAlert } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { getProjectBySlug, portfolioProjects } from "@/lib/portfolio-projects";
import { siteConfig } from "@/config/site";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
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
  const registeredImages = project.imageIds
    ? project.imageIds
        .map((id) => PlaceHolderImages.find((item) => item.id === id))
        .filter((item): item is ImagePlaceholder => Boolean(item))
    : image
    ? [image]
    : [];
  const galleryImages = registeredImages.filter((item) => item.id !== project.imageId);
  const desktopGalleryImages = galleryImages.filter((item) => !item.id.includes("mobile"));
  const mobileGalleryImages = galleryImages.filter((item) => item.id.includes("mobile"));
  const ungroupedGalleryImages = galleryImages.filter(
    (item) => !desktopGalleryImages.includes(item) && !mobileGalleryImages.includes(item)
  );
  const categoryLabel = siteConfig.portfolioCategories.find((c) => c.href === project.categoryHref)?.label ?? "Portfolio";

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

        <div className="space-y-12">
          <div className="section-shell overflow-hidden p-5 sm:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="eyebrow">Product Showcase</span>
                  <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>
                  {project.employer && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                        <Building2 className="h-3 w-3" />
                        Currently employed at {project.employer}
                      </span>
                    </div>
                  )}
                  <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
                  <p className="max-w-3xl text-base leading-relaxed text-foreground/80">{project.engagement}</p>
                </div>

                <div className="flex flex-wrap gap-2">
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

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                    >
                      Open Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <Link
                    href="#gallery"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/75 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                  >
                    View Gallery
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {image && (
                <div className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-primary/10 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                  <LightboxImage
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          {project.employerNote && (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/80 px-5 py-4 text-sm text-amber-900/85">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <p>{project.employerNote}</p>
            </div>
          )}

          <div className="grid gap-5 lg:grid-cols-3">
            <DetailCard label="Product Need" value={project.problem} />
            <DetailCard label="Experience Built" value={project.solution} />
            <DetailCard label="Portfolio Value" value={project.result} />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="soft-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Feature Highlights</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.keyFeatures.map((feature) => (
                  <p key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                    <span>{feature}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="soft-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">Built With</p>
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
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
                <p>{project.engagement}</p>
                <p>{project.result}</p>
              </div>
            </div>
          </div>

          {galleryImages.length > 0 && (
            <div id="gallery" className="space-y-8 scroll-mt-24">
              <div className="max-w-3xl space-y-3">
                <span className="eyebrow">Gallery</span>
                <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                  Product Screens
                </h2>
                <p className="text-base text-muted-foreground">
                  Desktop and mobile views are separated so the responsive experience is easy to review.
                </p>
              </div>

              <GallerySection title="Desktop" images={desktopGalleryImages} />
              <GallerySection title="Mobile" images={mobileGalleryImages} mobile />
              <GallerySection title="Additional Screens" images={ungroupedGalleryImages} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function GallerySection({
  title,
  images,
  mobile = false,
}: {
  title: string;
  images: ImagePlaceholder[];
  mobile?: boolean;
}) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-headline text-2xl font-bold text-foreground">{title}</h3>
        <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-xs font-medium text-muted-foreground">
          {images.length} screens
        </span>
      </div>
      <div className={mobile ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-5 lg:grid-cols-2"}>
        {images.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-primary/10">
            <LightboxImage
              src={img.imageUrl}
              alt={img.description}
              data-ai-hint={img.imageHint}
              width={mobile ? 500 : 1000}
              height={mobile ? 900 : 650}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-panel p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">{label}</p>
      <p className="mt-3 text-sm text-foreground/85">{value}</p>
    </div>
  );
}
