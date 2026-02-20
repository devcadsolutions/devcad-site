import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceDetails() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        {siteConfig.services.map((service, index) => (
          <div key={service.title} className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h3 className="font-headline text-2xl font-bold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Service Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold">Key Deliverables</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{service.details}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Typical Timeline</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{service.timeline}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tools & Technologies</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.tools.map(tool => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
