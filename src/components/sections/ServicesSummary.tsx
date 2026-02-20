import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesSummary() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We provide end-to-end solutions to bring your most complex ideas to life.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => (
            <Card key={service.title} className="flex flex-col transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                 <Button variant="link" asChild className="p-0 h-auto">
                   <Link href="/services">
                     Learn More <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
