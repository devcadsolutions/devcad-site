import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg p-10 text-center md:flex-row md:text-left">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Let's build something incredible together.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
