import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const values = [
    { name: "Client Partnership", description: "We succeed when you succeed. We act as an extension of your team." },
    { name: "Technical Excellence", description: "We are committed to best practices, clean code, and robust engineering." },
    { name: "Pragmatic Innovation", description: "We blend cutting-edge technology with real-world constraints to create solutions that work." },
    { name: "Transparent Communication", description: "We believe in open, honest, and frequent communication at every project stage." }
]

export default function AboutContent() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
    return (
        <section>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div className="space-y-8 reveal-left">
                        <div>
                            <h2 className="font-headline text-3xl font-bold">Our Story</h2>
                            <p className="mt-4 text-muted-foreground">
                                Founded by a group of veteran engineers, DevCAD Solutions was born from a shared frustration: too many brilliant hardware and software ideas fail due to a lack of integrated, expert execution. We saw a gap between concept and creation, where siloed teams and fragmented expertise led to delays, budget overruns, and compromised products.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                We built DevCAD Solutions to be the solution. We are a single, cohesive unit of multidisciplinary experts—in mechanical design, electronics, embedded systems, and application software. Our mission is to provide the seamless, end-to-end technical partnership needed to navigate the complexities of product development and bring innovative ideas to market, faster and more reliably.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl font-bold">Our Values</h2>
                            <ul className="mt-4 space-y-4">
                                {values.map((value, idx) => (
                                    <li key={value.name} className="flex items-start reveal-up" style={{ animationDelay: `${(idx + 1) * 90}ms` }}>
                                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">{value.name}</h4>
                                            <p className="text-sm text-muted-foreground">{value.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                     <div className="flex items-center justify-center reveal-right" style={{ animationDelay: "160ms" }}>
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                data-ai-hint={aboutImage.imageHint}
                                width={800}
                                height={600}
                                className="w-full rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
