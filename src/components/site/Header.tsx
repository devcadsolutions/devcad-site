"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work/", label: "Work" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/downloads/", label: "Downloads" },
];

export function BrandMark({ size = 26 }: { size?: number }) {
  // A section-cut marker: the symbol drafters use to say "look closer here".
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true">
      <circle cx="13" cy="13" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1.5 13h23" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 1.5A11.5 11.5 0 0 1 24.5 13H13z" fill="currentColor" />
    </svg>
  );
}

export default function Header({ showNotes = false }: { showNotes?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="wrap">
        <Link href="/" className="brand">
          <BrandMark />
          <span translate="no">DevCAD Solutions</span>
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className="nav" data-open={open} aria-label="Main">
          {[...links.slice(0, 3), ...(showNotes ? [{ href: "/notes/", label: "Notes" }] : []), ...links.slice(3)].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname?.startsWith(l.href.replace(/\/$/, "")) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn btn-ink">Send a workflow</Link>
        </nav>
      </div>
    </header>
  );
}
