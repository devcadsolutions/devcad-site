"use client";

import { useState } from "react";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolio-projects";
import { WorkCard } from "@/components/site/parts";

type Cat = { href: string; label: string; slug: string; count: number };

export default function WorkBrowser({
  projects,
  categories,
  initial = "all",
}: {
  projects: PortfolioProject[];
  categories: Cat[];
  initial?: string;
}) {
  const [active, setActive] = useState(initial);
  const shown = active === "all" ? projects : projects.filter((p) => p.categoryHref === `/work/${active}`);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter case studies">
        <button type="button" aria-pressed={active === "all"} onClick={() => setActive("all")}>
          All <span>{projects.length}</span>
        </button>
        {categories.map((c) => (
          <button key={c.slug} type="button" aria-pressed={active === c.slug} onClick={() => setActive(c.slug)}>
            {c.label} <span>{c.count}</span>
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">{shown.length} case studies shown</p>
      <div className="details work-grid">
        {shown.map((p, i) => (
          <WorkCard key={p.slug} p={p} no={i + 1} />
        ))}
      </div>
      {active !== "all" && (
        <p className="small" style={{ marginTop: 32 }}>
          Linkable list: <Link className="text-link" href={`/work/${active}/`}>{categories.find((c) => c.slug === active)?.label}</Link>
        </p>
      )}
    </>
  );
}
