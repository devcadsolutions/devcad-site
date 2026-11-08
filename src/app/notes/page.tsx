import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/site/parts";
import { publishedNotes } from "@/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short technical notes on Revit API, AutoCAD and Autodesk Platform Services work.",
  alternates: { canonical: "/notes/" },
};

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function NotesPage() {
  if (!publishedNotes.length) notFound();
  return (
    <>
      <PageHead
        title="Notes"
        sheet="N-001"
        lede="Short write-ups of problems I’ve solved in Revit, AutoCAD and Autodesk Platform Services."
        meta={[
          { label: "Notes", value: publishedNotes.length },
          { label: "Topics", value: "Revit API, AutoCAD .NET, APS" },
        ]}
      />
      <section className="section" style={{ paddingTop: 40 }} aria-label="All notes">
        <div className="wrap">
          <ol className="note-list">
            {publishedNotes.map((n) => (
              <li key={n.slug}>
                <time className="lettering" dateTime={n.date}>{fmt(n.date)}</time>
                <div>
                  <h2 className="h3"><Link href={`/notes/${n.slug}/`}>{n.title}</Link></h2>
                  <p>{n.summary}</p>
                  <ul className="tags">{n.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
