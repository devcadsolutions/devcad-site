const ServiceIcon1 = () => (
    <svg className="h-20 w-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 55.5H57.6667V24.3333H15V55.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M57.6667 31.3333H65L51 17H15V24.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30.6667 45.6667L26.3333 41.3334L30.6667 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 37L46.3333 41.3334L42 45.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M59.1667 22.5C61.4745 22.5 63.3333 20.6411 63.3333 18.3333C63.3333 16.0255 61.4745 14.1667 59.1667 14.1667C56.8589 14.1667 55 16.0255 55 18.3333C55 20.6411 56.8589 22.5 59.1667 22.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M59.1666 14.1667V11.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M59.1666 25.3333V22.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M63.2916 18.3333H66.125" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M52.2083 18.3333H55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M61.9125 15.6042L63.8541 13.6625" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M54.4208 23.0958L52.4791 25.0375" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M61.9125 21.0625L63.8541 23.0042" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M54.4208 13.5708L52.4791 11.6292" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ServiceIcon2 = () => (
    <svg className="h-20 w-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3334 65V30H66.6667V65H23.3334Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3334 65H23.3334" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 15H23.3333V30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 65V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M66.6667 30V22.5C66.6667 18.3583 63.3084 15 59.1667 15H45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36.6667 43.3333V37.5H41.6667C44.4284 37.5 46.6667 39.7383 46.6667 42.5C46.6667 45.2617 44.4284 47.5 41.6667 47.5H36.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42.5 47.5L50 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ServiceIcon3 = () => (
    <svg className="h-20 w-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65 57.5V17.5H15V57.5H65Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32.5 67.5H47.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 57.5V67.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.5 50L32.5 40L42.5 45L52.5 32.5L60 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
  {
    icon: <ServiceIcon1 />,
    title: "CAD & Revit Automation",
    description: "Get good work done faster. Custom tools for AutoCAD, Revit, and other design software. Save time, reduce errors, and improve your workflow.",
    delay: "delay-100",
  },
  {
    icon: <ServiceIcon2 />,
    title: "Custom Revit API Add-ins",
    description: "Custom add-ins that plug into Revit and automate your firm's specific day-to-day tasks and workflows. Free up your team to focus on design.",
    delay: "delay-200",
  },
  {
    icon: <ServiceIcon3 />,
    title: "Website & Data Viz",
    description: "Web apps that visualize your data and tell your story. Custom dashboards, interactive charts, and maps that bring your data to life.",
    delay: "delay-300",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
      <div className="inline-block bg-primary text-primary-foreground py-2 px-8 rounded-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h2 className="font-headline text-3xl font-bold tracking-tight">
          {children}
        </h2>
      </div>
    );
}

export default function ServicesSummary() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTitle>Services</SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-foreground -translate-y-4 animate-in fade-in duration-700 delay-200 fill-mode-both">
            Custom CAD automation, Revit API tooling, and visual storytelling for design and fabrication teams.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both ${service.delay}`}
            >
              <div className="text-primary transition-transform duration-500 group-hover:scale-110">{service.icon}</div>
              <h3 className="mt-4 font-headline text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
