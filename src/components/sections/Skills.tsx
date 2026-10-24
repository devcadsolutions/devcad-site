import Image from "next/image";
import { siteConfig } from "@/config/site";

type Tool = { name: string; logo: string };

const toolGroups: { title: string; tools: Tool[] }[] = [
  {
    title: "Programming Languages",
    tools: [
      { name: "AutoLISP", logo: "/logos/programming/autolisp.png" },
      { name: "C#", logo: "/logos/programming/csharp.png" },
      { name: "JavaScript", logo: "/logos/programming/javascript.png" },
      { name: "Visual Basic", logo: "/logos/programming/visual-basic.png" },
      { name: "VBA", logo: "/logos/programming/vba.png" },
      { name: "Google Apps Script", logo: "/logos/programming/google-apps-script.png" },
      { name: "PML", logo: "/logos/programming/pml.png" },
    ],
  },
  {
    title: "Engineering and Architecture Software",
    tools: [
      { name: "Advance Steel", logo: "/logos/software/advance-steel.png" },
      { name: "AutoCAD", logo: "/logos/software/autocad.png" },
      { name: "AVEVA Everything", logo: "/logos/software/aveva-everything.png" },
      { name: "CubiCost", logo: "/logos/software/cubicost.png" },
      { name: "Mathcad", logo: "/logos/software/mathcad.png" },
      { name: "Navisworks", logo: "/logos/software/navisworks.png" },
      { name: "PDMS", logo: "/logos/software/pdms.png" },
      { name: "Revit", logo: "/logos/software/revit.png" },
      { name: "SketchUp", logo: "/logos/software/sketchup.png" },
    ],
  },
  {
    title: "Documentation, Estimating, and Handoff Tools",
    tools: [
      { name: "Access", logo: "/logos/software/access.png" },
      { name: "Canva", logo: "/logos/software/canva.png" },
      { name: "Excel", logo: "/logos/software/excel.png" },
      { name: "PowerPoint", logo: "/logos/software/powerpoint.png" },
      { name: "Photoshop", logo: "/logos/software/photoshop.png" },
      { name: "Word", logo: "/logos/software/word.png" },
    ],
  },
];

function ToolTile({ name, logo }: Tool) {
  return (
    <li className="flex flex-col items-center gap-2 rounded-lg px-1 py-2 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-white/80 p-1.5 shadow-sm">
        <Image
          src={`${siteConfig.basePath}${logo}`}
          alt=""
          width={40}
          height={40}
          className="h-9 w-9 object-contain"
        />
      </div>
      <span className="text-xs font-medium leading-tight text-muted-foreground">{name}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center">
          <span className="eyebrow">Tooling Context</span>
          <h2 className="section-heading">The stack is only useful when it fits the workflow.</h2>
          <p className="section-copy">
            These are the languages and platforms I use to turn CAD/BIM production logic into tools people can maintain, explain, and roll out.
          </p>
        </div>

        <div className="soft-panel divide-y divide-border/60 px-4 sm:px-6">
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 py-5 lg:grid-cols-[14rem_1fr] lg:items-center lg:gap-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">{group.title}</h3>
              <ul className="grid grid-cols-4 gap-x-2 gap-y-3 sm:grid-cols-5 lg:grid-cols-9">
                {group.tools.map((tool) => (
                  <ToolTile key={tool.name} {...tool} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
