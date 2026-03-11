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
                className="absolute inset-0 top-0 h-full bg-cover bg-center animate-in fade-in duration-1000"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center animate-in fade-in slide-in-from-top-8 duration-700">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                        DevCAD Solutions
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                        Innovating ideas - one code at a time
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                    <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-300 fill-mode-both">
                        <h2 className="font-headline text-2xl font-bold">
                            AutoCAD automation and Revit scripting for architects and engineers
                        </h2>
                        <p className="text-muted-foreground">
                            I provide custom CAD automation for architects, engineers, designers and fabricators. We save time, automate repetitive tasks, and reduce human error.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center transition-transform hover:translate-x-2 duration-300">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Save time on your day-to-day tasks</span>
                            </li>
                            <li className="flex items-center transition-transform hover:translate-x-2 duration-300">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Plug holes in your day-to-day CAD workflows</span>
                            </li>
                            <li className="flex items-center transition-transform hover:translate-x-2 duration-300">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Gap-fill your production line with custom software</span>
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <Button asChild size="lg" variant="outline" className="border-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                                <Link href="/work">View Portfolio</Link>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="transition-all duration-300 hover:bg-primary/10">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center animate-in fade-in slide-in-from-right-8 duration-700 delay-500 fill-mode-both">
                        {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                data-ai-hint={heroImage.imageHint}
                                width={400}
                                height={400}
                                className="rounded-lg object-cover shadow-lg transition-transform hover:scale-105 duration-500"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
