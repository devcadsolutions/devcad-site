import Image from "next/image";
import Link from "next/link";
import { Braces, Code2, Cpu, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const programmingTools = [
  { name: "C#", logo: "/logos/programming/csharp.png" },
  { name: "JavaScript", logo: "/logos/programming/javascript.png" },
  { name: "AutoLISP", logo: "/logos/programming/autolisp.png" },
  { name: "VBA", logo: "/logos/programming/vba.png" },
];

const codeLines = [
  "observe(workflow.beforeCode);",
  "buildTool(repeatedPain);",
  "document({ setup, edgeCases, rollout });",
];

export default function AboutTeaser() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell grid items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-16">
          <div className="space-y-6">
            <span className="eyebrow">Why Work With Me</span>
            <h2 className="section-heading">
              Software built close to drawings, models, standards, and deadlines.
            </h2>
            <p className="section-copy">
              DevCAD sits between AEC production and software development. The work is not only about code. It is about understanding how drawings are issued, how Revit models get messy, how CAD standards drift, and how internal tools need to fit into real delivery habits.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">AEC Context</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Built with drafting, BIM, and delivery realities in mind.</p>
              </div>
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">Usable Tools</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Focused dialogs, clear buttons, useful defaults, and fewer confusing choices.</p>
              </div>
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">Rollout Support</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Setup notes, edge cases, and handoff material so tools keep being used.</p>
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/about">Read My Background</Link>
            </Button>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-primary p-6 shadow-[0_28px_72px_-40px_rgba(62,46,33,0.62)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_32%)]"
              />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Production Tooling
                    </p>
                    <h3 className="mt-2 font-headline text-2xl font-semibold tracking-[-0.03em] text-white">
                      Workflow-first software thinking.
                    </h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100">
                    <Code2 className="h-7 w-7" />
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/25" />
                    <span className="h-3 w-3 rounded-full bg-white/25" />
                    <span className="h-3 w-3 rounded-full bg-white/25" />
                  </div>
                  <div className="space-y-3 font-mono text-sm text-slate-200/90">
                    {codeLines.map((line, index) => (
                    <p key={line} className="flex gap-4">
                        <span className="select-none text-slate-500">{index + 1}</span>
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {programmingTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/95 p-2 shadow-sm">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{tool.name}</p>
                        <p className="text-xs text-slate-300">Used for practical internal tools</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
                    <Workflow className="h-5 w-5 text-slate-300" />
                    <p className="mt-3 text-sm font-semibold">Workflow Logic</p>
                  </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
                    <Braces className="h-5 w-5 text-slate-300" />
                    <p className="mt-3 text-sm font-semibold">Clean Structure</p>
                  </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
                    <Cpu className="h-5 w-5 text-slate-300" />
                    <p className="mt-3 text-sm font-semibold">Tooling Mindset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
