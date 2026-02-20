import Image from "next/image";

const programmingLanguages = [
    { name: "LISP", logo: "https://picsum.photos/seed/lisp/100/100" },
    { name: "C#", logo: "https://picsum.photos/seed/csharp/100/100" },
    { name: "JavaScript", logo: "https://picsum.photos/seed/js/100/100" },
    { name: "Visual Basic", logo: "https://picsum.photos/seed/vb/100/100" },
    { name: "Python", logo: "https://picsum.photos/seed/python/100/100" },
    { name: "Google Apps Script", logo: "https://picsum.photos/seed/gas/100/100" },
    { name: "AutoHotkey", logo: "https://picsum.photos/seed/ahk/100/100" },
];

const softwareProficiency = {
    engineering: [
        { name: "AutoCAD", logo: "https://picsum.photos/seed/autocad/100/100" },
        { name: "Revit", logo: "https://picsum.photos/seed/revit/100/100" },
        { name: "Civil 3D", logo: "https://picsum.photos/seed/civil3d/100/100" },
        { name: "AutoCAD ADS", logo: "https://picsum.photos/seed/ads/100/100" },
        { name: "Navisworks", logo: "https://picsum.photos/seed/navis/100/100" },
        { name: "AVEVA", logo: "https://picsum.photos/seed/aveva/100/100" },
        { name: "Solidworks", logo: "https://picsum.photos/seed/solidworks/100/100" },
        { name: "SketchUp", logo: "https://picsum.photos/seed/sketchup/100/100" },
        { name: "Revit Families", logo: "https://picsum.photos/seed/revitfam/100/100" },
    ],
    office: [
        { name: "Word", logo: "https://picsum.photos/seed/word/100/100" },
        { name: "Excel", logo: "https://picsum.photos/seed/excel/100/100" },
        { name: "PowerPoint", logo: "https://picsum.photos/seed/ppt/100/100" },
        { name: "Access", logo: "https://picsum.photos/seed/access/100/100" },
        { name: "Canva", logo: "https://picsum.photos/seed/canva/100/100" },
        { name: "Photoshop", logo: "https://picsum.photos/seed/ps/100/100" },
    ]
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block bg-primary text-primary-foreground py-2 px-8 rounded-md mb-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight">
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
        <div className="mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
            {programmingLanguages.map(lang => (
                <div key={lang.name} className="flex flex-col items-center gap-2">
                    <Image src={lang.logo} alt={lang.name} width={64} height={64} className="rounded-md object-contain" />
                </div>
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
             <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center justify-center">
                {softwareProficiency.engineering.map(sw => (
                    <div key={sw.name} className="flex flex-col items-center gap-2">
                        <Image src={sw.logo} alt={sw.name} width={64} height={64} className="rounded-md object-contain" />
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12">
            <h3 className="font-headline text-xl font-semibold mb-4">Office Suite and others</h3>
             <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 items-center justify-center">
                {softwareProficiency.office.map(sw => (
                    <div key={sw.name} className="flex flex-col items-center gap-2">
                        <Image src={sw.logo} alt={sw.name} width={64} height={64} className="rounded-md object-contain" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
    <ArrowDown />
    </>
  );
}
