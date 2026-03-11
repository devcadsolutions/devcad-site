import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DevCAD Solutions. Let's discuss your project and how we can help you achieve your goals.",
};

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="#0077B5">
      <path d="M218.12,218.12H181.69V156.35c0-14.83-.27-33.91-20.66-33.91-20.69,0-23.86,16.15-23.86,32.83v62.85H100.74V100.74h35.49v16.28h.51a38.86,38.86,0,0,1,35-19.26c37.4,0,44.28,24.62,44.28,56.63Z" strokeWidth="0" />
      <path d="M57,79.43a22,22,0,1,1,22-22A22,22,0,0,1,57,79.43Z" strokeWidth="0" />
      <rect x="37.83" y="100.74" width="38.34" height="117.38" strokeWidth="0"/>
      <path d="M237.26,0H18.74A18.74,18.74,0,0,0,0,18.74V237.26A18.74,18.74,0,0,0,18.74,256H237.26A18.74,18.74,0,0,0,256,237.26V18.74A18.74,18.74,0,0,0,237.26,0ZM232,232H24a8,8,0,0,1-8-8V24a8,8,0,0,1,8-8H232a8,8,0,0,1,8,8V224A8,8,0,0,1,232,232Z" strokeWidth="0" fillRule="nonzero" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="#25D366">
        <path d="M167.59,141.44a13.33,13.33,0,0,1,4.3,3.71,2.54,2.54,0,0,1,.18,3.95,23.36,23.36,0,0,1-4,3.58,11.89,11.89,0,0,1-5.46,1.48,15.1,15.1,0,0,1-6.2-1.3,42.18,42.18,0,0,1-16.09-9.15,48.24,48.24,0,0,1-12.72-14.73,3,3,0,0,1-.13-3.21l.1-.15a2.53,2.53,0,0,1,2.15-1.45l.13,0a3,3,0,0,1,2.28.94l.11.12a8.08,8.08,0,0,0,4.78,2.78,1.7,1.7,0,0,0,1.83-1.14l.05-.15a1.73,1.73,0,0,0-1-2.09,10,10,0,0,1-3.66-2.2,7.39,7.39,0,0,1-2.18-5.78,8.47,8.47,0,0,1,2.08-6.15l.1-.12A7.44,7.44,0,0,1,128,94.2a7.35,7.35,0,0,1,6.09,2.83l.1.13a8.33,8.33,0,0,1,2,5.53,1.72,1.72,0,0,0,2.2,1.52,1.69,1.69,0,0,0,1.3-1.87,11.82,11.82,0,0,0-2.8-8l-.13-.15a11.9,11.9,0,0,0-9.84-4.5h-.11a12.82,12.82,0,0,0-10.22,4.45l-.11.14a13.88,13.88,0,0,0-3.32,10.66,3.67,3.67,0,0,0,.41,1.79l0,.11,0,.09c.47,1.21.61,2.23.11,3.48l-.09.2c-.44,1.06-.51,2-.15,3.12l.1.27c1.47,4.3,3.7,8.23,6.71,11.75s6.87,6.34,10.76,8.51c1.31.73,2.83,1.3,4.42,1.71a17.3,17.3,0,0,0,8.46.22,14,14,0,0,0,7.27-3.2l.2-.16a18.3,18.3,0,0,0,4.86-5.41,2.54,2.54,0,0,1,3.49-1.5,13.33,13.33,0,0,1,4.3,3.71Z" strokeWidth="0"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM128,224a96,96,0,1,1,96-96A96.11,96.11,0,0,1,128,224Zm69-52.53-7-2.34a8,8,0,0,0-7.85,1.71,48.24,48.24,0,0,1-20.06,14.65l-.3.12-6.52,2.18,2.19-6.31.12-.3a48.59,48.59,0,0,1,1.1-23.7,8,8,0,0,0-2.58-7.3l-20-20.15a8,8,0,0,0-11.83,0,48.33,48.33,0,0,1-14.7,19.86,8,8,0,0,0-2,7.74l2.36,7a8,8,0,0,0-5.2,5.4,63.18,63.18,0,0,0,32,0,8,8,0,0,0,5.22-5.4l2.36-7A8,8,0,0,0,197,171.47Z" strokeWidth="0"/>
    </svg>
);

const GmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
        <path fill="#FFFFFF" d="m12 13-8-5h16z"/>
        <path fill="#EA4335" d="M4 6l8 5 8-5v2l-8 5-8-5z"/>
        <path fill="#34A853" d="M20 18H4V8l8 5 8-5v10z"/>
        <path fill="#FBBC05" d="m4 18 8-5 8 5H4z"/>
    </svg>
);

export default function ContactPage() {
  return (
    <>
      <header className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div
            aria-hidden="true"
            className="absolute inset-0 top-0 h-full bg-cover bg-center animate-in fade-in duration-1000"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                    DevCAD Solutions
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                    Improving lives - one code at a time
                </p>
            </div>
        </div>
      </header>

       <section>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out through any of the platforms below.
            </p>
            <div className="mt-12 flex justify-center gap-6 sm:gap-8">
                <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-2 group" title="LinkedIn">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <LinkedInIcon />
                    </div>
                    <span>LinkedIn</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-2 group" title="WhatsApp">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <WhatsAppIcon />
                    </div>
                    <span>WhatsApp</span>
                </a>
                <a href={`mailto:${siteConfig.links.email}`} className="flex flex-col items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-2 group" title="Email">
                   <div className="transition-transform duration-300 group-hover:scale-110">
                     <GmailIcon />
                   </div>
                   <span>Email</span>
                </a>
            </div>
             <div className="mt-12 border-t pt-8 text-center text-muted-foreground animate-in fade-in duration-1000 delay-500 fill-mode-both">
                <p className="font-semibold text-foreground">{siteConfig.links.email}</p>
                <p>Parañaque City, Philippines</p>
            </div>
        </div>
       </section>
    </>
  );
}
