import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead, WorkCard } from "@/components/site/parts";
import { categories, orderedProjects } from "@/lib/work";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = categories.find((x) => x.slug === category);
  if (!c) return { title: "Work" };
  return { title: c.label, description: c.description, alternates: { canonical: `/work/${c.slug}/` } };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const c = categories.find((x) => x.slug === category);
  if (!c) notFound();
  const projects = orderedProjects.filter((p) => p.categoryHref === c.href);

  return (
    <>
      <PageHead
        title={c.label}
        sheet={`W-${String(categories.indexOf(c) + 2).padStart(3, "0")}`}
        lede={c.description}
        meta={[
          { label: "Case studies", value: projects.length },
          { label: "Part of", value: <Link className="text-link" href="/work/">All work</Link> },
        ]}
      />
      <section className="section" style={{ paddingTop: 40 }} aria-label={`${c.label} case studies`}>
        <div className="wrap">
          <nav className="filters" aria-label="Categories">
            <Link href="/work/">All</Link>
            {categories.map((x) => (
              <Link key={x.slug} href={`/work/${x.slug}/`} aria-current={x.slug === c.slug ? "page" : undefined}>
                {x.label} <span>{x.count}</span>
              </Link>
            ))}
          </nav>
          <div className="details work-grid">
            {projects.map((p, i) => <WorkCard key={p.slug} p={p} no={i + 1} />)}
          </div>
        </div>
      </section>
    </>
  );
}
