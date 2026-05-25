import type { Metadata } from "next";
import LightboxImage from "@/components/ui/LightboxImage";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhatIDo from "@/components/sections/WhatIDo";
import PageHeroBackground from "@/components/layout/PageHeroBackground";

export const metadata: Metadata = {
  title: "Services",
  description: "Revit, AutoCAD, APS, and workflow automation services from DevCAD Solutions.",
};

export default function ServicesPage() {
  const serviceImage = PlaceHolderImages.find((img) => img.id === "service-digital-grid");

  return (
    <>
      <header className="relative overflow-hidden py-20 md:py-24 lg:py-32">
        <PageHeroBackground opacity="82" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal-up">
            <span className="eyebrow">Services</span>
            <h1 className="mx-auto mt-6 max-w-5xl font-headline text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl">
              Revit, AutoCAD, APS, and workflow automation services.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-muted-foreground md:text-xl md:leading-8">
              Built for BIM, CAD, and technical delivery teams.
            </p>
          </div>
        </div>
      </header>

      <WhatIDo />

      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell grid gap-12 px-6 py-12 sm:px-8 md:grid-cols-2 md:items-center lg:py-16">
            <div className="space-y-5 reveal-left">
              <span className="eyebrow">How I Work</span>
              <h2 className="section-heading">Focused builds for real production workflows.</h2>
              <p className="section-copy">
                The aim is simple: remove repetitive work, improve consistency, and ship tools people will actually use.
              </p>
            </div>
            <div className="flex justify-center reveal-right">
              {serviceImage && (
                <LightboxImage
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description}
                  data-ai-hint={serviceImage.imageHint}
                  width={600}
                  height={450}
                  className="h-auto w-full rounded-xl object-contain shadow-[0_24px_56px_-36px_rgba(79,62,46,0.45)]"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <ServiceDetails />
    </>
  );
}
