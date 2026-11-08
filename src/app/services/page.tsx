import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/parts";
import { siteConfig } from "@/config/site";
import { steps } from "@/content/process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Revit API add-ins, AutoCAD .NET and AutoLISP automation, Autodesk Platform Services workflows, legacy tool modernisation and rollout documentation.",
  alternates: { canonical: "/services/" },
};

const examples: Record<string, string[]> = {
  "Revit API Tool Development": ["Toposolid from survey DWG", "Family placement from CAD blocks", "Detail legend generation", "Link manager and reference checks"],
  "AutoCAD Automation": ["Tool palettes with 30+ routines", "Standards checks and drawing cleanup", "Batch processing across drawing sets", "Installers and updaters"],
  "APS / Autodesk Cloud Automation": ["PDF and DWG extraction from Revit models", "Browser model viewers", "Large model and linked file packaging", "ACC permission management"],
  "BIM/CAD Workflow Automation": ["Model to spreadsheet reporting", "Drawing registers and document databases", "Timesheet and invoice automation"],
  "Legacy Tool Modernization": ["AutoLISP to C#/.NET", "Single-file scripts to supported add-ins", "Version upgrades across Revit releases"],
  "Technical Documentation & Training": ["User guides and quick-start sheets", "Onboarding decks", "Rollout and support notes"],
};

const fit = [
  "Your team repeats the same steps in Revit or AutoCAD every week",
  "You rely on an old script that only one person understands",
  "Exports, sheet sets or checks hold up issue days",
  "You want Autodesk data in the browser or a spreadsheet without opening Revit",
];

export default function ServicesPage() {
  return (
    <>
      <PageHead
        title="Services"
        sheet="S-001"
        lede="I build small, dependable tools around how your drawings and models are actually produced, then help your team adopt them."
        meta={[
          { label: "Platforms", value: "Revit, AutoCAD, APS / ACC" },
          { label: "Languages", value: "C#, .NET, AutoLISP, JavaScript" },
          { label: "Working", value: "Remote, from the Philippines (GMT+8)" },
        ]}
      />

      <section className="section" style={{ paddingTop: 48 }} aria-labelledby="svc-title">
        <div className="wrap">
          <h2 id="svc-title" className="visually-hidden">What I build</h2>
          <ul className="legend legend-wide">
            {siteConfig.services.map((s) => (
              <li key={s.title}>
                <div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="lettering" style={{ marginTop: 6 }}>Typically {s.timeline.toLowerCase().replace("-", " to ")}</p>
                </div>
                <div>
                  <p>{s.description}</p>
                  {examples[s.title] && (
                    <ul className="examples">
                      {examples[s.title].map((e) => <li key={e}>{e}</li>)}
                    </ul>
                  )}
                </div>
                <ul className="tags">
                  {s.tools.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="fit-title">
        <div className="wrap section-head" style={{ alignItems: "start", marginBottom: 0 }}>
          <h2 id="fit-title" className="h2">A good fit if</h2>
          <ul className="checklist-ink">
            {fit.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-title" className="h2">How a project runs</h2>
            <p className="lede">Fully remote, with working builds early so nothing is a surprise at the end.</p>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section closing" aria-labelledby="svc-cta">
        <div className="wrap closing-grid">
          <div>
            <h2 id="svc-cta" className="h2">Not sure which of these you need?</h2>
            <p className="lede" style={{ marginTop: 18 }}>Describe the task. Part of the job is working out whether it needs a script, an add-in or just a better process.</p>
          </div>
          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-ink">Send me a workflow</Link>
            <Link href="/work/" className="btn btn-line">See the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
