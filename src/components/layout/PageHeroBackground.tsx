import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type PageHeroBackgroundProps = {
  opacity?: string;
  className?: string;
};

export default function PageHeroBackground({ opacity = "75", className }: PageHeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 bg-cover bg-center reveal-up", className)}
      style={{ backgroundImage: `url('${siteConfig.basePath}/legacy/page-header.jpg')` }}
    >
      <div className={`absolute inset-0 bg-background/${opacity}`} />
    </div>
  );
}
