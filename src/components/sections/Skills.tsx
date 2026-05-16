import Image from "next/image";

const programmingLanguages = [
    { name: "AutoLISP", logo: "/logos/programming/autolisp.png" },
    { name: "C#", logo: "/logos/programming/csharp.png" },
    { name: "JavaScript", logo: "/logos/programming/javascript.png" },
    { name: "Visual Basic", logo: "/logos/programming/visual-basic.png" },
    { name: "VBA", logo: "/logos/programming/vba.png" },
    { name: "Google Apps Script", logo: "/logos/programming/google-apps-script.png" },
    { name: "PML", logo: "/logos/programming/pml.png" },
];

const softwareProficiency = {
    engineering: [
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
    office: [
        { name: "Access", logo: "/logos/software/access.png" },
        { name: "Canva", logo: "/logos/software/canva.png" },
        { name: "Excel", logo: "/logos/software/excel.png" },
        { name: "PowerPoint", logo: "/logos/software/powerpoint.png" },
        { name: "Photoshop", logo: "/logos/software/photoshop.png" },
        { name: "Word", logo: "/logos/software/word.png" },
    ]
}

function IconCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="flex h-36 w-full max-w-[9rem] flex-col items-center justify-start">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-lg">
          <Image
            src={logo}
            alt={name}
            width={96}
            height={96}
            className="max-h-full w-full object-contain"
          />
        </div>
        <span className="mt-4 text-center text-sm font-medium leading-tight text-muted-foreground transition-all duration-300 ease-out group-hover:translate-y-1">
          {name}
        </span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block bg-primary text-primary-foreground py-2 px-8 rounded-md mb-8">
      <h2 className="font-headline text-3xl font-bold">
        {children}
      </h2>
    </div>
  );
}

function ArrowDown() {
    return (
        <div className="my-8 flex justify-center">
            <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0V40M12 40L2 30M12 40L22 30" stroke="hsl(var(--muted-foreground))" strokeWidth="2"/>
            </svg>
        </div>
    )
}

export default function Skills() {
  return (
    <>
    <section>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle>Programming Language</SectionTitle>
        <div className="mt-8 grid grid-cols-2 gap-4 items-start justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {programmingLanguages.map(lang => (
                <IconCard key={lang.name} name={lang.name} logo={lang.logo} />
            ))}
        </div>
      </div>
    </section>
    <ArrowDown />
     <section className="py-0">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle>Software Proficiency</SectionTitle>
        <div className="mt-8">
            <h3 className="font-headline text-xl font-semibold mb-4">Engineering and Architecture</h3>
             <div className="grid grid-cols-2 gap-4 items-start justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {softwareProficiency.engineering.map(sw => (
                    <IconCard key={sw.name} name={sw.name} logo={sw.logo} />
                ))}
            </div>
        </div>
        <div className="mt-12">
            <h3 className="font-headline text-xl font-semibold mb-4">Office Suite and others</h3>
             <div className="grid grid-cols-2 gap-4 items-start justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {softwareProficiency.office.map(sw => (
                    <IconCard key={sw.name} name={sw.name} logo={sw.logo} />
                ))}
            </div>
        </div>
      </div>
    </section>
    <ArrowDown />
    </>
  );
}
