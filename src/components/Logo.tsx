import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const Logo = ({ className }: { className?: string }) => (
  <span className={cn("font-headline text-lg font-bold tracking-tight", className)}>
    {siteConfig.name}
  </span>
);

export default Logo;
