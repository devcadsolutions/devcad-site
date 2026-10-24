import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

/**
 * Shared page header used by every inner page so titles, spacing and hierarchy
 * match the home and contact pages (no photo banners).
 */
export default function PageIntro({ eyebrow, title, children, actions, className }: PageIntroProps) {
  return (
    <section className={cn("pb-8 pt-12 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20", className)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5 reveal-up">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-headline text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">{title}</h1>
          {children && <div className="section-copy space-y-4">{children}</div>}
          {actions && <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
