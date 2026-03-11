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
    <div className="inline-block bg-primary text-primary-foreground py-2 px-8 rounded-md mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
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
          className="absolute inset-0 top-0 h-full bg-cover bg-center animate-in fade-in duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
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
                    <div className="overflow-hidden rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
                      <Image
                          src={webDevCoffee.imageUrl}
                          alt={webDevCoffee.description}
                          data-ai-hint={webDevCoffee.imageHint}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                )}
                {webDevChatbot && (
                     <div className="overflow-hidden rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
                       <Image
                          src={webDevChatbot.imageUrl}
                          alt={webDevChatbot.description}
                          data-ai-hint={webDevChatbot.imageHint}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                     </div>
                )}
            </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle>Projects</SectionTitle>
          <Card className="mt-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <CardContent className="p-8">
                <div className="flex justify-center mb-4 animate-bounce">
                    <DownArrowsIcon />
                </div>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">Genkit Powered</p>
                <h3 className="font-headline text-2xl font-bold mt-2">Cloud Based Third Party AI Platform</h3>
                <p className="mt-4 text-muted-foreground">
                    The core of the system is the AI chatbot, which acts as the main interface for users. This chatbot is designed to be helpful, and conversational.
                </p>
                <Button variant="link" asChild className="mt-4 transition-transform hover:translate-x-1">
                    <Link href="#">See documentation</Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-8 italic">Note: This is a back-end project with no user interface.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Excel Dashboards */}
      <section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Excel Dashboards</SectionTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[excelDash1, excelDash2, excelDash3, excelDash4].map((img, i) => img && (
                    <div key={img.id} className={`overflow-hidden rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${(i + 1) * 100} fill-mode-both`}>
                        <Image 
                            src={img.imageUrl} 
                            alt={img.description} 
                            data-ai-hint={img.imageHint} 
                            width={600} 
                            height={i < 2 ? 500 : 700} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* AutoCAD Tool Palette */}
      <section>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>AutoCAD Tool Palette</SectionTitle>
            <div className="mt-8 animate-in fade-in zoom-in duration-700">
                {autocadPalette && (
                    <Image
                        src={autocadPalette.imageUrl}
                        alt={autocadPalette.description}
                        data-ai-hint={autocadPalette.imageHint}
                        width={400}
                        height={600}
                        className="mx-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
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
                    <div className="aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center overflow-hidden animate-in fade-in slide-in-from-left-8 duration-700">
                        <Image
                            src={trainingMaterial.imageUrl}
                            alt={trainingMaterial.description}
                            data-ai-hint={trainingMaterial.imageHint}
                            width={1280}
                            height={720}
                            className="w-full h-auto object-contain rounded-lg transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                )}
                <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
                    <h3 className="font-headline text-2xl font-bold">AutoLISP Utilization & CAD Optimization</h3>
                    <p className="text-muted-foreground">
                        The purpose of this course is for you to learn how to create your own tools in AutoLISP. Using the Visual LISP Integrated Development Environment (VLIDE), you will learn how to write, test and debug your own code. This course will show you how to write code that interacts with the user, improving your workflow and efficiency.
                    </p>
                    <Button variant="outline" className="transition-all hover:bg-primary hover:text-primary-foreground">Enroll Now</Button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
