import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

const suggestions = [
  { href: "/work", label: "Portfolio", detail: "Revit, AutoCAD, and APS case studies" },
  { href: "/services", label: "Services", detail: "What I build and how I work" },
  { href: "/contact", label: "Contact", detail: "Describe the workflow you want automated" },
];

export default function NotFound() {
  return (
    <section className="pb-16 pt-16 md:pt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 font-headline text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="section-copy mt-4">
          The link may be old, or the page may have moved during a redesign. These are good places to continue:
        </p>
        <ul className="mt-8 grid gap-3">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="soft-panel group flex items-center justify-between gap-4 p-5 transition hover:border-primary/30"
              >
                <span>
                  <span className="block font-semibold text-foreground">{item.label}</span>
                  <span className="block text-sm text-muted-foreground">{item.detail}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild size="lg" variant="outline" className="mt-8 rounded-full border-foreground bg-transparent px-6 hover:bg-foreground hover:text-background">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
