export type CareerMilestone = {
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

export const milestones: CareerMilestone[] = [
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
      "Combines an engineering background with desktop, BIM and cloud tooling.",
      "Builds internal tools meant to last, not one-off fixes.",
    ],
  },
];

