import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/parts";
import { milestones } from "@/content/career";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: "Justine Bautista is a civil engineer turned CAD and BIM software developer behind DevCAD Solutions.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "Remove the repeat",
    text: "I look for the step people do by hand every week, and the check that depends on someone remembering it.",
  },
  {
    title: "Fit the drawing workflow",
    text: "Tools are built around sheet sets, linked models, exports and office standards, not around generic software ideas.",
  },
  {
    title: "Make it easy to adopt",
    text: "A tool nobody trusts doesn’t get used. I think about the ribbon button, the error message and the first run.",
  },
  {
    title: "Leave it documented",
    text: "Guides and handover notes so your team can use and maintain the tool after I’ve moved on.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About Justine"
        sheet="P-001"
        lede="Civil engineer by training, CAD and BIM software developer by trade. I’ve spent my career on the production side of drawings, which is why I build tools for it."
        meta={[
          { label: "Name", value: "Justine Bautista" },
          { label: "Education", value: "B.S. Civil Engineering, FEU Tech" },
          { label: "Since", value: "Engineering 2019, software 2021" },
        ]}
      />

      <section className="section" style={{ paddingTop: 48 }} aria-labelledby="story-title">
        <div className="wrap about">
          <figure className="portrait" style={{ margin: 0 }}>
            <img src="/profile/prof-pic.png" alt="Illustrated portrait of Justine Bautista at a desk with drawings and code" width={800} height={800} />
            <figcaption className="lettering">Justine Bautista</figcaption>
          </figure>
          <div>
            <h2 id="story-title" className="h2">From drafting plant models to writing the tools</h2>
            <div className="prose" style={{ marginTop: 20 }}>
              <p>
                My first job was modelling incinerator plants and producing detail drawings for Kawasaki projects in
                Japan. The work was precise, repetitive, and full of steps a script could do better, so I started
                writing VBA, AutoLISP and PML to handle them.
              </p>
              <p>
                That turned into a career. I&rsquo;ve built tool palettes, installers and standards tooling for
                two Australian engineering firms, and now Revit, AutoCAD and Autodesk Platform Services tools for
                a landscape architecture practice.
              </p>
              <p>
                Through DevCAD Solutions I take on the same kind of work for other teams: the add-in, script or cloud
                workflow that takes a weekly chore off people&rsquo;s desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="wrap">
          <h2 id="principles-title" className="h2" style={{ marginBottom: 32 }}>How I approach the work</h2>
          <ul className="principles">
            {principles.map((p) => (
              <li key={p.title}>
                <h3 className="h3">{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="career-title">
        <div className="wrap">
          <h2 id="career-title" className="h2" style={{ marginBottom: 32 }}>Career</h2>
          <ol className="timeline">
            {[...milestones].reverse().map((m) => (
              <li key={m.period}>
                <div className="tl-when">
                  <span className="lettering">{m.period.replace(" - ", " to ")}</span>
                </div>
                <div className="tl-what">
                  <h3 className="h3">{m.title}</h3>
                  <p className="tl-org">{m.organization}, {m.location}</p>
                  <p>{m.details}</p>
                  <ul className="tags">{m.tools.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section closing" aria-labelledby="about-cta">
        <div className="wrap closing-grid">
          <div>
            <h2 id="about-cta" className="h2">Want to work together?</h2>
            <p className="lede" style={{ marginTop: 18 }}>Send a workflow, or connect on LinkedIn.</p>
          </div>
          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-ink">Send me a workflow</Link>
            <a href={siteConfig.links.linkedin} className="btn btn-line" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
