import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CommandLine from '@/components/site/CommandLine';
import { siteCommands } from '@/lib/commands';
import { publishedNotes } from '@/content/notes';
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource/kalam/latin-400.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'DevCAD Solutions | Revit, AutoCAD and APS automation',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: siteConfig.favicon,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#edf0ee' },
    { media: '(prefers-color-scheme: dark)', color: '#151b21' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header showNotes={publishedNotes.length > 0} />
        <main id="main">{children}</main>
        <Footer />
        <CommandLine commands={siteCommands} />
      </body>
    </html>
  );
}
