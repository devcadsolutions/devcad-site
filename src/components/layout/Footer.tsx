import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = [{ href: "/", label: "Home" }, ...siteConfig.navLinks, { href: "/contact", label: "Contact" }];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[linear-gradient(180deg,hsl(34_27%_95%),hsl(33_22%_92%))]">
      <div className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="font-headline text-lg font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.author} · Revit, AutoCAD &amp; APS automation
            </p>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="flex w-fit items-center gap-2 text-sm text-foreground/85 underline-offset-4 hover:underline"
            >
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              {siteConfig.links.email}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-2 text-sm text-foreground/85 underline-offset-4 hover:underline"
            >
              <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {siteConfig.location} · works remotely
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-1 gap-y-2 text-sm md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/65 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-border/70 pt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
