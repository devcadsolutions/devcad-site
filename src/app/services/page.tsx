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
      <header className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        <PageHeroBackground opacity="82" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal-up">
            <span className="eyebrow">Services</span>
            <h1 className="mx-auto mt-5 max-w-5xl font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Revit, AutoCAD, APS, and workflow automation services.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Built for BIM, CAD, and technical delivery teams.
            </p>
          </div>
        </div>
      </header>

      <WhatIDo />

      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell grid gap-10 px-6 py-8 sm:px-8 md:grid-cols-2 md:items-center">
            <div className="space-y-5 reveal-left">
              <span className="eyebrow">How I Work</span>
              <h2 className="font-headline text-3xl font-bold">Focused builds for real production workflows.</h2>
              <p className="text-lg text-muted-foreground">
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
                  className="w-full h-auto rounded-[1.5rem] object-contain shadow-lg"
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
