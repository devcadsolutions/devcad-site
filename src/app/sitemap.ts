import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { canonicalPath } from "@/lib/metadata";
import { portfolioProjects } from "@/lib/portfolio-projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${canonicalPath(path)}`;
  const staticRoutes = ["/", "/work", "/services", "/about", "/contact", "/downloads"];
  const categories = siteConfig.portfolioCategories
    .filter((c) => !c.hidden && portfolioProjects.some((p) => p.categoryHref === c.href))
    .map((c) => c.href);

  return [
    ...staticRoutes.map((path) => ({ url: url(path), priority: path === "/" ? 1 : 0.8 })),
    ...categories.map((path) => ({ url: url(path), priority: 0.6 })),
    ...portfolioProjects.map((p) => ({ url: url(`/work/case-studies/${p.slug}`), priority: 0.6 })),
  ];
}
