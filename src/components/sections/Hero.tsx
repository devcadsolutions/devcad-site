import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PageHeroBackground from "@/components/layout/PageHeroBackground";

export default function Hero() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image-1');

    return (
        <section>
            <div className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
                <PageHeroBackground />
                <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center reveal-up">
                        <span className="eyebrow">AEC Automation Specialist</span>
                        <h1 className="mx-auto mt-5 max-w-5xl font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            I build automation tools for Revit, AutoCAD, and AEC workflows.
                        </h1>
                        <p className="mx-auto mt-5 max-w-4xl text-lg text-muted-foreground md:text-xl">
                            Specializing in Revit API, AutoCAD .NET, AutoLISP modernization, WPF desktop tools, and Autodesk Platform Services integrations for BIM/CAD teams.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                    <div className="space-y-6 reveal-left" style={{ animationDelay: "120ms" }}>
                        <span className="eyebrow">What I Build</span>
                        <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                            Custom tools for BIM and CAD teams that want less manual work, cleaner delivery, and more reliable internal workflows.
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">Revit API</span>
                            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">AutoCAD .NET</span>
                            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">AutoLISP Modernization</span>
                            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">WPF Tools</span>
                            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-foreground/85">APS Integrations</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild size="lg" className="rounded-full px-6">
                                <Link href="/work">
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full border-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                                <Link href="/contact">Contact Me</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center reveal-right" style={{ animationDelay: "220ms" }}>
                        {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                data-ai-hint={heroImage.imageHint}
                                width={1080}
                                height={1350}
                                className="w-full max-w-sm rounded-lg object-cover shadow-lg transition-transform hover:scale-105 duration-500"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
