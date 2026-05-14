
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
  url: siteUrl,
  ogImage: `${siteUrl}/og.jpg`,
  favicon: `${basePath}/favicon.ico`,
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
  services: [
    {
      title: "CAD & Revit Automation",
      description: "Get good work done faster. Custom tools for AutoCAD, Revit, and other design software.",
      details: "I provide custom CAD automation for architects, engineers, designers and fabricators. We save time, automate repetitive tasks, and reduce human error.",
      timeline: "2-4 Weeks",
      tools: ["AutoLISP", "C#", "Python", "Revit API"]
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions to control, analyze, and integrate your hardware.",
      details: "We build robust software applications, from desktop utilities to web platforms that integrate with your technical data.",
      timeline: "4-12 Weeks",
      tools: ["React", "TypeScript", "Next.js", "Node.js"]
    },
    {
      title: "Data Visualization",
      description: "Web apps that visualize your data and tell your story.",
      details: "Custom dashboards, interactive charts, and maps that bring your technical data to life for better decision making.",
      timeline: "2-6 Weeks",
      tools: ["D3.js", "Recharts", "Excel VBA", "Google Apps Script"]
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
