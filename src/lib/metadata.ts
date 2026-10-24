import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title?: string;
  description: string;
  /** Route path, e.g. "/about". Trailing slash is added to match the static export. */
  path: string;
  type?: "website" | "article" | "profile";
};

export function canonicalPath(path: string) {
  if (path === "/" || path === "") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Per-page metadata with canonical URL and complete Open Graph / Twitter tags.
 * (Next.js replaces, rather than merges, `openGraph` objects from parent layouts,
 * so every page needs the full set.)
 */
export function pageMetadata({ title, description, path, type = "website" }: PageMetadataInput): Metadata {
  const url = canonicalPath(path);
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_US",
      siteName: siteConfig.name,
      url,
      title: fullTitle,
      description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name}: ${siteConfig.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
