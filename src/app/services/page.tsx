import type { Metadata } from "next";
import ServiceDetails from "@/components/sections/ServiceDetails";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the expert engineering and development services offered by DevCAD Studio, including CAD, software development, prototyping, and system integration.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              End-to-end solutions designed to bring your vision from concept to reality with precision and expertise.
            </p>
          </div>
        </div>
      </header>
      <ServiceDetails />
    </>
  );
}
