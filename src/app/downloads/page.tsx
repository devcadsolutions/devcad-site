
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export const metadata: Metadata = {
  title: "Downloads",
  description: "Download custom AutoLISP functions to automate and streamline your AutoCAD workflow.",
};

export default function DownloadsPage() {
    const digitalGridImage = PlaceHolderImages.find(img => img.id === 'service-digital-grid');
    const autolispImage = PlaceHolderImages.find(img => img.id === 'autolisp-blueprints');

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
                  {digitalGridImage && (
                      <Image
                          src={digitalGridImage.imageUrl}
                          alt={digitalGridImage.description}
                          data-ai-hint={digitalGridImage.imageHint}
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
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {autolispImage && (
                    <Image 
                        src={autolispImage.imageUrl}
                        alt={autolispImage.description}
                        data-ai-hint={autolispImage.imageHint}
                        width={500}
                        height={350}
                        className="rounded-lg object-cover shadow-lg"
                    />
                )}
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold">AutoLISP</h2>
                    <p className="text-muted-foreground">
                        Automate repetitive tasks, create custom commands, and streamline workflows in AutoCAD, resulting in increased productivity and reduced errors.
                    </p>
                    <Button asChild>
                        <Link href="#">How to Load AutoLisps</Link>
                    </Button>
                </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="font-bold">Function</TableHead>
                        <TableHead className="font-bold">Description</TableHead>
                        <TableHead className="font-bold text-right">Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {siteConfig.downloads.map((item) => (
                        <TableRow key={item.function}>
                            <TableCell className="font-medium">{item.function}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="link" asChild>
                                    <Link href={item.link}>Download</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </section>

    </>
  );
}
