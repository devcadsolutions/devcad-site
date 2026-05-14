export type PortfolioProject = {
  slug: string;
  title: string;
  categoryHref: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  keyFeatures: string[];
  imageId: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "revit-pdf-dwg-exporter-via-aps",
    title: "Revit PDF & DWG Exporter via APS",
    categoryHref: "/work/bim-tools",
    overview:
      "Developed an Autodesk Platform Services-based workflow for extracting PDF and DWG outputs from Revit models, including support for large zipped models, linked references, sheet publishing preparation, and export troubleshooting.",
    problem:
      "Large Revit model packages were too fragile for a simple manual export workflow.",
    solution:
      "Built an APS-based export flow for PDFs and DWGs, with support for zipped models, linked files, and preflight checks.",
    result:
      "Made cloud-based publishing more reliable, traceable, and easier to troubleshoot.",
    technologies: ["C#", "WPF", "Autodesk Platform Services", "ACC / Autodesk Docs", "Model Derivative API", "Revit workflows"],
    keyFeatures: [
      "Extracts PDF and DWG outputs from Revit models",
      "Supports zipped model packages and linked model workflows",
      "Includes preflight checklist for model preparation",
      "Handles large model uploads using chunking",
      "Provides workflow progress tracking for users",
      "Improves error reporting and troubleshooting logs",
    ],
    imageId: "service-digital-grid",
  },
  {
    slug: "revit-link-manager-reference-workflow-tool",
    title: "Revit Link Manager / Reference Workflow Tool",
    categoryHref: "/work/bim-tools",
    overview:
      "Built and researched workflows for detecting, managing, and reloading Revit links, including cloud-hosted and local reference scenarios.",
    problem:
      "Revit links were hard to inspect and troubleshoot across local and cloud-hosted setups.",
    solution:
      "Created a WPF-based workflow for reading, reviewing, and managing model references.",
    result:
      "Reduced link confusion and improved reference troubleshooting for project teams.",
    technologies: ["C#", "Revit API", "WPF", "Autodesk Docs", "Desktop Connector workflows"],
    keyFeatures: [
      "Reads Revit linked model paths",
      "Displays links in a user-friendly WPF interface",
      "Supports batch reload concepts",
      "Helps troubleshoot missing or unresolved references",
      "Assists with ACC vs local Desktop Connector workflows",
    ],
    imageId: "about-image",
  },
  {
    slug: "autocad-tool-palette-cad-productivity-tools",
    title: "AutoCAD Tool Palette / CAD Productivity Tools",
    categoryHref: "/work/cad-tools",
    overview:
      "Developed AutoCAD automation tools to simplify repetitive drafting tasks, improve CAD standards, and support production teams.",
    problem:
      "Drafting teams were losing time to repetitive steps and inconsistent standards.",
    solution:
      "Built custom commands, palette workflows, and modernization utilities for production drafting.",
    result:
      "Improved consistency, speed, and day-to-day CAD productivity.",
    technologies: ["AutoCAD .NET API", "C#", "AutoLISP", "Windows desktop tools"],
    keyFeatures: [
      "Custom CAD commands",
      "Tool palette-style workflows",
      "Layer and font style support",
      "Repetitive drafting automation",
      "Standards-focused utilities",
      "Legacy AutoLISP modernization",
    ],
    imageId: "autocad-palette",
  },
  {
    slug: "revit-toposolid-topography-alignment-tool",
    title: "Revit Toposolid / Topography Alignment Tool",
    categoryHref: "/work/bim-tools",
    overview:
      "Designed automation logic for aligning Revit toposolids and topography by projecting points from one surface to another, supporting landscape modeling workflows.",
    problem:
      "Topography alignment in Revit was too manual for repeated landscape workflows.",
    solution:
      "Designed projection logic to align one Revit surface against another.",
    result:
      "Reduced manual terrain adjustment and improved repeatability for site modeling tasks.",
    technologies: ["C#", "Revit API", "Geometry API", "WPF"],
    keyFeatures: [
      "Point projection logic",
      "Surface-to-surface alignment concept",
      "Revit 2024/2026 compatibility considerations",
      "Landscape modeling workflow support",
    ],
    imageId: "excel-dash-1",
  },
  {
    slug: "structural-retrofit-estimator",
    title: "Structural Retrofit Estimator",
    categoryHref: "/work/desktop-software",
    overview:
      "Created an Excel-based estimator for structural retrofit quantities, including FRP, concrete jacketing, steel jacketing, rebar cutting lists, material summaries, and cost breakdowns.",
    problem:
      "Retrofit takeoffs and cost summaries were too slow to prepare manually.",
    solution:
      "Built a structured Excel estimator for quantities, cutting lists, summaries, and cost breakdowns.",
    result:
      "Delivered faster estimation, cleaner summaries, and a more repeatable workbook workflow.",
    technologies: ["Excel", "Engineering estimation logic", "BOQ automation", "Structured workbook design"],
    keyFeatures: [
      "FRP quantity calculations",
      "Beam and column retrofit logic",
      "Purchase summary",
      "Cutting lists",
      "Assumptions and structural library",
      "Excel 2019-compatible formula structure",
    ],
    imageId: "training-material",
  },
];

export function getProjectsByCategory(categoryHref: string) {
  return portfolioProjects.filter((project) => project.categoryHref === categoryHref);
}

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
