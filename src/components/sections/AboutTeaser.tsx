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
  "const workflow = automate(aecProcess);",
  "if (manualSteps > 0) optimize();",
  "deploy({ reliable: true, maintainable: true });",
];

export default function AboutTeaser() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell grid items-center gap-12 px-6 py-10 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-5">
            <span className="eyebrow">Why Work With Me</span>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              Engineering-aware software, built for real production work.
            </h2>
            <p className="text-lg text-muted-foreground">
              I combine hands-on AEC workflow understanding with implementation skills, so the output is not just technically correct. It is usable, maintainable, and relevant to the teams doing the work.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">AEC Context</p>
                <p className="mt-2 text-sm text-muted-foreground">Built with drafting, BIM, and delivery realities in mind.</p>
              </div>
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">Clear Output</p>
                <p className="mt-2 text-sm text-muted-foreground">Focused on tools that reduce friction and improve consistency.</p>
              </div>
              <div className="soft-panel p-4">
                <p className="text-sm font-semibold text-foreground">Long-Term Value</p>
                <p className="mt-2 text-sm text-muted-foreground">Solutions designed to be easier to maintain and roll out.</p>
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/about">Read My Background</Link>
            </Button>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))] p-6 shadow-[0_28px_80px_-34px_rgba(15,23,42,0.72)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.16),transparent_32%)]"
              />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Programming Stack
                    </p>
                    <h3 className="mt-2 font-headline text-2xl font-bold text-white">
                      Software-first workflow thinking.
                    </h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100">
                    <Code2 className="h-7 w-7" />
                  </div>
                </div>

                <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="space-y-3 font-mono text-sm text-slate-200/90">
                    {codeLines.map((line, index) => (
                      <p key={line} className="flex gap-3">
                        <span className="select-none text-slate-500">{index + 1}</span>
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {programmingTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-sm">
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
                        <p className="text-xs text-slate-300">Production-ready automation</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
                    <Workflow className="h-5 w-5 text-slate-300" />
                    <p className="mt-3 text-sm font-semibold">Workflow Logic</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
                    <Braces className="h-5 w-5 text-slate-300" />
                    <p className="mt-3 text-sm font-semibold">Clean Structure</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
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
