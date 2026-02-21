import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Portfolio/Webapps",
  description: "Check out Bobbie, a color analysis tool by DevCAD Solutions.",
};

export default function WorkPage() {
  const bobbyApp1 = PlaceHolderImages.find(img => img.id === 'bobby-app-1');
  const bobbyApp2 = PlaceHolderImages.find(img => img.id === 'bobby-app-2');
  const qrCode = PlaceHolderImages.find(img => img.id === 'qr-code');

  return (
    <>
      <header className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-0 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              DevCAD Solutions
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Improving lives - one code at a time
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground py-3 px-10 rounded-md">
                <h2 className="font-headline text-3xl font-bold tracking-tight">
                    Bobbie (Color Analysis)
                </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {bobbyApp1 && (
              <Image
                src={bobbyApp1.imageUrl}
                alt={bobbyApp1.description}
                data-ai-hint={bobbyApp1.imageHint}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg w-full"
              />
            )}
            {bobbyApp2 && (
              <Image
                src={bobbyApp2.imageUrl}
                alt={bobbyApp2.description}
                data-ai-hint={bobbyApp2.imageHint}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg w-full"
              />
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                The color analysis tool helps you discover your ideal color palette. Simply upload a clear photo of yourself, and the AI will analyze your skin's undertones and features to determine your "color season."
              </p>
              <p>
                You'll receive a personalized report with your most flattering colors, shades to avoid, and makeup recommendations. You can even download a shareable infographic of your results.
              </p>
            </div>
            <div className="flex justify-center">
              {qrCode && (
                <Image
                  src={qrCode.imageUrl}
                  alt={qrCode.description}
                  data-ai-hint={qrCode.imageHint}
                  width={250}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>

          <div className="text-center">
             <Button asChild size="lg" className="h-20 px-20 text-3xl font-bold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
                <Link href="#">START</Link>
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}
