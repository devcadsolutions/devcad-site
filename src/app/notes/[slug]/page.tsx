import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedNotes } from "@/content/notes";
import { getProjectBySlug } from "@/lib/portfolio-projects";
import { caseStudyHref } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Static export needs at least one path; with no published notes this renders a 404.
  return publishedNotes.length ? publishedNotes.map((n) => ({ slug: n.slug })) : [{ slug: "none" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = publishedNotes.find((x) => x.slug === slug);
  if (!n) return { title: "Notes" };
  return {
    title: n.title,
    description: n.summary,
    alternates: { canonical: `/notes/${n.slug}/` },
    robots: n.draft ? { index: false, follow: false } : undefined,
  };
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const n = publishedNotes.find((x) => x.slug === slug);
  if (!n) notFound();
  const related = (n.related ?? []).map(getProjectBySlug).filter(Boolean);

  return (
    <article className="wrap note" aria-labelledby="note-title">
      <nav className="crumbs lettering" aria-label="Breadcrumb"><Link href="/notes/">Notes</Link></nav>
      {n.draft && <p className="draft-flag">Draft for review. Not visible on the live site.</p>}
      <h1 id="note-title" className="h1">{n.title}</h1>
      <p className="lede">{n.summary}</p>
      <p className="lettering">
        <time dateTime={n.date}>{fmt(n.date)}</time>, Justine Bautista
      </p>
      <div className="note-body">
        {n.body.map((b, i) => {
          if (b.type === "h2") return <h2 key={i} className="h3">{b.text}</h2>;
          if (b.type === "p") return <p key={i}>{b.text}</p>;
          if (b.type === "list") return <ul key={i}>{b.items.map((t) => <li key={t}>{t}</li>)}</ul>;
          return (
            <pre key={i} className="code" tabIndex={0} aria-label={`${b.lang} code`}>
              <code>{b.code}</code>
            </pre>
          );
        })}
      </div>
      {related.length > 0 && (
        <aside className="note-related">
          <h2 className="h3">Related case study</h2>
          {related.map((p) => (
            <p key={p!.slug}><Link className="text-link" href={caseStudyHref(p!.slug)}>{p!.title}</Link></p>
          ))}
        </aside>
      )}
    </article>
  );
}
