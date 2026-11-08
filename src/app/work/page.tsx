import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/parts";
import WorkBrowser from "@/components/site/WorkBrowser";
import { categories, orderedProjects } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of Revit add-ins, AutoCAD automation, Autodesk Platform Services workflows and web apps built by Justine Bautista.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageHead
        title="Work"
        sheet="W-001"
        lede="Tools built for real drawing and modelling work: Revit add-ins, AutoCAD tooling, cloud workflows on Autodesk Platform Services, and a few web apps."
        meta={[
          { label: "Case studies", value: orderedProjects.length },
          { label: "Disciplines", value: "Landscape, structural, plant, web" },
          { label: "Software", value: "Revit, AutoCAD, APS, ProSteel" },
        ]}
      />
      <section className="section" style={{ paddingTop: 40 }} aria-label="Case studies">
        <div className="wrap">
          <WorkBrowser projects={orderedProjects} categories={categories} />
        </div>
      </section>
      <section className="section closing" aria-labelledby="work-cta">
        <div className="wrap closing-grid">
          <div>
            <h2 id="work-cta" className="h2">Don&rsquo;t see your workflow here?</h2>
            <p className="lede" style={{ marginTop: 18 }}>Most jobs start as something nobody has built yet. Tell me what your team does by hand.</p>
          </div>
          <div className="hero-actions"><Link href="/contact/" className="btn btn-ink">Send me a workflow</Link></div>
        </div>
      </section>
    </>
  );
}
