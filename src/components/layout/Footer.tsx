import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Footer() {
  const footerAvatar = PlaceHolderImages.find(img => img.id === 'footer-avatar');
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Portfolio" },
    { href: "/downloads", label: "Downloads" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-background border-t">
        <div className="bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-4 sm:space-x-8 mb-8 flex-wrap">
                    {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-base sm:text-lg font-medium hover:underline">
                        {link.label}
                    </Link>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex gap-4 items-center">
                    {footerAvatar && (
                        <Image
                        src={footerAvatar.imageUrl}
                        alt={footerAvatar.description}
                        data-ai-hint={footerAvatar.imageHint}
                        width={120}
                        height={120}
                        className="rounded-lg shrink-0"
                        />
                    )}
                    <p className="text-sm text-primary-foreground/80">
                        Hi, I'm Justine — a creative and technical strategist, poet, and digital tinkerer. I love turning ideas into stories, whether through branding, chatbot design, or late-night verses. This space is where I share experiments, insights, and the occasional caffeine-fueled thought. Let's explore together!
                    </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex space-x-2">
                            <a href="#" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground" title="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href={`mailto:${siteConfig.links.email}`} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground" title="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </a>
                        </div>
                        <p className="text-sm text-primary-foreground/80 text-center md:text-right">
                            {siteConfig.links.email} | Parañaque City, Philippines
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-secondary py-3">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-muted-foreground">
                <p>Design created by {siteConfig.name}</p>
                <p>&copy; 2025 {siteConfig.name}. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
