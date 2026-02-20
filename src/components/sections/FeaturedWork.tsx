import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block bg-primary text-primary-foreground py-2 px-8 rounded-md mb-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}

export default function FeaturedWork() {
  const webImg1 = PlaceHolderImages.find(img => img.id === 'website-dev-1');
  const webImg2 = PlaceHolderImages.find(img => img.id === 'website-dev-2');
  const appImg1 = PlaceHolderImages.find(img => img.id === 'app-dev-1');
  const appImg2 = PlaceHolderImages.find(img => img.id === 'app-dev-2');

  return (
    <>
      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Website Development</SectionTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    {webImg1 && (
                         <Image
                            src={webImg1.imageUrl}
                            alt={webImg1.description}
                            data-ai-hint={webImg1.imageHint}
                            width={400}
                            height={600}
                            className="w-full rounded-lg object-cover shadow-lg"
                        />
                    )}
                </div>
                 <div>
                    {webImg2 && (
                         <Image
                            src={webImg2.imageUrl}
                            alt={webImg2.description}
                            data-ai-hint={webImg2.imageHint}
                            width={400}
                            height={600}
                            className="w-full rounded-lg object-cover shadow-lg"
                        />
                    )}
                </div>
            </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>App Development</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-8">
                 {appImg1 && (
                    <Image
                        src={appImg1.imageUrl}
                        alt={appImg1.description}
                        data-ai-hint={appImg1.imageHint}
                        width={1200}
                        height={800}
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                )}
            </div>
             <div className="mt-8 text-center">
              <Button asChild size="lg" variant="outline" className="border-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
                <Link href="/work">Try the App</Link>
              </Button>
            </div>
        </div>
      </section>
    </>
  );
}
