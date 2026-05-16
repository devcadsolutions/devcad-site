import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceDetails() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        {siteConfig.services.map((service, index) => (
          <div key={service.title} className="grid items-start gap-12 lg:grid-cols-3 reveal-up" style={{ animationDelay: `${index * 140}ms` }}>
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Service {index + 1}</p>
              <h3 className="mt-3 font-headline text-2xl font-bold transition-colors hover:text-primary">{service.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
            </div>
            <div className="lg:col-span-2">
              <Card className="soft-panel border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(79,62,46,0.45)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Scope</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground">Timeline</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{service.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Stack</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.tools.map(tool => (
                          <Badge key={tool} variant="secondary" className="transition-colors hover:bg-primary hover:text-primary-foreground">{tool}</Badge>
                        ))}
                      </div>
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
