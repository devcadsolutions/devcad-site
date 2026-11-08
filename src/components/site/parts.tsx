import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolio-projects";
import { caseStudyHref, categoryOf, coverImage, sheetCode } from "@/lib/work";

/* A page header drawn as a smaller sheet with a title block strip. */
export function PageHead({
  title,
  lede,
  sheet,
  meta,
  children,
}: {
  title: string;
  lede?: React.ReactNode;
  sheet: string;
  meta: { label: string; value: React.ReactNode }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="wrap" style={{ paddingTop: 8, paddingBottom: 24 }} aria-labelledby="page-title">
      <div className="sheet sheet-sm">
        <div className="page-head">
          <h1 id="page-title" className="h1">{title}</h1>
          {lede && <p className="lede">{lede}</p>}
          {children}
        </div>
        <dl className="title-block" style={{ gridTemplateColumns: `repeat(${meta.length}, minmax(0, 1fr)) 0.7fr` }}>
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="lettering">{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
          <div className="sheet-no">
            <dt className="lettering">Sheet</dt>
            <dd>{sheet}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

/* Shown where a project has no real screenshot yet. */
export function DrawingPlaceholder({ code, title }: { code: string; title: string }) {
  return (
    <div className="placeholder" role="img" aria-label={`${title}, no screenshot available`}>
      <svg viewBox="0 0 320 200" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M160 40v120M100 100h120" strokeDasharray="6 4" opacity=".5" />
          <path d="M120 70l40-20 40 20v50l-40 20-40-20z" />
          <path d="M120 70l40 20 40-20M160 90v50" />
        </g>
        <text x="160" y="182" textAnchor="middle" fontSize="11" fill="currentColor" opacity=".8">{code} / no screenshot yet</text>
      </svg>
    </div>
  );
}

export function WorkCard({ p, no }: { p: PortfolioProject; no: number }) {
  const img = coverImage(p);
  const cat = categoryOf(p);
  const code = sheetCode(p);
  return (
    <Link href={caseStudyHref(p.slug)} className="detail">
      <div className="model">
        <div className="model-bar">
          <span>{cat?.label}</span>
          <span>{p.employer ? `Built at ${p.employer}` : p.technologies[0]}</span>
        </div>
        {img ? (
          <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" />
        ) : (
          <DrawingPlaceholder code={code} title={p.title} />
        )}
      </div>
      <div className="detail-caption">
        <span className="detail-callout" aria-hidden="true">
          <span className="bubble"><span>{no}</span><span>{code}</span></span>
        </span>
        <div>
          <h3 className="h3">{p.title}</h3>
          <p>{p.problem}</p>
        </div>
      </div>
    </Link>
  );
}
