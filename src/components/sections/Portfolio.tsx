import Image from "next/image";
import { siteConfig } from "@/config/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-1">
          {siteConfig.projects.map((project, index) => {
            const image = imageMap.get(project.image);
            return (
              <Card key={project.title} className="overflow-hidden">
                <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`p-6 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <Badge variant="outline" className="mb-2">{project.category}</Badge>
                    <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground">Problem</h4>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Approach</h4>
                        <p>{project.approach}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Result</h4>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
