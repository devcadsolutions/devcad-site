import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mobile App",
  description: "Placeholder page for Mobile App portfolio items.",
};

export default function MobileAppPage() {
  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio Category
        </p>
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Mobile App
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          This placeholder page is ready for mobile experiences, prototypes, and app case studies.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/work">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
