import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CtaBand() {
  return (
    <section className="pt-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-primary px-6 py-10 text-primary-foreground shadow-[0_30px_80px_-40px_rgba(62,46,33,0.7)] sm:px-8 lg:px-12">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,hsl(39_44%_76%_/_0.22),transparent_65%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div className="space-y-4 reveal-left">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Ready to talk about your workflow?
              </h2>
              <p className="max-w-2xl text-base text-primary-foreground/78 md:text-lg">
                Reach out directly by Gmail or LinkedIn and I&apos;ll get back to you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-base">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/35 bg-transparent px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.links.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email on Gmail
                </a>
              </Button>
              <div className="flex gap-3 lg:justify-end">
                <a
                  href="https://www.linkedin.com/in/engrjvb/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-primary-foreground transition hover:bg-white/18"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
