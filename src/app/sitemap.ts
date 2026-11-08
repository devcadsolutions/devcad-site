import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { categories, orderedProjects, caseStudyHref } from "@/lib/work";

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
  ];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
