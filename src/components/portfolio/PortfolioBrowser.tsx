"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/portfolio/ProjectCard";
import type { PortfolioProject } from "@/lib/portfolio-projects";

type Filter = { href: string; label: string };

type PortfolioBrowserProps = {
  projects: PortfolioProject[];
  categories: Filter[];
};

/**
 * Category filter + compact card grid. Every card is server-rendered into the
 * static HTML (filter state only hides cards), so all case studies stay crawlable.
 */
export default function PortfolioBrowser({ projects, categories }: PortfolioBrowserProps) {
  const [active, setActive] = useState<string>("all");
  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.href, projects.filter((p) => p.categoryHref === c.href).length])),
    [categories, projects]
  );
  const visible = active === "all" ? projects : projects.filter((p) => p.categoryHref === active);
  const activeLabel = active === "all" ? "All work" : categories.find((c) => c.href === active)?.label;

  const chip = (value: string, label: string, count: number) => {
    const isActive = active === value;
    return (
      <button
        key={value}
        type="button"
        aria-pressed={isActive}
        onClick={() => setActive(value)}
        className={cn(
          "inline-flex !min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition",
          isActive
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border/70 bg-white/75 text-foreground/85 hover:border-primary/40 hover:text-foreground"
        )}
      >
        {label}
        <span className={cn("text-xs", isActive ? "text-primary-foreground/75" : "text-muted-foreground")}>{count}</span>
      </button>
    );
  };

  return (
    <div className="space-y-8">
      <div role="group" aria-label="Filter case studies by category" className="flex flex-wrap gap-2">
        {chip("all", "All work", projects.length)}
        {categories.map((c) => chip(c.href, c.label, counts[c.href] ?? 0))}
      </div>
      <p className="sr-only" aria-live="polite">
        {`Showing ${visible.length} case ${visible.length === 1 ? "study" : "studies"}: ${activeLabel}`}
      </p>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug} hidden={active !== "all" && project.categoryHref !== active}>
            <ProjectCard project={project} headingLevel="h3" showCategory={active === "all"} priority={index < 3} />
          </li>
        ))}
      </ul>
    </div>
  );
}
