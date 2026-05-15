export type PortfolioProject = {
  slug: string;
  title: string;
  categoryHref: string;
  overview: string;
  engagement: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  technologies: string[];
  keyFeatures: string[];
  imageId: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "revit-pdf-dwg-exporter-via-aps",
    title: "Revit PDF & DWG Export Automation via APS",
    categoryHref: "/work/aps",
    overview:
      "Developed an Autodesk Platform Services-based workflow for extracting PDF and DWG outputs from Revit models, including support for large zipped models, linked references, sheet publishing preparation, and export troubleshooting.",
    engagement:
      "A cloud-connected export workflow focused on getting publish-ready outputs out of complex Revit model packages without relying on a fragile manual handoff.",
    problem:
      "Teams needed to extract PDF and DWG outputs from Revit models without relying only on local Revit machines or manual publishing.",
    solution:
      "Built an APS-based workflow that processes Revit models, translates them through Model Derivative, and extracts drawing outputs such as PDFs and DWGs.",
    result:
      "Reduced manual export effort, improved batch processing, and created a scalable cloud-based workflow for drawing extraction.",
    tags: ["APS", "Revit", "PDF Export", "DWG Export", "Automation"],
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
    slug: "aps-viewer-web-based-model-viewer",
    title: "APS Viewer / Web-Based Model Viewer",
    categoryHref: "/work/aps",
    overview:
      "Developed a web-based APS Viewer application for viewing Revit models, DWGs, and other design files directly in the browser.",
    engagement:
      "A browser-first model viewing experience built for teams that needed quick access to design files without opening heavy desktop software.",
    problem:
      "Design and coordination teams needed a faster way to view models and drawings without opening heavy desktop applications or relying on local software installations.",
    solution:
      "Built a web application using Autodesk Platform Services to upload, translate, and display models through the APS Viewer, including support for 2D sheets, 3D models, DWGs, and other design data.",
    result:
      "Improved accessibility to design files, reduced dependency on desktop software, and made model review easier for technical and non-technical users.",
    tags: ["APS", "Viewer", "Web App", "Revit", "DWG"],
    technologies: ["Autodesk Platform Services", "APS Viewer", "Model Derivative API", "JavaScript", "Web App"],
    keyFeatures: [
      "Web-based model and drawing viewer",
      "Revit, DWG, and design file viewing",
      "APS Model Derivative integration",
      "2D sheet and 3D model support",
      "Browser-based access",
      "Reduced need for local Autodesk software",
    ],
    imageId: "website-dev-1",
  },
  {
    slug: "forma-admin-permission-management-tool",
    title: "Forma Admin / Permission Management Tool",
    categoryHref: "/work/aps",
    overview:
      "Developed an admin-focused tool to simplify permission sharing and access assignment without requiring users to manually go through ACC workflows.",
    engagement:
      "A task-focused admin utility built to make permission handling faster, clearer, and less repetitive for project administrators.",
    problem:
      "Managing access and permissions through ACC can be time-consuming, especially when assigning access to multiple users, projects, or design environments.",
    solution:
      "Created a Forma Admin-style permission management tool that lets authorized users assign, share, and manage access from a simplified interface instead of repeatedly navigating ACC project settings.",
    result:
      "Streamlined permission management, reduced repetitive admin steps, and improved the speed of granting access to project users.",
    tags: ["APS", "ACC", "Admin Tool", "Permissions", "Web App"],
    technologies: ["Autodesk Platform Services", "ACC Workflows", "Admin UI", "JavaScript", "Web App"],
    keyFeatures: [
      "Simplified permission assignment interface",
      "Share and access management workflows",
      "Admin-focused task screens",
      "Reduced ACC settings navigation",
      "Faster multi-user access handling",
      "Cleaner permission management flow",
    ],
    imageId: "website-dev-2",
  },
  {
    slug: "large-revit-model-processing-with-aps",
    title: "Large Revit Model Processing with APS",
    categoryHref: "/work/aps",
    overview:
      "Improved the upload and translation workflow for very large Revit model packages so APS processing becomes more reliable and practical on real projects.",
    engagement:
      "A technical workflow optimization effort focused on pushing large, heavy Revit packages through cloud processing with fewer failures and less manual guesswork.",
    problem:
      "Large Revit models and consumed models were too heavy to upload and process reliably, sometimes reaching extremely large package sizes.",
    solution:
      "Optimized model preparation, reduced unnecessary attachments, supported ZIP packaging, and implemented chunked upload handling for large files.",
    result:
      "Improved upload reliability, reduced failure risk, and made large-model processing more practical for APS workflows.",
    tags: ["APS", "Revit", "Large Models", "Upload", "Cloud Processing"],
    technologies: ["Autodesk Platform Services", "Chunked Upload", "Revit", "ZIP Packaging", "Model Processing"],
    keyFeatures: [
      "Chunked upload handling for large files",
      "Large model packaging support",
      "Reduced attachment overhead",
      "Improved translation reliability",
      "Practical workflow for heavy project models",
      "Better handling of oversized model packages",
    ],
    imageId: "service-digital-grid",
  },
  {
    slug: "revit-link-packaging-workflow-for-aps-translation",
    title: "Revit Link Packaging Workflow for APS Translation",
    categoryHref: "/work/aps",
    overview:
      "Created a ZIP-based workflow for packaging a main Revit model together with its linked RVTs so APS translation can resolve references correctly.",
    engagement:
      "A file-structure and packaging workflow designed for federated Revit projects where linked references need to survive cloud translation.",
    problem:
      "Revit models with multiple linked files were difficult to process because links had to resolve correctly during cloud translation.",
    solution:
      "Created a ZIP-based model packaging workflow where the main RVT and linked RVTs are organized with the correct relative folder structure for APS processing.",
    result:
      "Improved link resolution during translation and allowed more complete model processing for federated Revit projects.",
    tags: ["APS", "Revit", "Linked Models", "Translation", "Packaging"],
    technologies: ["Autodesk Platform Services", "Revit", "Linked Models", "ZIP Packaging", "Cloud Translation"],
    keyFeatures: [
      "Main and linked RVT packaging",
      "Relative folder structure support",
      "Improved linked-model resolution",
      "Federated project processing workflow",
      "APS translation readiness",
      "Reduced broken-reference issues",
    ],
    imageId: "about-image",
  },
  {
    slug: "aps-model-preflight-checklist-for-revit-export-workflows",
    title: "APS Model Preflight Checklist for Revit Export Workflows",
    categoryHref: "/work/aps",
    overview:
      "Added a model-readiness step before upload so users can verify sheets, filenames, linked files, and other export prerequisites before running APS workflows.",
    engagement:
      "A UX-focused preparation tool built to help ordinary users complete technical APS export steps with fewer failed jobs and less support overhead.",
    problem:
      "Users often skipped important model preparation steps such as publishing sheets, checking filenames, removing unsupported characters, or verifying linked files.",
    solution:
      "Added a model preparation checklist before model selection, guiding users through required steps before starting the APS export workflow.",
    result:
      "Reduced failed jobs, improved user confidence, and made the technical APS workflow easier for ordinary users.",
    tags: ["APS", "Revit", "Preflight", "Validation", "Workflow UX"],
    technologies: ["Autodesk Platform Services", "Workflow UX", "Revit Export Prep", "Validation Logic", "WPF"],
    keyFeatures: [
      "Pre-upload readiness checklist",
      "Sheet publishing reminders",
      "Filename and character checks",
      "Linked-file verification guidance",
      "Lower failed-job risk",
      "More confident export setup",
    ],
    imageId: "training-material",
  },
  {
    slug: "user-friendly-aps-export-workflow-tracker",
    title: "User-Friendly APS Export Workflow Tracker",
    categoryHref: "/work/aps",
    overview:
      "Designed a visible step-by-step progress tracker so users can follow long-running APS export jobs more easily from start to finish.",
    engagement:
      "A product-style workflow experience intended to make multi-step cloud export processes easier to understand for non-technical users.",
    problem:
      "The APS export workflow involved multiple technical steps that were difficult for ordinary users to follow.",
    solution:
      "Designed a visible workflow progress system showing the process from Step 1 to Step 6, including completed, current, and upcoming stages.",
    result:
      "Made the process more user-friendly, reduced confusion, and improved transparency during long-running exports.",
    tags: ["APS", "Progress Tracker", "Workflow UI", "UX", "Export"],
    technologies: ["Autodesk Platform Services", "Workflow UI", "Progress Tracking", "JavaScript", "User Experience"],
    keyFeatures: [
      "Step-by-step workflow visibility",
      "Completed, current, and upcoming states",
      "Long-running job transparency",
      "Cleaner export status communication",
      "Reduced user confusion",
      "More productized APS experience",
    ],
    imageId: "app-dev-1",
  },
  {
    slug: "revit-link-manager-reference-workflow-tool",
    title: "Revit Link Manager / Reference Workflow Tool",
    categoryHref: "/work/bim-tools",
    overview:
      "Built and researched workflows for detecting, managing, and reloading Revit links, including cloud-hosted and local reference scenarios.",
    engagement:
      "A Revit support tool aimed at making linked-model references easier to inspect, explain, and troubleshoot across mixed local and cloud setups.",
    problem:
      "Revit links were hard to inspect and troubleshoot across local and cloud-hosted setups.",
    solution:
      "Created a WPF-based workflow for reading, reviewing, and managing model references.",
    result:
      "Reduced link confusion and improved reference troubleshooting for project teams.",
    tags: ["Revit", "BIM", "Linked Models", "Desktop Tool", "Troubleshooting"],
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
    engagement:
      "A drafting productivity toolkit built to reduce repetitive CAD work, tighten standards, and give production teams more dependable day-to-day commands.",
    problem:
      "Drafting teams were losing time to repetitive steps and inconsistent standards.",
    solution:
      "Built custom commands, palette workflows, and modernization utilities for production drafting.",
    result:
      "Improved consistency, speed, and day-to-day CAD productivity.",
    tags: ["AutoCAD", "CAD", "Tool Palette", "Automation", "Productivity"],
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
    engagement:
      "A geometry-driven Revit workflow for site teams who needed faster terrain alignment without repeatedly editing surfaces by hand.",
    problem:
      "Topography alignment in Revit was too manual for repeated landscape workflows.",
    solution:
      "Designed projection logic to align one Revit surface against another.",
    result:
      "Reduced manual terrain adjustment and improved repeatability for site modeling tasks.",
    tags: ["Revit", "Topography", "Geometry", "BIM", "Landscape"],
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
    engagement:
      "A structured estimation workbook for retrofit projects where quantity takeoff, summary tables, and pricing prep needed to be faster and more repeatable.",
    problem:
      "Retrofit takeoffs and cost summaries were too slow to prepare manually.",
    solution:
      "Built a structured Excel estimator for quantities, cutting lists, summaries, and cost breakdowns.",
    result:
      "Delivered faster estimation, cleaner summaries, and a more repeatable workbook workflow.",
    tags: ["Excel", "Estimator", "Takeoff", "Retrofit", "BOQ"],
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

export function getAllProjectTags() {
  return [...new Set(portfolioProjects.flatMap((project) => project.tags))].sort((a, b) => a.localeCompare(b));
}
