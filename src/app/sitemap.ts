import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { categories, orderedProjects, caseStudyHref } from "@/lib/work";
import { publishedNotes } from "@/content/notes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const paths = [
    "/",
    "/work/",
    "/services/",
    "/about/",
    "/contact/",
    "/downloads/",
    ...categories.map((c) => `/work/${c.slug}/`),
    ...orderedProjects.map((p) => caseStudyHref(p.slug)),
    ...publishedNotes.filter((n) => !n.draft).flatMap((n, i) => (i === 0 ? ["/notes/", `/notes/${n.slug}/`] : [`/notes/${n.slug}/`])),
  ];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
