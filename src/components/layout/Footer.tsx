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
    { href: "/contact", label: "Contact" },
  ]
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                {footerAvatar && (
                    <Image 
                        src={footerAvatar.imageUrl}
                        alt={footerAvatar.description}
                        data-ai-hint={footerAvatar.imageHint}
                        width={150}
                        height={150}
                        className="rounded-full mb-4"
                    />
                )}
                <p className="text-sm text-primary-foreground/80">
                    I'm a freelance creative technologist and digital craftsman. I love learning about the latest technologies and finding ways to apply them in my work. From generative art and design to physical computing and web development, I am always seeking out new and exciting ways to blend thought, code, and narrative together.
                </p>
            </div>
            <div className="flex flex-col items-center text-center">
                 <h3 className="font-headline text-lg font-semibold">Navigate</h3>
                 <div className="flex flex-col space-y-2 mt-4">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <h3 className="font-headline text-lg font-semibold">Get In Touch</h3>
                <div className="mt-4 flex space-x-4">
                    <a href={`mailto:${siteConfig.links.email}`} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                     <a href="#" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                     </a>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
