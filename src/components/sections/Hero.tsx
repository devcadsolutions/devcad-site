import Link from "next/link";
import LightboxImage from "@/components/ui/LightboxImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import AvatarHero from "@/components/sections/AvatarHero";

export default function Hero() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image-1');

    return (
        <>
            {/* ── Animated avatar hero ── */}
            <AvatarHero />

            {/* ── What I Build + screenshot grid ── */}
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
                            <LightboxImage
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                data-ai-hint={heroImage.imageHint}
                                width={1080}
                                height={1350}
                                className="w-full max-w-sm rounded-lg object-cover shadow-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
