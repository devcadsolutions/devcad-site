import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/wght.css";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const base = pageMetadata({ description: siteConfig.description, path: "/" });

export const metadata: Metadata = {
  ...base,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  // Canonical is set per page; don't let the root value leak into routes that forget it.
  alternates: undefined,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  icons: { icon: siteConfig.favicon },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author,
      jobTitle: siteConfig.jobTitle,
      email: `mailto:${siteConfig.links.email}`,
      url: siteConfig.url,
      sameAs: [siteConfig.links.linkedin],
      address: { "@type": "PostalAddress", addressLocality: "Parañaque City", addressCountry: "PH" },
      knowsAbout: ["Revit API", "AutoCAD .NET", "AutoLISP", "Autodesk Platform Services", "BIM", "C#", "WPF"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.links.email,
      founder: { "@id": `${siteConfig.url}/#person` },
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main id="main" tabIndex={-1} className="flex flex-1 flex-col outline-none">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
