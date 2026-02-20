import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image-1');

    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
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
                        Innovating ideas - one code at a time
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-2xl font-bold">
                            AutoCAD automation and Revit scripting for architects and engineers
                        </h2>
                        <p className="text-muted-foreground">
                            I provide custom CAD automation for architects, engineers, designers and fabricators. We save time, automate repetitive tasks, and reduce human error.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Save time on your day-to-day tasks</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Plug holes in your day-to-day CAD workflows</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Gap-fill your production line with custom software</span>
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <Button asChild size="lg" variant="outline" className="border-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
                                <Link href="/work">View Portfolio</Link>
                            </Button>
                            <Button asChild variant="ghost" size="lg">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                data-ai-hint={heroImage.imageHint}
                                width={400}
                                height={400}
                                className="rounded-lg object-cover shadow-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
