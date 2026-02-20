import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig } from "@/config/site";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedWork() {
  const featuredProjects = siteConfig.projects.slice(0, 3);
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how we've helped our clients transform their industries.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const image = imageMap.get(project.image);
            return (
              <Card key={project.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="aspect-video w-full rounded-md object-cover"
                    />
                  )}
                  <CardTitle className="font-headline pt-4">{project.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.problem}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/work">Explore All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
