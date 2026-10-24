import Image from "next/image";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/layout/PageIntro";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Free AutoLISP Routines",
  description:
    "Small AutoLISP routines for everyday AutoCAD drafting: copy-rotate, cursor rotate, join text, end pipe, and closing all drawings except the active one.",
  path: "/downloads",
});

const loadSteps = [
  "Save the .lsp file somewhere permanent, such as a shared CAD standards folder.",
  "In AutoCAD, type APPLOAD and press Enter.",
  "Browse to the file and click Load. Add it to the Startup Suite to load it in every session.",
  "Type the routine's command name at the command line to run it.",
];

function requestHref(name: string) {
  const subject = `AutoLISP request: ${name}`;
  const body = `Hi Justine,\n\nCould you send me the "${name}" AutoLISP routine?\n\nAutoCAD version:\n\nThanks,`;
  return `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function DownloadsPage() {
  return (
    <>
      <PageIntro eyebrow="Downloads" title="Free AutoLISP routines for everyday drafting.">
        <p>
          Small, single-purpose commands from my own AutoCAD toolkit. Useful on their own, and a good example of the
          kind of time-saving work I build into larger tool palettes and add-ins.
        </p>
      </PageIntro>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="soft-panel overflow-hidden">
              <h2 className="border-b border-border/70 px-5 py-4 font-headline text-xl font-semibold tracking-[-0.02em] text-foreground sm:px-6">
                Routines
              </h2>
              <ul className="divide-y divide-border/70">
                {siteConfig.downloads.map((item) => (
                  <li key={item.function} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{item.function}</h3>
                      <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                    {item.file ? (
                      <Button asChild variant="outline" className="shrink-0 rounded-full border-foreground bg-transparent hover:bg-foreground hover:text-background">
                        <a href={`${siteConfig.basePath}${item.file}`} download>
                          <Download className="h-4 w-4" aria-hidden="true" />
                          Download <span className="sr-only">{item.function}</span>
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" className="shrink-0 rounded-full border-foreground bg-transparent hover:bg-foreground hover:text-background">
                        <a href={requestHref(item.function)}>
                          <Mail className="h-4 w-4" aria-hidden="true" />
                          Request by email <span className="sr-only">: {item.function}</span>
                        </a>
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-xl border border-border/70 bg-white/60 p-5 sm:p-6" aria-labelledby="how-to-load">
              <h2 id="how-to-load" className="font-headline text-xl font-semibold tracking-[-0.02em] text-foreground">
                How to load an AutoLISP routine
              </h2>
              <ol className="mt-5 space-y-4">
                {loadSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-foreground/85">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Image
                src={`${siteConfig.basePath}/legacy/autolisp-load-dialog.png`}
                alt="AutoCAD Load/Unload Applications dialog with an AutoLISP file selected and the Load button highlighted"
                width={517}
                height={530}
                sizes="(min-width: 1024px) 360px, 90vw"
                className="mx-auto mt-6 h-auto w-full max-w-sm rounded-lg border border-border/70"
              />
            </aside>
          </div>

          <div className="mt-10 rounded-2xl border border-border/70 bg-white/60 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <p className="text-base leading-7 text-foreground/85">
              Need something bigger than a single command, like a full tool palette or a .NET add-in?
            </p>
            <Button asChild size="lg" className="mt-4 w-full shrink-0 rounded-full px-6 sm:mt-0 sm:w-auto">
              <Link href="/services">See services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
