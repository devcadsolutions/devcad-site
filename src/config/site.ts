
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Production site is served from the Hostinger VPS at devcad.tech.
const defaultSiteUrl = "https://devcad.tech";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const siteConfig = {
  name: "DevCAD Solutions",
  basePath,
  url: siteUrl,
  ogImage: "/og.jpg",
  favicon: `${basePath}/icon.svg`,
  tagline: "Revit, AutoCAD & APS workflow automation",
  description:
    "Justine Bautista builds Revit add-ins, AutoCAD tools, and Autodesk Platform Services workflows that remove repetitive work for architecture and engineering teams.",
  author: "Justine Bautista",
  jobTitle: "AEC Workflow Automation Developer",
  location: "Parañaque City, Philippines",
  links: {
    email: "devcadsolutions@gmail.com",
    linkedin: "https://www.linkedin.com/in/engrjvb/",
    // TODO(Justine): add a WhatsApp link (e.g. "https://wa.me/63XXXXXXXXXX"). Contact buttons stay hidden while empty.
    whatsapp: "",
  },
  navLinks: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Portfolio" },
    { href: "/downloads", label: "Downloads" },
  ],
  // Order matters: AEC tooling first, general web work last.
  portfolioCategories: [
    { href: "/work/bim-tools", label: "BIM Tools", description: "Revit add-ins for geometry, CAD-to-BIM placement, link management, annotation, and internal tool access.", hidden: false },
    { href: "/work/cad-tools", label: "CAD Tools", description: "AutoCAD automation focused on drafting speed, standards consistency, and maintainable internal tooling.", hidden: false },
    { href: "/work/aps", label: "APS / Cloud Automation", description: "Autodesk Platform Services workflows: cloud exports, model processing, viewers, and admin tooling.", hidden: false },
    { href: "/work/desktop-software", label: "Desktop Software", description: "Desktop-style and workbook-driven tools for technical estimation and internal delivery workflows.", hidden: false },
    { href: "/work/web-apps-sites", label: "Web Apps & Sites", description: "Websites, client portals, dashboards, and browser-based applications.", hidden: false },
    // Hidden until there is at least one mobile case study.
    { href: "/work/mobile-app", label: "Mobile App", description: "Mobile experiences, prototypes, and app case studies.", hidden: true },
  ],
  services: [
    {
      title: "Revit API Tool Development",
      workHref: "/work/bim-tools",
      description: "Custom Revit add-ins for model checking, alignment, sheet workflows, schedules, exports, and automation.",
      timeline: "2-6 Weeks",
      tools: ["Revit API", "C#", ".NET", "WPF"]
    },
    {
      title: "AutoCAD Automation",
      workHref: "/work/cad-tools",
      description: "AutoCAD .NET, AutoLISP, tool palettes, batch processing, standards checking, drawing cleanup, and productivity tools.",
      timeline: "1-5 Weeks",
      tools: ["AutoCAD .NET", "AutoLISP", "C#", "Tool Palettes"]
    },
    {
      title: "APS / Autodesk Cloud Automation",
      workHref: "/work/aps",
      description: "Autodesk Platform Services workflows for model derivative, ACC/Docs integration, PDF/DWG extraction, cloud processing, and data pipelines.",
      timeline: "3-8 Weeks",
      tools: ["APS", "ACC/Docs", "Forge APIs", "Node.js"]
    },
    {
      title: "BIM/CAD Workflow Automation",
      workHref: "/work/bim-tools",
      description: "Tools that connect models, drawings, spreadsheets, and project data into cleaner workflows.",
      timeline: "2-6 Weeks",
      tools: ["Excel", "Google Sheets", "Revit", "AutoCAD"]
    },
    {
      title: "Legacy Tool Modernization",
      workHref: "/work/cad-tools",
      description: "Converting older AutoLISP scripts into maintainable C#/.NET applications.",
      timeline: "2-5 Weeks",
      tools: ["AutoLISP", "C#", ".NET", "WPF"]
    },
    {
      title: "Technical Documentation & Training",
      description: "User guides, onboarding decks, workflow documentation, and support materials for internal tool rollout.",
      timeline: "1-3 Weeks",
      tools: ["Documentation", "Training Decks", "SOPs", "Rollout Guides"]
    }
  ],
  // AutoLISP routines listed on /downloads. Set `file` to a path under public/downloads/
  // (e.g. "/downloads/copy-rotate.lsp") to show a direct download link; otherwise the
  // page offers a pre-filled email request instead of a dead link.
  downloads: [
    { function: "Copy Rotate", description: "Copy objects, then rotate the copies in one step.", file: "" },
    { function: "Cursor Rotate", description: "Match the cursor and snap angle to a selected reference object.", file: "" },
    { function: "End Pipe", description: "Create an end-pipe symbol connecting two picked points.", file: "" },
    { function: "Join Text", description: "Join two text objects into one.", file: "" },
    { function: "Quit All But Active", description: "Close every open drawing except the active one.", file: "" },
  ]
};

export type SiteConfig = typeof siteConfig;
