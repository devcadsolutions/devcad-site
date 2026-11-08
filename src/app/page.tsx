import Link from "next/link";
import type { Metadata } from "next";
import RevisionCloud from "@/components/site/RevisionCloud";
import MovingAvatar from "@/components/site/MovingAvatar";
import TopoDemo from "@/components/site/TopoDemo";
import { siteConfig } from "@/config/site";
import { steps } from "@/content/process";
import { imageSize } from "@/lib/work";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const cs = (slug: string) => `/work/case-studies/${slug}/`;

const tasks = [
  {
    task: "Topography from survey CAD",
    before: "Points placed by hand in Revit, reading levels off contour drawings.",
    now: "Contours in a linked DWG become a toposolid with the right elevations.",
    tool: "Import Topo from CAD",
    slug: "cracknell-import-topo-from-cad",
  },
  {
    task: "Placing families from CAD",
    before: "Every boulder, tree and fixture placed one at a time against the drawing.",
    now: "Blocks in the DWG drive where each Revit family instance goes.",
    tool: "Import Family via CAD",
    slug: "cracknell-import-family-via-cad",
  },
  {
    task: "Cleaning imported points",
    before: "Duplicate and stacked survey points found and deleted by eye.",
    now: "Problem points are found and removed in one pass.",
    tool: "Clean-up Points",
    slug: "cracknell-cleanup-points",
  },
  {
    task: "Detail legends",
    before: "Legend views rebuilt and checked by hand across large drawing sets.",
    now: "Legends are generated from the detail components in the model.",
    tool: "Detail Legend",
    slug: "cracknell-detail-legend",
  },
  {
    task: "PDF and DWG exports",
    before: "Sheets published from a local Revit machine, one set at a time.",
    now: "Models are translated in the cloud and drawings extracted in batches.",
    tool: "Revit export via APS",
    slug: "revit-pdf-dwg-exporter-via-aps",
  },
  {
    task: "Drafting standards in AutoCAD",
    before: "Layers, text and blocks fixed manually to match office standards.",
    now: "A tool palette of 30+ routines applies the standard as you draft.",
    tool: "AutoCAD tool palette",
    slug: "autocad-tool-palette-cad-productivity-tools",
  },
];

const details = [
  {
    no: "1",
    kind: "Revit add-in, built at Cracknell",
    sheet: "BIM",
    title: "Import Topo from CAD",
    text: "Reads contour geometry from a linked survey DWG and builds the Revit toposolid, so site models start from the surveyor’s data instead of a redraw.",
    img: "/cracknell/import-topo-from-cad-1.png",
    slug: "cracknell-import-topo-from-cad",
    bar: ["Revit 2024", "C#, Revit API"],
  },
  {
    no: "2",
    kind: "Revit add-in, built at Cracknell",
    sheet: "BIM",
    title: "Import Family via CAD",
    text: "Reads block positions from a CAD drawing and places the matching Revit families, so boulders, planting and site furniture land where the drawing puts them, in one pass.",
    img: "/cracknell/add-family-via-cad-1.png",
    slug: "cracknell-import-family-via-cad",
    bar: ["Revit", "C#, Revit API"],
  },
  {
    no: "3",
    kind: "Web app on APS",
    sheet: "APS",
    title: "ProjectForge model viewer",
    text: "Opens Autodesk files in the browser with project dashboards and a Revit export flow, for people who don’t have Revit installed.",
    img: "/portfolio/projectforge/Main.jpg",
    slug: "projectforge-aps-enabled-model-viewer",
    bar: ["Browser", "APS Viewer, React"],
  },
  {
    no: "4",
    kind: "AutoCAD tooling",
    sheet: "CAD",
    title: "CAD tool palette",
    text: "Custom commands and palettes for production drafting, plus the work of moving older AutoLISP into maintainable .NET.",
    img: "/legacy/autocad-tool-palette.png",
    slug: "autocad-tool-palette-cad-productivity-tools",
    bar: ["AutoCAD", "AutoLISP, .NET"],
  },
];


const career = [
  { year: "2025 to now", role: "Digital Solutions Programmer", org: "Cracknell, landscape architecture" },
  { year: "2022 to 2024", role: "CAD Software Developer", org: "Mechwest, Australia" },
  { year: "2021 to 2022", role: "CAD Software Developer", org: "T&G Corporation, Perth" },
  { year: "2019 to 2021", role: "Assistant Design Engineer", org: "Kawasaki Heavy Industries Design & Technical Service" },
  { year: "2018", role: "B.S. Civil Engineering", org: "FEU Institute of Technology" },
];

const cols = ["A", "B", "C", "D", "E", "F"];
const rows = ["1", "2", "3", "4"];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "DevCAD Solutions",
            url: siteConfig.url,
            email: siteConfig.links.email,
            description: siteConfig.description,
            areaServed: "Worldwide",
            founder: {
              "@type": "Person",
              name: "Justine Bautista",
              jobTitle: "CAD and BIM software developer",
              sameAs: [siteConfig.links.linkedin],
            },
            knowsAbout: ["Revit API", "AutoCAD .NET", "AutoLISP", "Autodesk Platform Services", "BIM automation"],
          }),
        }}
      />
      {/* Hero, drawn as sheet A-001 */}
      <section aria-labelledby="hero-title" className="wrap" style={{ paddingTop: 8, paddingBottom: 40 }}>
        <div className="sheet">
          <div className="sheet-refs" aria-hidden="true">
            {cols.map((c, i) => (
              <span key={`t${c}`} className="top" style={{ left: `${((i + 0.5) / cols.length) * 100}%` }}>{c}</span>
            ))}
            {cols.map((c, i) => (
              <span key={`b${c}`} className="bottom" style={{ left: `${((i + 0.5) / cols.length) * 100}%` }}>{c}</span>
            ))}
            {rows.map((r, i) => (
              <span key={`l${r}`} className="left" style={{ top: `${((i + 0.5) / rows.length) * 100}%` }}>{r}</span>
            ))}
            {rows.map((r, i) => (
              <span key={`r${r}`} className="right" style={{ top: `${((i + 0.5) / rows.length) * 100}%` }}>{r}</span>
            ))}
          </div>

          <div className="hero-grid">
            <h1 id="hero-title" className="display hero-title">
              Revit and AutoCAD tools for the work your team repeats.
            </h1>
            <div className="hero-copy">
              <p className="lede">
                Civil engineer turned developer. I build Revit add-ins, AutoCAD automation and Autodesk cloud
                workflows for AEC firms.
              </p>
              <div className="hero-actions">
                <RevisionCloud note="Start with the step everyone dreads">
                  <Link href="/contact/" className="btn btn-ink">Send me a workflow</Link>
                </RevisionCloud>
                <Link href="#work" className="btn btn-line">See the tools</Link>
              </div>
              <div className="hero-proof">
                <span className="lettering">Tools built for teams at</span>
                <ul>
                  <li>Cracknell</li>
                  <li>Mechwest</li>
                  <li>T&amp;G Corporation</li>
                  <li>Kawasaki plant projects</li>
                </ul>
              </div>
            </div>

            <figure className="hero-figure" style={{ margin: 0 }}>
              <div className="viewport">
                <span className="vp-label lettering" aria-hidden="true">Viewport 1, scale 1:1</span>
                <MovingAvatar />
                <span className="keynote k1" aria-hidden="true">
                  <span className="kn-text"><strong>Civil engineer</strong> BSCE, FEU Tech</span>
                </span>
                <span className="keynote k2" aria-hidden="true">
                  <span className="kn-text"><strong>Writes the code</strong> C#, Revit API, AutoLISP</span>
                </span>
              </div>
              <div className="dim-wrap"><figcaption className="dim">Justine Bautista, the developer behind DevCAD</figcaption></div>
            </figure>
          </div>

          <dl className="title-block">
            <div>
              <dt className="lettering">Drawn by</dt>
              <dd>Justine Bautista, DevCAD Solutions</dd>
            </div>
            <div>
              <dt className="lettering">Works in</dt>
              <dd>Revit API, AutoCAD .NET, AutoLISP, APS</dd>
            </div>
            <div>
              <dt className="lettering">Based in</dt>
              <dd>Philippines, GMT+8. Projects for Australia, Japan and UAE teams</dd>
            </div>
            <div className="sheet-no">
              <dt className="lettering">Sheet</dt>
              <dd>A-001</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Schedule of automated tasks */}
      <section className="section" aria-labelledby="schedule-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="schedule-title" className="h2">Tasks I&rsquo;ve taken off people&rsquo;s desks</h2>
            <p className="lede">
              Most of my work starts with a step someone does by hand every week. These are real ones,
              from landscape, structural and plant projects.
            </p>
          </div>
          <table className="schedule">
            <caption className="visually-hidden">Manual tasks and the tools that replaced them</caption>
            <thead>
              <tr>
                <th scope="col" className="lettering">Task</th>
                <th scope="col" className="lettering">Before</th>
                <th scope="col" className="lettering">With the tool</th>
                <th scope="col" className="lettering">Tool</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => (
                <tr key={t.slug}>
                  <td>{t.task}</td>
                  <td data-label="Before">{t.before}</td>
                  <td data-label="With the tool">{t.now}</td>
                  <td data-label="Tool"><Link className="text-link" href={cs(t.slug)}>{t.tool}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Playable illustration of one real tool */}
      <section id="topo-demo" className="section" aria-labelledby="demo-title" style={{ scrollMarginTop: 72 }}>
        <div className="wrap demo-split">
          <TopoDemo />
          <div>
            <h2 id="demo-title" className="h2">Try one: contours to toposolid</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Import Topo from CAD reads the contour lines in a linked survey drawing and builds the Revit
              toposolid from them. Press the button, or drag the slider, to see what it does.
            </p>
            <ul className="checklist-ink">
              <li>Reads contour lines or point data from the linked DWG</li>
              <li>Takes elevations straight from the CAD geometry</li>
              <li>Generates the toposolid, with no manual point placement</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              <Link className="text-link" href={cs("cracknell-import-topo-from-cad")}>Read the case study</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Selected work, as drawing details */}
      <section id="work" className="section" aria-labelledby="work-title" style={{ scrollMarginTop: 72 }}>
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-title" className="h2">Selected tools</h2>
            <p className="lede">
              Screenshots from the software they run in. <Link className="text-link" href="/work/">All 21 case studies</Link>
            </p>
          </div>
          <div className="details">
            {details.map((d) => (
              <Link key={d.slug} href={cs(d.slug)} className="detail">
                <div className="model">
                  <div className="model-bar"><span>{d.kind}</span><span>{d.bar[1]}</span></div>
                  <img src={d.img} alt={`Screenshot of ${d.title}`} {...imageSize(d.img)} loading="lazy" />
                </div>
                <div className="detail-caption">
                  <span className="detail-callout" aria-hidden="true">
                    <span className="bubble"><span>{d.no}</span><span>{d.sheet}</span></span>
                  </span>
                  <div>
                    <h3 className="h3">{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="services-title" className="h2">What I can build for you</h2>
            <p className="lede">
              Scoped per project. Timelines are typical ranges for a first working version.
            </p>
          </div>
          <ul className="legend">
            {siteConfig.services.map((s) => (
              <li key={s.title}>
                <h3 className="h3">{s.title}</h3>
                <p>{s.description}</p>
                <div className="meta">
                  <span className="lettering">{s.tools.join(", ")}</span>
                  <span className="lettering">Typically {s.timeline.toLowerCase().replace("-", " to ")}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
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

      {/* About */}
      <section className="section" aria-labelledby="about-title">
        <div className="wrap about">
          <figure className="portrait" style={{ margin: 0 }}>
            <img src="/profile/prof-pic.png" alt="Illustrated portrait of Justine Bautista at a desk with drawings and code" width={800} height={800} loading="lazy" />
            <figcaption className="lettering">Justine Bautista, CE</figcaption>
          </figure>
          <div>
            <h2 id="about-title" className="h2">An engineer first, so the tools fit how drawings get made</h2>
            <div className="prose" style={{ marginTop: 20 }}>
              <p>
                I started in design engineering, modelling incinerator plants and checking clashes for
                Kawasaki projects. Writing VBA and AutoLISP to skip the boring parts turned into a career
                building CAD and BIM software for drafting and modelling teams.
              </p>
              <p>
                I know what a sheet set, a linked model and a CAD standard mean to the people working with
                them, which is most of what makes an internal tool get used.
              </p>
            </div>
            <ul className="career">
              {career.map((c) => (
                <li key={c.year}>
                  <span className="lettering">{c.year}</span>
                  <div><strong>{c.role}</strong>, <span>{c.org}</span></div>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 20 }}><Link className="text-link" href="/about/">More about me</Link></p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section closing" aria-labelledby="closing-title">
        <div className="wrap closing-grid">
          <div>
            <h2 id="closing-title" className="h2">Got a step your team keeps doing by hand?</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Send a short description or a screen recording. I&rsquo;ll come back with questions or a first
              idea of scope.
            </p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link href="/contact/" className="btn btn-ink">Send me a workflow</Link>
              <a href={`mailto:${siteConfig.links.email}`} className="btn btn-line">Email {siteConfig.links.email}</a>
            </div>
          </div>
          <ul className="checklist">
            <li><strong>Which software</strong>, and the versions you run</li>
            <li><strong>The manual steps</strong> someone does today</li>
            <li><strong>Where it breaks</strong>, or who it depends on</li>
            <li><strong>The output you want</strong>: a sheet set, an export, a checked model</li>
          </ul>
        </div>
      </section>
    </>
  );
}
