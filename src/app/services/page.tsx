import type { Metadata } from "next";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn about Justine, a Licensed Civil Engineer turned Software Developer, and the services offered by DevCAD Solutions.",
};

export default function ServicesPage() {
  const serviceImage1 = PlaceHolderImages.find(img => img.id === 'service-digital-grid');
  const serviceImage2 = PlaceHolderImages.find(img => img.id === 'footer-avatar');

  return (
    <>
       <header className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute inset-0 top-0 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                        DevCAD Solutions
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                        Improving lives - one code at a time
                    </p>
                </div>
            </div>
        </header>

      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <p className="text-muted-foreground text-lg">Solutions is actually my middle name.</p>
                    <p className="text-lg text-foreground">
                        Hi, I'm Justine — a Licensed Civil Engineer turned Software Developer. I thrive on solving problems, whether it's automating repetitive tasks or building software concepts from the ground up.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "Automation is to your time as compound interest is to your money."
                    </blockquote>
                    <p className="text-lg text-foreground">And I'm here to help you invest wisely.</p>
                </div>
                <div className="flex justify-center">
                  {serviceImage1 && (
                      <Image
                          src={serviceImage1.imageUrl}
                          alt={serviceImage1.description}
                          data-ai-hint={serviceImage1.imageHint}
                          width={600}
                          height={450}
                          className="rounded-lg object-cover shadow-lg"
                      />
                  )}
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            {serviceImage2 && (
                <Image
                    src={serviceImage2.imageUrl}
                    alt={serviceImage2.description}
                    data-ai-hint={serviceImage2.imageHint}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover shadow-lg mx-auto"
                />
            )}
            <p className="mt-4 text-muted-foreground font-semibold">AutoCAD Customization</p>
        </div>
      </section>
    </>
  );
}
