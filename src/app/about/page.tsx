import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, values, and team behind DevCAD Solutions. Discover what drives us to deliver exceptional engineering and development solutions.",
};

export default function AboutPage() {
  return (
    <>
      <header className="bg-secondary overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Engineering the Future, Together</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-in fade-in duration-1000 delay-300 fill-mode-both">
              We are a collective of thinkers, builders, and problem-solvers passionate about turning great ideas into impactful products.
            </p>
          </div>
        </div>
      </header>
      <AboutContent />
      <CtaBand />
    </>
  );
}
