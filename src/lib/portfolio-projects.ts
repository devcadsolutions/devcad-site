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
  /** Additional image IDs shown as a gallery in the case study */
  imageIds?: string[];
  /** Employer/client context chip, e.g. "Cracknell" */
  employer?: string;
  /** Shown as a notice when the project was done under employment */
  employerNote?: string;
  /** Optional live URL — shows 'Open Project' button in lightbox */
  liveUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "the-coffee-pup-ordering-web-app",
    title: "The Coffee Pup Ordering Web App",
    categoryHref: "/work/web-apps-sites",
    overview:
      "Designed and built a responsive cafe ordering web app for The Coffee Pup, combining menu browsing, product customization, checkout, account access, announcements, and customer reviews in a polished app-style experience.",
    engagement:
      "A product-focused ordering experience for a coffee brand, built to feel like a modern customer app rather than a static cafe website.",
    problem:
      "The cafe concept needed a digital storefront where customers could browse products, customize drinks, and move through checkout from desktop or mobile.",
    solution:
      "Created a responsive React web app with category-based menu browsing, product cards, customization screens, cart and checkout flows, account access, announcements, and community reviews.",
    result:
      "Delivered a complete portfolio-ready ordering concept that showcases responsive UI design, branded product presentation, and practical e-commerce flow thinking.",
    tags: ["Web App", "Ordering App", "Coffee Shop", "E-Commerce", "Responsive UI", "React", "Tailwind CSS", "Cloudflare Workers"],
    technologies: ["React", "Tailwind CSS", "lucide-react", "Cloudflare Workers", "Responsive Web App"],
    keyFeatures: [
      "Responsive home screen with hero messaging, calls to action, announcements, and best sellers",
      "Category-based menu browsing for drinks, bottles, toasts, and pastries",
      "Product cards with pricing, bestseller labels, and add-to-order actions",
      "Drink customization flow with quantity and size options",
      "Cart and checkout screens with customer details, delivery method, notes, and payment options",
      "Community area for announcements, schedules, and customer reviews",
    ],
    imageId: "the-coffee-pup-pc-home",
    imageIds: [
      "the-coffee-pup-pc-home",
      "the-coffee-pup-pc-home-best-sellers",
      "the-coffee-pup-pc-menu",
      "the-coffee-pup-pc-menu-category",
      "the-coffee-pup-pc-customize",
      "the-coffee-pup-pc-order",
      "the-coffee-pup-pc-checkout",
      "the-coffee-pup-pc-order-confirmation",
      "the-coffee-pup-pc-community",
      "the-coffee-pup-pc-account",
      "the-coffee-pup-mobile-home",
      "the-coffee-pup-mobile-menu",
      "the-coffee-pup-mobile-menu-category",
      "the-coffee-pup-mobile-product",
      "the-coffee-pup-mobile-customize",
      "the-coffee-pup-mobile-checkout",
      "the-coffee-pup-mobile-checkout-details",
      "the-coffee-pup-mobile-community",
      "the-coffee-pup-mobile-account",
      "the-coffee-pup-mobile-reviews",
    ],
    liveUrl: "https://the-coffee-pup-app.devcadsolutions.workers.dev/",
  },
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
    title: "Revit Link Manager",
    categoryHref: "/work/bim-tools",
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
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
    imageId: "cracknell-extract-links",
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
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
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
    imageId: "cracknell-aligntopo-1",
    imageIds: ["cracknell-aligntopo-1", "cracknell-aligntopo-2"],
  },
  {
    slug: "cracknell-import-family-via-cad",
    title: "Import Family via CAD",
    categoryHref: "/work/bim-tools",
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
    overview:
      "Built a Revit tool that reads CAD geometry and automatically places the corresponding Revit families at the correct positions, eliminating manual placement from CAD references.",
    engagement:
      "A CAD-to-Revit placement utility for the Cracknell team that turns CAD block positions into properly placed Revit families in one step.",
    problem:
      "Placing Revit families manually based on CAD drawings was slow and error-prone, especially on large landscape projects with many repeated elements.",
    solution:
      "Developed a tool that reads CAD geometry or block references and uses their positions to automatically place the matching Revit family instances in the model.",
    result:
      "Significantly reduced family placement time and improved positional accuracy when working from CAD source drawings.",
    tags: ["Revit", "BIM", "CAD Import", "Family Placement", "Landscape", "Automation"],
    technologies: ["C#", "Revit API", "CAD Import", "WPF"],
    keyFeatures: [
      "Reads CAD geometry for placement positions",
      "Automatically places Revit family instances",
      "Handles repeated elements across large drawings",
      "Reduces manual placement steps",
      "Improves positional accuracy from CAD source",
    ],
    imageId: "cracknell-add-family-1",
    imageIds: ["cracknell-add-family-1", "cracknell-add-family-2"],
  },
  {
    slug: "cracknell-import-topo-from-cad",
    title: "Import Topo from CAD",
    categoryHref: "/work/bim-tools",
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
    overview:
      "Built a Revit tool that reads contour lines or point data from a linked CAD drawing and generates a Revit toposolid from the extracted geometry.",
    engagement:
      "A CAD-to-toposolid conversion tool that removes the manual effort of recreating terrain from CAD contour data inside Revit.",
    problem:
      "Recreating site topography from CAD contour drawings in Revit required tedious manual point placement that was slow and inconsistent.",
    solution:
      "Developed a tool that reads CAD contour geometry from a linked DWG and converts it directly into a Revit toposolid with the correct elevation data.",
    result:
      "Reduced topography creation time significantly and produced more accurate terrain models aligned to the original CAD survey data.",
    tags: ["Revit", "BIM", "CAD Import", "Topography", "Landscape", "Automation"],
    technologies: ["C#", "Revit API", "CAD Import", "Geometry API", "WPF"],
    keyFeatures: [
      "Reads CAD contour lines from linked DWG",
      "Extracts elevation data from CAD geometry",
      "Generates Revit toposolid automatically",
      "Maintains accuracy from original survey data",
      "Removes manual point placement steps",
    ],
    imageId: "cracknell-import-topo-1",
    imageIds: ["cracknell-import-topo-1", "cracknell-import-topo-2"],
  },
  {
    slug: "cracknell-cleanup-points",
    title: "Clean-up Points",
    categoryHref: "/work/bim-tools",
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
    overview:
      "Built a Revit tool for cleaning up redundant or misplaced topography points, improving surface accuracy and reducing noise in landscape site models.",
    engagement:
      "A geometry cleanup utility for site teams dealing with messy imported point data that caused inaccurate toposolid surfaces.",
    problem:
      "Imported CAD topography often brought in duplicate, stacked, or off-grid points that made Revit surfaces unreliable.",
    solution:
      "Developed a point cleanup tool that identifies and removes problematic points from toposolid geometry to produce cleaner, more accurate surfaces.",
    result:
      "Improved surface quality, reduced manual point editing, and sped up the topography cleanup step in the landscape BIM workflow.",
    tags: ["Revit", "BIM", "Topography", "Geometry", "Cleanup", "Landscape"],
    technologies: ["C#", "Revit API", "Geometry API", "WPF"],
    keyFeatures: [
      "Identifies duplicate and stacked points",
      "Removes off-grid or noisy topography points",
      "Improves toposolid surface accuracy",
      "Reduces manual point editing",
      "Integrates into landscape BIM workflow",
    ],
    imageId: "cracknell-cleanup-points",
    imageIds: ["cracknell-cleanup-points"],
  },
  {
    slug: "cracknell-revit-toolbar",
    title: "Cracknell Revit Toolbar",
    categoryHref: "/work/bim-tools",
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
    overview:
      "Designed and built the full custom Revit ribbon toolbar for Cracknell, housing all internal BIM automation tools under a single consistent interface.",
    engagement:
      "A ribbon UI that acts as the home base for all Cracknell internal Revit tools, making them discoverable and easy to access for the whole production team.",
    problem:
      "As more internal tools were built, the team had no central place to find and launch them — tools were scattered and inconsistently accessible.",
    solution:
      "Created a custom Revit ribbon tab with organized panels for each tool category, giving the team a clean, branded entry point for all internal automation.",
    result:
      "Unified tool access under one interface, improved team adoption, and made onboarding new tools easier going forward.",
    tags: ["Revit", "BIM", "Ribbon UI", "Internal Tools", "Tooling"],
    technologies: ["C#", "Revit API", "Revit Ribbon API", "WPF"],
    keyFeatures: [
      "Custom Revit ribbon tab",
      "Organized panels per tool category",
      "Branded internal tool interface",
      "Single access point for all Cracknell tools",
      "Scalable for future tool additions",
    ],
    imageId: "cracknell-revit-toolbar",
    imageIds: ["cracknell-revit-toolbar"],
  },
  {
    slug: "cracknell-detail-legend",
    title: "Detail Legend",
    categoryHref: "/work/bim-tools",
    employer: "Cracknell",
    employerNote: "This project was developed during my employment at Cracknell. Images and context are owned by Cracknell. Source code is proprietary and not available. Included here for portfolio purposes only.",
    overview:
      "Built a Revit tool to automate the creation and population of detail legends, reducing the manual effort of maintaining consistent annotation across landscape drawing sets.",
    engagement:
      "A drafting automation tool for the Cracknell production team that removes the repetitive work of building and updating detail legends on deliverable sheets.",
    problem:
      "Creating and keeping detail legends consistent across large drawing sets was time-consuming and prone to manual error.",
    solution:
      "Developed a tool that reads detail components from the model and generates or updates legend views automatically, maintaining consistency with minimal user input.",
    result:
      "Reduced legend setup time, improved annotation consistency across sheets, and removed a repetitive manual step from the Cracknell drawing workflow.",
    tags: ["Revit", "BIM", "Legends", "Annotation", "Automation", "Landscape"],
    technologies: ["C#", "Revit API", "WPF"],
    keyFeatures: [
      "Automated legend view generation",
      "Reads detail components from the model",
      "Consistent annotation across drawing sets",
      "Reduces manual legend setup steps",
      "Integrates into Cracknell sheet workflow",
    ],
    imageId: "cracknell-detail-legend",
    imageIds: ["cracknell-detail-legend"],
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
