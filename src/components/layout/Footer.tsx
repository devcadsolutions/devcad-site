"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Mail, MoveRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  const footerAvatar = PlaceHolderImages.find((img) => img.id === "footer-avatar");
  const footerLinks = [
    ...siteConfig.navLinks,
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/70 bg-[linear-gradient(180deg,hsl(34_27%_95%),hsl(33_22%_92%))]">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div className="space-y-6">
              <span className="eyebrow">DevCAD Solutions</span>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {footerAvatar && (
                  <Image
                    src={footerAvatar.imageUrl}
                    alt={footerAvatar.description}
                    data-ai-hint={footerAvatar.imageHint}
                    width={120}
                    height={120}
                    className="h-28 w-28 rounded-[1.5rem] border border-white/70 object-cover shadow-[0_20px_40px_-28px_rgba(79,62,46,0.5)]"
                  />
                )}
                <div className="max-w-xl space-y-3">
                  <h2 className="font-headline text-3xl font-bold text-foreground">Software built around real workflow friction.</h2>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    I help architects, engineers, and technical teams turn repetitive process pain into cleaner tools,
                    better automation, and more reliable day-to-day delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="soft-panel p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-foreground/85">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white/80 px-4 py-3 transition hover:bg-white"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{siteConfig.links.email}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white/75 px-4 py-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Paranaque City, Philippines</span>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center justify-between rounded-2xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:bg-primary/92"
                >
                  <span>Discuss a project</span>
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-border/70 pt-6 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full border px-3 py-1.5 transition hover:border-border hover:bg-white/65 hover:text-foreground",
                    pathname === link.href
                      ? "border-border bg-white/80 font-semibold text-foreground"
                      : "border-transparent text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2025 {siteConfig.name} · Design by {siteConfig.name}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

