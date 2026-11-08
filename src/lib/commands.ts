import { siteConfig } from "@/config/site";
import { caseStudyHref, categories, orderedProjects } from "@/lib/work";
import { publishedNotes } from "@/content/notes";

export type SiteCommand = {
  /** The command name, typed in capitals the way AutoCAD shows it. */
  name: string;
  /** Short aliases, like L for LINE. */
  aliases: string[];
  /** What happens, in plain words, shown in the suggestion list. */
  label: string;
  href: string;
  group: "Pages" | "Categories" | "Case studies" | "Links";
};

const STOP = new Set(["from", "via", "the", "and", "for", "with", "a", "an", "of", "to", "in", "web", "app", "tool", "tools"]);

function aliasFor(title: string) {
  const words = title
    .replace(/[^A-Za-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w.toLowerCase()));
  return words.slice(0, 2).join("").toUpperCase();
}

const pages: SiteCommand[] = [
  { name: "HOME", aliases: ["H"], label: "Go to the home page", href: "/", group: "Pages" },
  { name: "WORK", aliases: ["W"], label: "All case studies", href: "/work/", group: "Pages" },
  { name: "SERVICES", aliases: ["S"], label: "What I build and how", href: "/services/", group: "Pages" },
  { name: "ABOUT", aliases: ["A"], label: "About Justine", href: "/about/", group: "Pages" },
  { name: "CONTACT", aliases: ["C", "SEND", "BRIEF"], label: "Send me a workflow", href: "/contact/", group: "Pages" },
  { name: "DOWNLOADS", aliases: ["D", "LISP"], label: "AutoLISP routines", href: "/downloads/", group: "Pages" },
  { name: "TOPO", aliases: ["DEMO", "TOPOSOLID"], label: "Try the contours to toposolid demo", href: "/#topo-demo", group: "Pages" },
  ...(publishedNotes.length
    ? [{ name: "NOTES", aliases: ["N"], label: "Technical notes", href: "/notes/", group: "Pages" as const }]
    : []),
];

const cats: SiteCommand[] = categories.map((c) => {
  const code = {
    "cad-tools": "CAD",
    "bim-tools": "BIM",
    aps: "APS",
    "desktop-software": "DESKTOP",
    "web-apps-sites": "WEBAPPS",
    "mobile-app": "MOBILE",
  }[c.slug] ?? c.slug.toUpperCase();
  return { name: code, aliases: [], label: `${c.label} (${c.count})`, href: `/work/${c.slug}/`, group: "Categories" };
});

const taken = new Set([...pages, ...cats].flatMap((c) => [c.name, ...c.aliases]));
const studies: SiteCommand[] = orderedProjects.map((p) => {
  let name = aliasFor(p.title);
  for (let n = 2; taken.has(name); n++) name = `${aliasFor(p.title)}${n}`;
  taken.add(name);
  return { name, aliases: [], label: p.title, href: caseStudyHref(p.slug), group: "Case studies" };
});

const links: SiteCommand[] = [
  { name: "EMAIL", aliases: ["MAIL"], label: siteConfig.links.email, href: `mailto:${siteConfig.links.email}`, group: "Links" },
  { name: "LINKEDIN", aliases: ["LI"], label: "Open LinkedIn profile", href: siteConfig.links.linkedin, group: "Links" },
];

export const siteCommands: SiteCommand[] = [...pages, ...cats, ...studies, ...links];
