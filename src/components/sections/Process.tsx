import { Search, Wrench, Package, HeartHandshake } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const processSteps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "1. Discover",
    description: "We dive deep into your goals, challenges, and requirements to build a comprehensive project roadmap.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "2. Build",
    description: "Our team executes the plan with precision, through iterative cycles of design, development, and prototyping.",
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "3. Deliver",
    description: "We conduct rigorous testing and refinement to deliver a robust, market-ready solution that exceeds expectations.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "4. Support",
    description: "Our partnership continues with ongoing support, maintenance, and future-proofing your product.",
  },
];

export default function Process() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Proven Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A structured approach to guarantee quality and deliver results, every time.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <Card key={step.title} className="border-none bg-transparent shadow-none">
              <CardHeader className="items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <CardTitle className="font-headline pt-4">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
