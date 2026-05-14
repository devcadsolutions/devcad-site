"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioMenuOpen, setIsPortfolioMenuOpen] = useState(false);
  const isPortfolioActive = pathname === "/work" || pathname.startsWith("/work/");

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary-foreground hover:bg-primary px-3 py-2 rounded-md",
        pathname === href ? "bg-primary text-primary-foreground" : "text-muted-foreground"
      )}
      onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background shadow-[0_10px_30px_-24px_rgba(79,62,46,0.35)]">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
           <nav className="hidden items-center space-x-2 md:flex">
            {siteConfig.navLinks.map((link) =>
              link.href === "/work" ? (
                <DropdownMenu
                  key={link.href}
                  open={isPortfolioMenuOpen}
                  onOpenChange={setIsPortfolioMenuOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <Link
                      href="/work"
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none hover:bg-primary hover:text-primary-foreground",
                        isPortfolioActive ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      )}
                      onMouseEnter={() => setIsPortfolioMenuOpen(true)}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsPortfolioMenuOpen(false);
                        router.push("/work");
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={10}
                    className="w-60 rounded-xl border-border/60 bg-background p-2 shadow-xl"
                    onMouseEnter={() => setIsPortfolioMenuOpen(true)}
                    onMouseLeave={() => setIsPortfolioMenuOpen(false)}
                    onCloseAutoFocus={(event) => event.preventDefault()}
                  >
                    {siteConfig.portfolioCategories.map((category) => (
                      <DropdownMenuItem key={category.href} asChild>
                        <Link
                          href={category.href}
                          className="cursor-pointer rounded-lg px-3 py-2 font-medium"
                          onClick={() => setIsPortfolioMenuOpen(false)}
                        >
                          {category.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="mb-8 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Logo />
              </Link>
              <div className="flex flex-col space-y-4">
                {siteConfig.navLinks.map((link) => (
                  <div key={link.href} className="flex flex-col space-y-2">
                    <NavLink href={link.href}>{link.label}</NavLink>
                    {link.href === "/work" &&
                      siteConfig.portfolioCategories.map((category) => (
                        <Link
                          key={category.href}
                          href={category.href}
                          className="pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.label}
                        </Link>
                      ))}
                  </div>
                ))}
                 <NavLink href="/contact">Contact</NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
