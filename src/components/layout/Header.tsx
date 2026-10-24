"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { isActivePath } from "@/lib/nav";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";

const categories = siteConfig.portfolioCategories.filter((c) => !c.hidden);

const desktopLinkClass =
  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-foreground";

function DesktopNavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(desktopLinkClass, active ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : "text-muted-foreground")}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  active,
  onNavigate,
  nested = false,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
  nested?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center rounded-md px-3 transition-colors hover:bg-primary/10 hover:text-foreground",
        nested ? "ml-3 text-sm" : "text-base font-medium",
        active ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : nested ? "text-muted-foreground" : "text-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioMenuOpen, setIsPortfolioMenuOpen] = useState(false);
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 shadow-[0_10px_30px_-24px_rgba(79,62,46,0.35)] backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center rounded-md" aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) =>
              link.href === "/work" ? (
                <div key={link.href} className="flex items-center">
                  <DesktopNavLink href={link.href} label={link.label} active={isActivePath(pathname, "/work")} />
                  <DropdownMenu open={isPortfolioMenuOpen} onOpenChange={setIsPortfolioMenuOpen} modal={false}>
                    <DropdownMenuTrigger
                      aria-label="Portfolio categories"
                      className="ml-0.5 inline-flex !min-h-9 !min-w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground data-[state=open]:bg-primary/10"
                      onPointerEnter={(event) => {
                        if (event.pointerType === "mouse") setIsPortfolioMenuOpen(true);
                      }}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      sideOffset={10}
                      className="w-64 rounded-xl border-border/60 bg-background p-2 shadow-xl"
                      onPointerLeave={(event) => {
                        if (event.pointerType === "mouse") setIsPortfolioMenuOpen(false);
                      }}
                    >
                      {categories.map((category) => (
                        <DropdownMenuItem key={category.href} asChild>
                          <Link href={category.href} className="cursor-pointer rounded-lg px-3 py-2 font-medium">
                            {category.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <DesktopNavLink key={link.href} href={link.href} label={link.label} active={isActivePath(pathname, link.href)} />
              )
            )}
          </nav>

          <Button asChild className="hidden rounded-full px-5 sm:inline-flex">
            <Link href="/contact" aria-current={isActivePath(pathname, "/contact") ? "page" : undefined}>
              Contact
            </Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-primary/10 md:hidden"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent id="mobile-nav" side="left" className="overflow-y-auto pr-4" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <Link href="/" className="mb-6 flex items-center" onClick={closeMobile}>
                <Logo />
              </Link>
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                <MobileNavLink href="/" label="Home" active={isActivePath(pathname, "/")} onNavigate={closeMobile} />
                {siteConfig.navLinks.map((link) => (
                  <div key={link.href} className="flex flex-col gap-1">
                    <MobileNavLink
                      href={link.href}
                      label={link.label}
                      active={link.href === "/work" ? isActivePath(pathname, "/work") && pathname.replace(/\/$/, "") === "/work" : isActivePath(pathname, link.href)}
                      onNavigate={closeMobile}
                    />
                    {link.href === "/work" &&
                      categories.map((category) => (
                        <MobileNavLink
                          key={category.href}
                          href={category.href}
                          label={category.label}
                          active={isActivePath(pathname, category.href)}
                          onNavigate={closeMobile}
                          nested
                        />
                      ))}
                  </div>
                ))}
                <Button asChild size="lg" className="mt-4 rounded-full">
                  <Link href="/contact" onClick={closeMobile}>
                    Contact
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
