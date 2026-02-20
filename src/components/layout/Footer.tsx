import Link from "next/link";
import { siteConfig } from "@/config/site";
import Logo from "@/components/Logo";
import { Mail, Github, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
    // Add more social links here if needed in site.config.ts
    // { icon: Github, href: "#", label: "GitHub" },
    // { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/">
              <Logo className="h-7 w-auto" />
              <span className="sr-only">DevCAD Studio</span>
            </Link>
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              Precision engineering and development solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-end">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
