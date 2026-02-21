
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the portfolio of DevCAD Solutions, showcasing projects in website development, AI platforms, Excel dashboards, and AutoCAD customization.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block bg-primary text-primary-foreground py-2 px-8 rounded-md mb-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}

const DownArrowsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13L12 18L17 13" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 6L12 11L17 6" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export default function WorkPage() {
  const webDevCoffee = PlaceHolderImages.find(img => img.id === 'website-dev-1');
  const webDevChatbot = PlaceHolderImages.find(img => img.id === 'website-dev-2');
  
  const excelDash1 = PlaceHolderImages.find(img => img.id === 'excel-dash-1');
  const excelDash2 = PlaceHolderImages.find(img => img.id === 'excel-dash-2');
  const excelDash3 = PlaceHolderImages.find(img => img.id === 'excel-dash-3');
  const excelDash4 = PlaceHolderImages.find(img => img.id === 'excel-dash-4');

  const autocadPalette = PlaceHolderImages.find(img => img.id === 'autocad-palette');
  const trainingMaterial = PlaceHolderImages.find(img => img.id === 'training-material');

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
      
      {/* Website Development */}
      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Website Development</SectionTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {webDevCoffee && (
                    <Image
                        src={webDevCoffee.imageUrl}
                        alt={webDevCoffee.description}
                        data-ai-hint={webDevCoffee.imageHint}
                        width={600}
                        height={400}
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                )}
                {webDevChatbot && (
                     <Image
                        src={webDevChatbot.imageUrl}
                        alt={webDevChatbot.description}
                        data-ai-hint={webDevChatbot.imageHint}
                        width={600}
                        height={400}
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                )}
            </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle>Projects</SectionTitle>
          <Card className="mt-8 text-center shadow-lg">
            <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                    <DownArrowsIcon />
                </div>
                <p className="text-sm text-muted-foreground">Genkit</p>
                <h3 className="font-headline text-2xl font-bold mt-2">Cloud Based Third Party AI Platform</h3>
                <p className="mt-4 text-muted-foreground">
                    The core of the system is the AI chatbot, which acts as the main interface for users. This chatbot is designed to be helpful, and conversational.
                </p>
                <Button variant="link" asChild className="mt-4">
                    <Link href="#">See documentation</Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-8">Note: This is a back-end project with no user interface.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Excel Dashboards */}
      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Excel Dashboards</SectionTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {excelDash1 && <Image src={excelDash1.imageUrl} alt={excelDash1.description} data-ai-hint={excelDash1.imageHint} width={600} height={500} className="w-full rounded-lg object-cover shadow-lg" />}
                {excelDash2 && <Image src={excelDash2.imageUrl} alt={excelDash2.description} data-ai-hint={excelDash2.imageHint} width={600} height={500} className="w-full rounded-lg object-cover shadow-lg" />}
                {excelDash3 && <Image src={excelDash3.imageUrl} alt={excelDash3.description} data-ai-hint={excelDash3.imageHint} width={600} height={700} className="w-full rounded-lg object-cover shadow-lg" />}
                {excelDash4 && <Image src={excelDash4.imageUrl} alt={excelDash4.description} data-ai-hint={excelDash4.imageHint} width={600} height={700} className="w-full rounded-lg object-cover shadow-lg" />}
            </div>
        </div>
      </section>
      
      {/* AutoCAD Tool Palette */}
      <section>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>AutoCAD Tool Palette</SectionTitle>
            <div className="mt-8">
                {autocadPalette && (
                    <Image
                        src={autocadPalette.imageUrl}
                        alt={autocadPalette.description}
                        data-ai-hint={autocadPalette.imageHint}
                        width={400}
                        height={600}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                )}
            </div>
        </div>
      </section>

      {/* Training Materials */}
      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <SectionTitle>Training Materials</SectionTitle>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                {trainingMaterial && (
                    <div className="aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center">
                        <Image
                            src={trainingMaterial.imageUrl}
                            alt={trainingMaterial.description}
                            data-ai-hint={trainingMaterial.imageHint}
                            width={1280}
                            height={720}
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                )}
                <div className="space-y-4">
                    <h3 className="font-headline text-2xl font-bold">AutoLISP Utilization & CAD Optimization</h3>
                    <p className="text-muted-foreground">
                        The purpose of this course is for you to learn how to create your own tools in AutoLISP. Using the Visual LISP Integrated Development Environment (VLIDE), you will learn how to write, test and debug your own code. This course will show you how to write code that interacts with the user, improving your workflow and efficiency.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
