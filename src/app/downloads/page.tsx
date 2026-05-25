import type { Metadata } from "next";
import LightboxImage from "@/components/ui/LightboxImage";
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
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download custom AutoLISP functions to automate and streamline your AutoCAD workflow.",
};

export default function DownloadsPage() {
  const digitalGridImage = PlaceHolderImages.find((img) => img.id === "service-digital-grid");
  const autolispImage = PlaceHolderImages.find((img) => img.id === "autolisp-blueprints");

  return (
    <>
      <header className="relative overflow-hidden py-20 md:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-0 h-full bg-cover bg-center animate-in fade-in duration-1000"
          style={{ backgroundImage: `url('${siteConfig.basePath}/legacy/page-header.jpg')` }}
        >
          <div className="absolute inset-0 bg-background/84" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="font-headline text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              DevCAD Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-muted-foreground md:text-xl md:leading-8">
              Improving lives - one code at a time
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
              <p className="text-lg leading-8 text-muted-foreground">
                Solutions is actually my middle name.
              </p>
              <p className="text-lg leading-8 text-foreground">
                Hi, I&apos;m Justine - a Licensed Civil Engineer turned Software Developer. I thrive on solving problems,
                whether it&apos;s automating repetitive tasks or building software concepts from the ground up.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic leading-7 text-muted-foreground transition-all duration-300 hover:border-foreground hover:pl-6">
                &quot;Automation is to your time as compound interest is to your money.&quot;
              </blockquote>
              <p className="text-lg leading-8 text-foreground">
                And I&apos;m here to help you invest wisely.
              </p>
            </div>
            <div className="flex justify-center animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
              {digitalGridImage && (
                <LightboxImage
                  src={digitalGridImage.imageUrl}
                  alt={digitalGridImage.description}
                  data-ai-hint={digitalGridImage.imageHint}
                  width={600}
                  height={450}
                  className="h-auto w-full rounded-xl object-contain shadow-[0_24px_56px_-36px_rgba(79,62,46,0.45)]"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 md:grid-cols-2">
            {autolispImage && (
              <div className="overflow-hidden rounded-xl shadow-[0_24px_56px_-36px_rgba(79,62,46,0.45)]">
                <LightboxImage
                  src={autolispImage.imageUrl}
                  alt={autolispImage.description}
                  data-ai-hint={autolispImage.imageHint}
                  width={500}
                  height={350}
                  className="h-auto w-full object-contain"
                />
              </div>
            )}
            <div className="space-y-4">
              <h2 className="section-heading">AutoLISP</h2>
              <p className="leading-7 text-muted-foreground">
                Automate repetitive tasks, create custom commands, and streamline workflows in AutoCAD, resulting in
                increased productivity and reduced errors.
              </p>
              <Button asChild className="transition-all duration-300 hover:shadow-md">
                <Link href="#">How to Load AutoLisps</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-border/70 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Function</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                  <TableHead className="text-right font-semibold">Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {siteConfig.downloads.map((item) => (
                  <TableRow key={item.function} className="group transition-colors hover:bg-muted/50">
                    <TableCell className="font-medium transition-colors group-hover:text-primary">
                      {item.function}
                    </TableCell>
                    <TableCell className="text-muted-foreground transition-colors group-hover:text-foreground">
                      {item.description}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="link" asChild className="transition-transform group-hover:translate-x-1">
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
