"use client";

import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, GraduationCap, MapPin, Wrench } from "lucide-react";

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

const accentSets = [
  {
    line: "from-slate-400/80 to-sky-500/65",
    glow: "shadow-[0_0_0_6px_rgba(148,163,184,0.14)]",
    chip: "border-slate-300/80 bg-slate-100/85 text-slate-700",
    detail:
      "border-slate-200/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))]",
  },
  {
    line: "from-slate-400/80 to-blue-500/60",
    glow: "shadow-[0_0_0_6px_rgba(125,211,252,0.14)]",
    chip: "border-sky-200/90 bg-sky-50/90 text-sky-700",
    detail:
      "border-sky-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.96))]",
  },
  {
    line: "from-stone-400/80 to-amber-500/60",
    glow: "shadow-[0_0_0_6px_rgba(251,191,36,0.14)]",
    chip: "border-amber-200/90 bg-amber-50/90 text-amber-700",
    detail:
      "border-amber-100/90 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,255,255,0.96))]",
  },
  {
    line: "from-slate-400/80 to-violet-500/55",
    glow: "shadow-[0_0_0_6px_rgba(196,181,253,0.14)]",
    chip: "border-violet-200/90 bg-violet-50/90 text-violet-700",
    detail:
      "border-violet-100/90 bg-[linear-gradient(180deg,rgba(250,245,255,0.98),rgba(255,255,255,0.96))]",
  },
  {
    line: "from-slate-400/80 to-cyan-500/55",
    glow: "shadow-[0_0_0_6px_rgba(103,232,249,0.14)]",
    chip: "border-cyan-200/90 bg-cyan-50/90 text-cyan-700",
    detail:
      "border-cyan-100/90 bg-[linear-gradient(180deg,rgba(236,254,255,0.98),rgba(255,255,255,0.96))]",
  },
];

function MilestoneDetails({
  item,
  accent,
}: {
  item: CareerMilestone;
  accent: (typeof accentSets)[number];
}) {
  return (
    <div
      className={[
        "w-full rounded-[1.5rem] border p-5 text-left shadow-[0_28px_72px_-42px_rgba(79,62,46,0.34)] backdrop-blur-sm",
        accent.detail,
      ].join(" ")}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {item.period}
          </p>
          <h3 className="font-headline text-2xl font-bold text-slate-900">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-slate-600">
            {item.organization} - {item.location}
          </p>
        </div>

        <p className="text-sm text-slate-700 sm:text-[0.95rem]">
          {item.details}
        </p>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Key responsibilities
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {item.responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Tools used
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className={[
                  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                  accent.chip,
                ].join(" ")}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Achievements
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CareerTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!sectionRef.current?.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section-shell relative overflow-visible px-6 py-8 text-foreground sm:px-8 lg:px-10 lg:py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(253,230,138,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,250,252,0.45))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/90 to-transparent"
      />
      <div className="relative space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="eyebrow">Career Path</span>
          <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
            From engineering foundations to AEC automation systems
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            A fishbone-style view of the career path behind DevCAD: technical grounding, CAD production, software development, and BIM-focused automation work.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative px-3 py-14 pb-32">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-slate-300/70 via-slate-200/85 to-slate-300/70" />
            <div className="grid grid-cols-5 gap-4">
              {milestones.map((item, index) => {
                const accent = accentSets[index % accentSets.length];
                const isAbove = index % 2 === 0;
                const isActive = activeIndex === index;
                const isFirst = index === 0;
                const isLast = index === milestones.length - 1;

                return (
                  <div
                    key={`${item.period}-${item.title}`}
                    className="relative flex min-h-[31rem] justify-center"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex((current) => (current === index ? null : current))}
                  >
                    <button
                      type="button"
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex((current) => (current === index ? null : current))}
                      onClick={() => setActiveIndex((current) => (current === index ? null : index))}
                      aria-expanded={isActive}
                      className={[
                        "group absolute z-20 flex w-full max-w-[14rem] flex-col rounded-[1.35rem] border border-slate-200/85 bg-white/94 p-4 text-left shadow-[0_18px_46px_-36px_rgba(15,23,42,0.18)] backdrop-blur-sm transition duration-300",
                        "hover:-translate-y-1 hover:border-slate-300/90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/80",
                        isAbove
                          ? "top-0"
                          : "bottom-0",
                        isActive ? "border-slate-300/90 bg-white shadow-[0_20px_54px_-34px_rgba(15,23,42,0.22)]" : "",
                      ].join(" ")}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.period}
                      </span>
                      <span className="mt-3 font-headline text-lg font-bold leading-tight text-foreground">
                        {item.title}
                      </span>
                      <span className="mt-2 text-sm font-medium text-primary">
                        {item.organization}
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                      <span
                        className={[
                          "absolute left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-b",
                          accent.line,
                          isAbove ? "bottom-[-3.55rem]" : "top-[-3.55rem]",
                        ].join(" ")}
                      />
                    </button>

                    <div
                      aria-hidden="true"
                      className={[
                        "absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white",
                        accent.glow,
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "absolute inset-[3px] rounded-full bg-gradient-to-br",
                          accent.line,
                        ].join(" ")}
                      />
                    </div>

                    <div
                      className={[
                        "absolute z-30 w-[22rem] transition-all duration-300 ease-out",
                        isFirst
                          ? "left-0"
                          : isLast
                            ? "right-0"
                            : "left-1/2 -translate-x-1/2",
                        isAbove
                          ? "top-[15.25rem]"
                          : "bottom-[15.25rem]",
                        isActive
                          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                          : isAbove
                            ? "pointer-events-none translate-y-3 scale-[0.98] opacity-0"
                            : "pointer-events-none -translate-y-3 scale-[0.98] opacity-0",
                      ].join(" ")}
                    >
                      <MilestoneDetails item={item} accent={accent} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:hidden">
          {milestones.map((item, index) => {
            const accent = accentSets[index % accentSets.length];
            const isActive = activeIndex === index;
            const isEducation = index === 0;

            return (
              <div key={`${item.period}-${item.title}`} className="relative pl-10">
                <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-slate-300/80 via-slate-200/75 to-slate-300/80" />
                <div
                  aria-hidden="true"
                  className={[
                    "absolute left-[0.2rem] top-5 z-10 h-5 w-5 rounded-full border border-white/70 bg-white",
                    accent.glow,
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute inset-[3px] rounded-full bg-gradient-to-br",
                      accent.line,
                    ].join(" ")}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIndex((current) => (current === index ? null : index))}
                  className="w-full rounded-[1.35rem] border border-slate-200/85 bg-white/94 p-4 text-left shadow-[0_18px_46px_-36px_rgba(15,23,42,0.18)] backdrop-blur-sm transition duration-300 hover:border-slate-300/90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/80"
                  aria-expanded={isActive}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.period}
                      </p>
                      <h3 className="font-headline text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="flex items-center gap-2 text-sm font-medium text-primary">
                        {isEducation ? <GraduationCap className="h-4 w-4" /> : <BriefcaseBusiness className="h-4 w-4" />}
                        <span>{item.organization}</span>
                      </p>
                      <p className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                    <span
                      className={[
                        "mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white text-foreground transition-transform duration-200",
                        isActive ? "rotate-45" : "",
                      ].join(" ")}
                    >
                      <Wrench className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    {item.shortDescription}
                  </p>
                </button>

                <div
                  className={[
                    "overflow-hidden transition-all duration-300 ease-out",
                    isActive ? "mt-3 max-h-[40rem] opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <MilestoneDetails item={item} accent={accent} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
