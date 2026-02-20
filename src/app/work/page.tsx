import type { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse a selection of projects by DevCAD Studio, showcasing our expertise in solving complex engineering and software challenges.",
};

export default function WorkPage() {
  return (
     <>
      <header className="bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Work</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A showcase of our commitment to innovation, quality, and transformative results.
            </p>
          </div>
        </div>
      </header>
      <Portfolio />
    </>
  );
}
