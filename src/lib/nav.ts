/**
 * The site is exported with `trailingSlash: true`, so `usePathname()` can return
 * "/about/" while config hrefs are "/about". Normalise before comparing.
 */
export function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function isActivePath(pathname: string, href: string) {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}
