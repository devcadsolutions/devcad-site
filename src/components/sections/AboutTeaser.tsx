import LightboxImage from "@/components/ui/LightboxImage";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function AboutTeaser() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell grid items-center gap-12 px-6 py-10 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-5">
            <span className="eyebrow">Why Work With Me</span>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              Engineering-aware software, built for real production work.
            </h2>
            <p className="text-lg text-muted-foreground">
              I combine hands-on AEC workflow understanding with implementation skills, so the output is not just technically correct. It is usable, maintainable, and relevant to the teams doing the work.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">AEC Context</p>
                <p className="mt-2 text-sm text-muted-foreground">Built with drafting, BIM, and delivery realities in mind.</p>
              </div>
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">Clear Output</p>
                <p className="mt-2 text-sm text-muted-foreground">Focused on tools that reduce friction and improve consistency.</p>
              </div>
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">Long-Term Value</p>
                <p className="mt-2 text-sm text-muted-foreground">Solutions designed to be easier to maintain and roll out.</p>
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/about">Read My Background</Link>
            </Button>
          </div>
          <div className="order-first lg:order-last">
            {aboutImage && (
              <LightboxImage
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="w-full h-auto rounded-[1.75rem] object-contain shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
