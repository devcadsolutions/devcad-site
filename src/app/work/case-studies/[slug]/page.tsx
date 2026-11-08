import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/portfolio-projects";
import { caseStudyHref, categoryOf, orderedProjects, projectImages, sheetCode } from "@/lib/work";
import { DrawingPlaceholder } from "@/components/site/parts";
import Gallery from "@/components/site/Gallery";
import TopoDemo from "@/components/site/TopoDemo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return orderedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return { title: "Case study" };
  const img = projectImages(p)[0];
  return {
    title: p.title,
    description: p.overview,
    alternates: { canonical: caseStudyHref(p.slug) },
    openGraph: img ? { images: [{ url: img.src }] } : undefined,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();

  const images = projectImages(p);
  const cat = categoryOf(p);
  const code = sheetCode(p);
  const idx = orderedProjects.findIndex((x) => x.slug === p.slug);
  const prev = orderedProjects[(idx - 1 + orderedProjects.length) % orderedProjects.length];
  const next = orderedProjects[(idx + 1) % orderedProjects.length];

  return (
    <>
      <section className="wrap" style={{ paddingTop: 8 }} aria-labelledby="page-title">
        <div className="sheet sheet-sm">
          <div className="page-head">
            <nav className="crumbs lettering" aria-label="Breadcrumb">
              <Link href="/work/">Work</Link> / {cat && <Link href={`/work/${cat.slug}/`}>{cat.label}</Link>}
            </nav>
            <h1 id="page-title" className="h1">{p.title}</h1>
            <p className="lede">{p.overview}</p>
            {p.liveUrl && (
              <div className="hero-actions">
                <a className="btn btn-ink" href={p.liveUrl} target="_blank" rel="noopener">Open the live app</a>
              </div>
            )}
          </div>
          <dl className="title-block cs-block">
            <div>
              <dt className="lettering">Category</dt>
              <dd>{cat?.label}</dd>
            </div>
            <div>
              <dt className="lettering">Built with</dt>
              <dd>{p.technologies.slice(0, 4).join(", ")}</dd>
            </div>
            <div>
              <dt className="lettering">Context</dt>
              <dd>{p.employer ? `Built at ${p.employer}` : "Independent project"}</dd>
            </div>
            <div className="sheet-no">
              <dt className="lettering">Sheet</dt>
              <dd>{code}-{String(idx + 1).padStart(2, "0")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }} aria-label="Screenshots">
        <div className="wrap">
          {p.video && (
            <figure className="model cs-video" style={{ margin: "0 0 24px" }}>
              <div className="model-bar"><span>{p.title}</span><span>Screen recording</span></div>
              <video src={p.video.src} poster={p.video.poster} controls muted playsInline preload="metadata" />
              <figcaption className="small cs-video-cap">{p.video.caption}</figcaption>
            </figure>
          )}
          {images.length ? (
            <Gallery images={images} label={p.title} />
          ) : (
            <div className="model cs-placeholder">
              <div className="model-bar"><span>{p.title}</span><span>{cat?.label}</span></div>
              <DrawingPlaceholder code={code} title={p.title} />
            </div>
          )}
        </div>
      </section>

      {p.slug === "cracknell-import-topo-from-cad" && (
        <section className="section" aria-labelledby="cs-demo">
          <div className="wrap demo-split">
            <TopoDemo />
            <div>
              <h2 id="cs-demo" className="h2">See what it does</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Press the button or drag the slider to watch contours from a survey drawing become a toposolid.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="section" aria-label="Case study">
        <div className="wrap cs-body">
          <div className="cs-story">
            <div>
              <h2 className="h3 cs-label">The problem</h2>
              <p>{p.problem}</p>
            </div>
            <div>
              <h2 className="h3 cs-label">What I built</h2>
              <p>{p.solution}</p>
            </div>
            <div>
              <h2 className="h3 cs-label">What changed</h2>
              <p>{p.result}</p>
            </div>
            {p.measured?.length ? (
              <div>
                <h2 className="h3 cs-label">Measured</h2>
                <dl className="measured">
                  {p.measured.map((m) => (
                    <div key={m.label}>
                      <dt>{m.label}</dt>
                      <dd className="measured-value">{m.value}</dd>
                      <dd className="small measured-method">{m.method}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
            {p.decisions?.length ? (
              <div>
                <h2 className="h3 cs-label">Decisions and tradeoffs</h2>
                <ul className="cs-list">{p.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            ) : null}
            {p.testing?.length ? (
              <div>
                <h2 className="h3 cs-label">How I tested it</h2>
                <ul className="cs-list">{p.testing.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            ) : null}
            {p.nextSteps?.length ? (
              <div>
                <h2 className="h3 cs-label">What I&rsquo;d do next</h2>
                <ul className="cs-list">{p.nextSteps.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            ) : null}
            {p.testimonial && (
              <figure className="cs-quote">
                <blockquote>{p.testimonial.quote}</blockquote>
                <figcaption className="small">{p.testimonial.name}, {p.testimonial.role}</figcaption>
              </figure>
            )}
            {p.engagement && (
              <div>
                <h2 className="h3 cs-label">Context</h2>
                <p>{p.engagement}</p>
              </div>
            )}
          </div>
          <aside className="cs-side">
            <h2 className="h3">Key features</h2>
            <ul className="checklist-ink">
              {p.keyFeatures.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <h2 className="h3" style={{ marginTop: 28 }}>Technology</h2>
            <ul className="tags">
              {p.technologies.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {p.employerNote && <p className="employer-note small">{p.employerNote}</p>}
          </aside>
        </div>
      </section>

      <nav className="section pager" aria-label="More case studies">
        <div className="wrap pager-grid">
          <Link href={caseStudyHref(prev.slug)} rel="prev">
            <span className="lettering">Previous</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link href={caseStudyHref(next.slug)} rel="next" style={{ textAlign: "right" }}>
            <span className="lettering">Next</span>
            <strong>{next.title}</strong>
          </Link>
        </div>
      </nav>

      <section className="section closing" aria-labelledby="cs-cta">
        <div className="wrap closing-grid">
          <div>
            <h2 id="cs-cta" className="h2">Need something like this?</h2>
            <p className="lede" style={{ marginTop: 18 }}>Tell me the task, the software you run, and where it slows your team down.</p>
          </div>
          <div className="hero-actions"><Link href="/contact/" className="btn btn-ink">Send me a workflow</Link></div>
        </div>
      </section>
    </>
  );
}
