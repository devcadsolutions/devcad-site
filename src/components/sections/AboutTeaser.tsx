import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function AboutTeaser() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Your Innovation Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              DevCAD Studio was founded on the principle that great ideas deserve brilliant execution. We are a team of passionate engineers, designers, and developers dedicated to solving complex challenges and building the products of tomorrow. We act as a true extension of your team, providing the expertise and capacity to turn ambitious visions into reality.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">More About Us</Link>
            </Button>
          </div>
          <div className="order-first lg:order-last">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
