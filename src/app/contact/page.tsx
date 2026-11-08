import type { Metadata } from "next";
import { PageHead } from "@/components/site/parts";
import BriefForm from "@/components/site/BriefForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send Justine a workflow you want automated in Revit, AutoCAD or Autodesk Platform Services.",
  alternates: { canonical: "/contact/" },
};

const next = [
  "I read what you sent and reply with questions or first thoughts.",
  "A short call or a few messages to pin down the workflow and constraints.",
  "A recommendation on scope: a script, an add-in, an APS workflow or documentation.",
];

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Send me a workflow"
        sheet="C-001"
        lede="Describe the task your team repeats. Rough notes are fine, and a screen recording is even better."
        meta={[
          { label: "Email", value: <a className="text-link" href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a> },
          { label: "LinkedIn", value: <a className="text-link" href={siteConfig.links.linkedin} rel="noopener">in/engrjvb</a> },
          { label: "Time zone", value: "Philippines, GMT+8" },
        ]}
      />
      <section className="section" style={{ paddingTop: 48 }} aria-labelledby="brief-title">
        <div className="wrap contact-grid">
          <div>
            <h2 id="brief-title" className="h2" style={{ marginBottom: 24 }}>The brief</h2>
            <BriefForm />
          </div>
          <aside>
            <h2 className="h3" style={{ marginBottom: 16 }}>What happens next</h2>
            <ol className="steps steps-v">
              {next.map((n) => <li key={n}><p style={{ marginTop: 6 }}>{n}</p></li>)}
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
