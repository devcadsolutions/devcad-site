
const [repositoryOwner = "devcadsolutions", repositoryName = "devcad-site"] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const basePath =
  isGithubActions && !isUserOrOrgPagesRepo ? `/${repositoryName}` : "";
const defaultSiteUrl = isGithubActions
  ? `https://${repositoryOwner}.github.io${basePath}`
  : "https://devcad.site";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const siteConfig = {
  name: "DevCAD Solutions",
  basePath,
  url: siteUrl,
  ogImage: `${siteUrl}/og.jpg`,
  favicon: `${basePath}/icon.svg`,
  description: "Improving lives - one code at a time",
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
    { href: "/work/cad-tools", label: "CAD Tools" },
    { href: "/work/bim-tools", label: "BIM Tools" },
    { href: "/work/aps", label: "APS / Cloud Automation" },
    { href: "/work/desktop-software", label: "Desktop Software" },
    { href: "/work/web-apps-sites", label: "Web Apps & Sites" },
    { href: "/work/mobile-app", label: "Mobile App" },
  ],
  services: [
    {
      title: "Revit API Tool Development",
      description: "Custom Revit add-ins for model checking, alignment, sheet workflows, schedules, exports, and automation.",
      details: "Custom add-ins for checks, sheets, schedules, exports, and model automation.",
      timeline: "2-6 Weeks",
      tools: ["Revit API", "C#", ".NET", "WPF"]
    },
    {
      title: "AutoCAD Automation",
      description: "AutoCAD .NET, AutoLISP, tool palettes, batch processing, standards checking, drawing cleanup, and productivity tools.",
      details: "Commands, utilities, and drafting helpers that improve speed and standards.",
      timeline: "1-5 Weeks",
      tools: ["AutoCAD .NET", "AutoLISP", "C#", "Tool Palettes"]
    },
    {
      title: "APS / Autodesk Cloud Automation",
      description: "Autodesk Platform Services workflows for model derivative, ACC/Docs integration, PDF/DWG extraction, cloud processing, and data pipelines.",
      details: "Cloud-connected workflows for exports, Docs integration, and processing pipelines.",
      timeline: "3-8 Weeks",
      tools: ["APS", "ACC/Docs", "Forge APIs", "Node.js"]
    },
    {
      title: "BIM/CAD Workflow Automation",
      description: "Tools that connect models, drawings, spreadsheets, and project data into cleaner workflows.",
      details: "Connect models, sheets, data, and spreadsheets into one cleaner flow.",
      timeline: "2-6 Weeks",
      tools: ["Excel", "Google Sheets", "Revit", "AutoCAD"]
    },
    {
      title: "Legacy Tool Modernization",
      description: "Converting older AutoLISP scripts into maintainable C#/.NET applications.",
      details: "Move aging scripts into cleaner, more maintainable .NET tools.",
      timeline: "2-5 Weeks",
      tools: ["AutoLISP", "C#", ".NET", "WPF"]
    },
    {
      title: "Technical Documentation & Training",
      description: "User guides, onboarding decks, workflow documentation, and support materials for internal tool rollout.",
      details: "Rollout guides, onboarding decks, and support material for internal adoption.",
      timeline: "1-3 Weeks",
      tools: ["Documentation", "Training Decks", "SOPs", "Rollout Guides"]
    }
  ],
  projects: [
    {
      title: "Bobbie (Color Analysis)",
      category: "App Development",
      image: "app-dev-1",
      problem: "Traditional color analysis is time-consuming and subjective.",
      approach: "Built a custom interface for automated color matching and palette generation.",
      result: "A streamlined tool that provides instant, objective color analysis results."
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
