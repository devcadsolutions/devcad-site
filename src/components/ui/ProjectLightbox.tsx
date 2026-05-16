"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, ArrowRight, ExternalLink, Building2, Tag } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio-projects";

type ProjectLightboxProps = {
  project: PortfolioProject;
  imageUrl: string;
  imageAlt: string;
  categoryLabel: string;
};

export default function ProjectLightbox({
  project,
  imageUrl,
  imageAlt,
  categoryLabel,
}: ProjectLightboxProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openLightbox = () => {
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const hasCaseStudy = true; // all projects have a case study page
  const hasLiveUrl = !!project.liveUrl;

  return (
    <>
      {/* Thumbnail trigger */}
      <button
        type="button"
        onClick={openLightbox}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[1.25rem] border border-white/70 bg-primary/10"
        aria-label={`Preview: ${project.title}`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={800}
          height={600}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Hover overlay */}
        <span className="pointer-events-none absolute inset-0 flex items-end justify-end rounded-[inherit] bg-gradient-to-t from-black/40 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            <ZoomIn className="h-3 w-3" />
            Preview
          </span>
        </span>
      </button>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Project preview: ${project.title}`}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={close}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          />

          {/* Modal card */}
          <div
            className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#1a1814] shadow-[0_32px_80px_rgba(0,0,0,0.7)] transition-all duration-300 lg:flex-row"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(24px)",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-150 hover:bg-white/20 hover:text-white"
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </button>

            {/* ── Left: Image ── */}
            <div className="relative flex-shrink-0 bg-black/30 lg:w-[52%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-contain"
                style={{ maxHeight: "90vh" }}
              />
              {/* Subtle gradient at bottom for bleed into info */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1a1814]/60 to-transparent lg:hidden" />
            </div>

            {/* ── Right: Info panel ── */}
            <div className="flex flex-col gap-5 overflow-y-auto px-6 py-7 lg:w-[48%] lg:px-8 lg:py-8">

              {/* Category + employer */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary/80">
                  <Tag className="h-2.5 w-2.5" />
                  {categoryLabel}
                </span>
                {project.employer && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-400/90">
                    <Building2 className="h-2.5 w-2.5" />
                    {project.employer}
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <h2 className="font-headline text-xl font-bold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {project.engagement}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Problem / Outcome */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">Problem</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{project.problem}</p>
                </div>
                <div className="rounded-xl bg-white/5 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">Outcome</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{project.result}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                  Built With
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-[11px] font-medium text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {project.keyFeatures.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Spacer */}
              <div className="flex-1" />

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
                {hasCaseStudy && (
                  <Link
                    href={`/work/case-studies/${project.slug}`}
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 hover:gap-3"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {hasLiveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:bg-white/15 hover:text-white"
                  >
                    Open Project
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Esc hint */}
          <p
            className="absolute bottom-3 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[11px] text-white/25 transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            Press Esc or click outside to close
          </p>
        </div>
      )}
    </>
  );
}
