import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

type CareerMilestone = {
  period: string;
  title: string;
  organization: string;
  location: string;
  shortDescription: string;
  details: string;
  responsibilities: string[];
  tools: string[];
  achievements: string[];
};

const milestones: CareerMilestone[] = [
  {
    period: "June 2018",
    title: "B.S. Civil Engineering",
    organization: "FEU Institute of Technology",
    location: "Philippines",
    shortDescription:
      "Built my foundation in engineering, technical drawings, design workflows, and project delivery.",
    details:
      "Studied civil engineering with focus on structural concepts, construction documentation, technical drawing interpretation, and engineering project workflows.",
    responsibilities: [
      "Studied structural and construction fundamentals.",
      "Built fluency in technical drawing interpretation and documentation.",
      "Developed an engineering-first view of project delivery workflows.",
    ],
    tools: ["Engineering design", "Technical drawings", "Project workflows"],
    achievements: [
      "Established the technical foundation that later shaped software work for AEC teams.",
    ],
  },
  {
    period: "July 2019 - August 2021",
    title: "Assistant Design Engineer",
    organization: "Kawasaki Heavy Industries Design & Technical Service, Inc.",
    location: "Philippines / Japan-based projects",
    shortDescription:
      "Created 3D plant models, 2D detail drawings, and automation tools for industrial plant projects.",
    details:
      "Worked on incinerator plant projects using AutoCAD, PDMS, and Navisworks. Created detail drawings, performed clash checking, developed VBA, AutoLISP, and PML automation tools, and prepared technical manuals.",
    responsibilities: [
      "Produced plant models and detail drawings for industrial project delivery.",
      "Performed clash checking and drawing coordination across disciplines.",
      "Created automation helpers and manuals to support repeatable work.",
    ],
    tools: ["AutoCAD", "PDMS", "Navisworks", "VBA", "AutoLISP", "PML"],
    achievements: [
      "Started combining drafting production work with practical automation.",
      "Built documentation that supported team usage and technical consistency.",
    ],
  },
  {
    period: "August 2021 - November 2022",
    title: "CAD Software Developer",
    organization: "T&G Corporation Pty Ltd.",
    location: "Perth, Australia-based",
    shortDescription:
      "Developed CAD automation tools, tool palettes, installers, databases, and drafting productivity workflows.",
    details:
      "Created tool palettes with 30+ AutoLISP routines, automated CAD standards, developed installers and updaters, built document databases, automated timesheets and invoices, and supported ProSteel and AutoCAD workflows.",
    responsibilities: [
      "Built internal CAD tooling focused on drafting speed and standards control.",
      "Developed support systems like installers, updaters, and internal databases.",
      "Automated administrative and document workflows tied to technical delivery.",
    ],
    tools: ["AutoLISP", "AutoCAD", "ProSteel", "Installers", "Databases"],
    achievements: [
      "Delivered 30+ AutoLISP routines through tool palettes.",
      "Expanded from CAD automation into supporting delivery systems and operations.",
    ],
  },
  {
    period: "November 2022 - April 2024",
    title: "CAD Software Developer",
    organization: "Mechwest Pty. Ltd.",
    location: "Australia-based",
    shortDescription:
      "Developed AutoCAD, ProSteel, C#, and interoperability tools for CAD and 3D modeling workflows.",
    details:
      "Managed CAD databases, created AutoLISP, Visual LISP, DCL, and C# routines, supported ProSteel, Advanced Steel, Tekla, AVEVA, and AutoCAD workflows, and authored technical documentation.",
    responsibilities: [
      "Built routines and data utilities across multiple CAD and modeling environments.",
      "Supported interoperability and workflow continuity between platforms.",
      "Documented tools and workflows for broader internal usability.",
    ],
    tools: ["AutoLISP", "Visual LISP", "DCL", "C#", "ProSteel", "Tekla", "AVEVA"],
    achievements: [
      "Strengthened cross-platform workflow support for CAD and 3D modeling teams.",
      "Deepened C# and interoperability work beyond script-based automation.",
    ],
  },
  {
    period: "April 2025 - Present",
    title: "Digital Solutions Programmer",
    organization: "Cracknell",
    location: "Paranaque, NCR / UAE-based company context",
    shortDescription:
      "Builds CAD, BIM, Revit, AutoCAD, APS, and engineering automation tools for AEC teams.",
    details:
      "Develops Revit and AutoCAD automation tools using C#, AutoLISP, Revit API, AutoCAD API, WPF, and Autodesk Platform Services. Focuses on workflow automation, QA/QC tools, cloud-based Autodesk workflows, documentation, and technical support.",
    responsibilities: [
      "Develops production-ready BIM and CAD automation tools for AEC teams.",
      "Builds QA/QC and cloud-connected Autodesk workflows.",
      "Supports adoption through documentation and practical technical support.",
    ],
    tools: ["C#", "AutoLISP", "Revit API", "AutoCAD API", "WPF", "Autodesk Platform Services"],
    achievements: [
      "Brings together engineering context, desktop tooling, BIM automation, and cloud workflows.",
      "Focuses on scalable internal solutions rather than isolated one-off fixes.",
    ],
  },
];

/**
 * Vertical career timeline. Everything important (role, company, summary, tools)
 * is visible without interaction; responsibilities and achievements sit in a
 * native <details> so they work without JavaScript and with a keyboard.
 */
export default function CareerTimeline() {
  const ordered = [...milestones].reverse();

  return (
    <div className="section-shell px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="max-w-3xl space-y-3">
        <span className="eyebrow">Career path</span>
        <h2 className="section-heading">From engineering drawings to AEC automation.</h2>
        <p className="section-copy">
          Civil engineering, plant design and CAD production first, then software for the teams doing that work.
        </p>
      </div>

      <ol className="relative mt-10 space-y-8 border-l border-border pl-6 sm:pl-8">
        {ordered.map((item) => {
          const isEducation = item.title.startsWith("B.S.");
          const Icon = isEducation ? GraduationCap : BriefcaseBusiness;
          return (
            <li key={`${item.period}-${item.title}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.3rem] top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white text-primary sm:-left-[2.8rem]"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="grid gap-3 lg:grid-cols-[13rem_1fr] lg:gap-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground lg:pt-1.5">{item.period}</p>
                <div>
                  <h3 className="font-headline text-xl font-semibold tracking-[-0.02em] text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{item.organization}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.location}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/85 sm:text-base sm:leading-7">{item.details}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tools">
                    {item.tools.map((tool) => (
                      <li key={tool} className="rounded-full border border-border/70 bg-white/75 px-2.5 py-1 text-xs font-medium text-foreground/80">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <details className="group mt-3 max-w-3xl">
                    <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Responsibilities &amp; highlights</span>
                      <span className="hidden group-open:inline">Hide details</span>
                    </summary>
                    <div className="mt-2 grid gap-4 rounded-xl border border-border/70 bg-white/70 p-4 sm:grid-cols-2">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Responsibilities</h4>
                        <ul className="mt-2 space-y-1.5 text-sm leading-6 text-foreground/85">
                          {item.responsibilities.map((r) => (
                            <li key={r} className="flex gap-2">
                              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Highlights</h4>
                        <ul className="mt-2 space-y-1.5 text-sm leading-6 text-foreground/85">
                          {item.achievements.map((a) => (
                            <li key={a} className="flex gap-2">
                              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
