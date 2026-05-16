
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const defaultSiteUrl = "https://devcad.site";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const siteConfig = {
  name: "DevCAD Solutions",
  basePath,
  url: siteUrl,
  ogImage: `${siteUrl}/og.jpg`,
  favicon: `${basePath}/icon.svg`,
  description: "Custom automation tools for Revit, AutoCAD, and AEC workflows.",
  links: {
    email: "devcadsolutions@gmail.com",
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Portfolio" },
    { href: "/downloads", label: "Downloads" },
  ],
  portfolioCategories: [
    { href: "/work/cad-tools", label: "CAD Tools", description: "AutoCAD automation work focused on productivity, drafting consistency, and maintainable internal tooling.", hidden: false },
    { href: "/work/bim-tools", label: "BIM Tools", description: "Revit-centric case studies covering exports, reference handling, geometry workflows, and BIM delivery support.", hidden: false },
    { href: "/work/aps", label: "APS / Cloud Automation", description: "Cloud-connected case studies focused on Autodesk Platform Services, export workflows, model processing, and delivery support.", hidden: false },
    { href: "/work/desktop-software", label: "Desktop Software", description: "Desktop-style and workbook-driven tools for technical estimation, operational support, and internal delivery workflows.", hidden: false },
    { href: "/work/web-apps-sites", label: "Web Apps & Sites", description: "Websites, client portals, dashboards, and browser-based applications.", hidden: false },
    { href: "/work/mobile-app", label: "Mobile App", description: "Mobile experiences, prototypes, and app case studies.", hidden: false },
  ],
  services: [
    {
      title: "Revit API Tool Development",
      description: "Custom Revit add-ins for model checking, alignment, sheet workflows, schedules, exports, and automation.",
      timeline: "2-6 Weeks",
      tools: ["Revit API", "C#", ".NET", "WPF"]
    },
    {
      title: "AutoCAD Automation",
      description: "AutoCAD .NET, AutoLISP, tool palettes, batch processing, standards checking, drawing cleanup, and productivity tools.",
      timeline: "1-5 Weeks",
      tools: ["AutoCAD .NET", "AutoLISP", "C#", "Tool Palettes"]
    },
    {
      title: "APS / Autodesk Cloud Automation",
      description: "Autodesk Platform Services workflows for model derivative, ACC/Docs integration, PDF/DWG extraction, cloud processing, and data pipelines.",
      timeline: "3-8 Weeks",
      tools: ["APS", "ACC/Docs", "Forge APIs", "Node.js"]
    },
    {
      title: "BIM/CAD Workflow Automation",
      description: "Tools that connect models, drawings, spreadsheets, and project data into cleaner workflows.",
      timeline: "2-6 Weeks",
      tools: ["Excel", "Google Sheets", "Revit", "AutoCAD"]
    },
    {
      title: "Legacy Tool Modernization",
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
  downloads: [
    {
      function: "Copy Rotate",
      description: "Copy objects then rotate it",
      link: "#",
    },
    {
      function: "Cursor Rotate",
      description: "Set the cursor and the snap angle same as that of the reference object",
      link: "#",
    },
    {
      function: "Endipe",
      description: "Creates an endpipe connecting two points of selection",
      link: "#",
    },
    {
      function: "Join Text",
      description: "Joins two text selection",
      link: "#",
    },
    {
      function: "Quit All But Active",
      description: "Closes all open drawings except the active one",
      link: "#",
    },
  ]
};

export type SiteConfig = typeof siteConfig;
