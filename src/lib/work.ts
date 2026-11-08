import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-projects";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig } from "@/config/site";
import sizes from "@/lib/image-sizes.json";

const SIZES = sizes as unknown as Record<string, [number, number]>;
export function imageSize(src: string) {
  const s = SIZES[src];
  return s ? { width: s[0], height: s[1] } : { width: 1600, height: 1000 };
}

/**
 * Only images that genuinely show the project. Several case studies used to
 * borrow unrelated stock or brand photos; those now get a drawn placeholder.
 */
const REAL_IMAGE_PREFIXES = [
  "cracknell-",
  "the-coffee-pup-",
  "made4her-",
  "projectforge-",
  "apex-digital-",
  "whats-my-tone-",
  "autocad-palette",
];

export type WorkImage = { src: string; alt: string; width: number; height: number };

export function projectImages(p: PortfolioProject): WorkImage[] {
  const ids = p.imageIds?.length ? p.imageIds : [p.imageId];
  return ids
    .filter((id) => REAL_IMAGE_PREFIXES.some((pre) => id.startsWith(pre)))
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter((img): img is NonNullable<typeof img> => Boolean(img))
    .map((img, i) => ({ src: img.imageUrl, alt: `${p.title}, screenshot ${i + 1}`, ...imageSize(img.imageUrl) }));
}

export function coverImage(p: PortfolioProject): WorkImage | null {
  return projectImages(p)[0] ?? null;
}

export const categories = siteConfig.portfolioCategories
  .filter((c) => !c.hidden)
  .map((c) => ({
    ...c,
    slug: c.href.replace("/work/", ""),
    count: portfolioProjects.filter((p) => p.categoryHref === c.href).length,
  }))
  .filter((c) => c.count > 0);

export function categoryOf(p: PortfolioProject) {
  return categories.find((c) => c.href === p.categoryHref);
}

/** Short code used in drawing-style callouts. */
export function sheetCode(p: PortfolioProject) {
  const map: Record<string, string> = {
    "/work/cad-tools": "CAD",
    "/work/bim-tools": "BIM",
    "/work/aps": "APS",
    "/work/desktop-software": "DSK",
    "/work/web-apps-sites": "WEB",
    "/work/mobile-app": "MOB",
  };
  return map[p.categoryHref] ?? "GEN";
}

/** AEC work first, then web and other projects. */
const ORDER = ["/work/bim-tools", "/work/cad-tools", "/work/aps", "/work/desktop-software", "/work/web-apps-sites", "/work/mobile-app"];
export const orderedProjects = [...portfolioProjects].sort(
  (a, b) => ORDER.indexOf(a.categoryHref) - ORDER.indexOf(b.categoryHref),
);

export const caseStudyHref = (slug: string) => `/work/case-studies/${slug}/`;
