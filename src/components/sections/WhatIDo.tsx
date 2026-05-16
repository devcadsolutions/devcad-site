import { Code2, Wrench, Globe } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "What I Build",
    intro: "Custom automation tools for BIM, CAD, and AEC delivery teams:",
    items: [
      { label: "Revit Add-ins", detail: "model checking, sheet workflows, geometry tools" },
      { label: "AutoCAD Automation", detail: "AutoLISP, .NET, batch processing, tool palettes" },
      { label: "APS / Cloud Workflows", detail: "PDF/DWG export, model derivative, ACC/Docs" },
      { label: "Desktop Software", detail: "WPF apps, technical estimators, internal tools" },
      { label: "Web Apps & Sites", detail: "portals, dashboards, client-facing applications" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Stack",
    intro: "Technologies I work with across the AEC automation stack:",
    items: [
      { label: "Revit / AutoCAD APIs", detail: "C#, .NET, WPF, Revit API, AutoCAD .NET" },
      { label: "Autodesk Platform Services", detail: "APS, Model Derivative, ACC/Docs, Forge" },
      { label: "Web & Backend", detail: "Next.js, TypeScript, React, Node.js, Tailwind" },
      { label: "Scripting", detail: "AutoLISP, Dynamo, Python (workflow automation)" },
      { label: "Data & Docs", detail: "Excel, Google Sheets, SOPs, rollout guides" },
    ],
  },
  {
    icon: Globe,
    title: "How I Work",
    intro: "Focused builds for real production workflows:",
    items: [
      { label: "Problem-first approach", detail: "understand the workflow before writing code" },
      { label: "Minimal, maintainable output", detail: "tools people will actually use long-term" },
      { label: "AEC-context delivery", detail: "built for Revit, AutoCAD, and BIM teams" },
      { label: "Remote & async-ready", detail: "clear scope, regular updates, clean handoff" },
    ],
  },
];

export default function WhatIDo() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl reveal-up">
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-heading mt-4">
            Built for BIM, CAD, and technical delivery teams.
          </h2>
          <p className="section-copy mt-4">
            Tools and workflows across the full AEC automation stack — from Revit add-ins and AutoCAD scripts to cloud-connected APS pipelines and web apps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 reveal-up" style={{ animationDelay: "100ms" }}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="section-shell flex flex-col gap-5 p-6 sm:p-7"
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-foreground">
                    {card.title}
                  </h3>
                </div>

                {/* Intro */}
                <p className="text-sm text-muted-foreground">{card.intro}</p>

                {/* Items */}
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-foreground">
                        {item.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
