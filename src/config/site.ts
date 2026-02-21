export const siteConfig = {
  name: "DevCAD Solutions",
  url: "https://devcad.site",
  ogImage: "/og.jpg",
  description:
    "Improving lives - one code at a time",
  links: {
    email: "devcadsolutions@gmail.com",
  },
  navLinks: [
    { href: "/about", label: "About Me" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Portfolio/Webapps" },
    { href: "/downloads", label: "Downloads" },
  ],
  services: [
    {
      title: "CAD & 3D Modeling",
      description: "Precision-driven design for manufacturing, simulation, and visualization.",
      details: "Our experts utilize state-of-the-art CAD software to create detailed 3D models and technical drawings. We focus on design for manufacturability (DFM) to ensure your concepts are ready for production. Deliverables include 3D part/assembly files, 2D manufacturing drawings, and photorealistic renderings.",
      timeline: "2-6 Weeks",
      tools: ["SolidWorks", "AutoCAD", "Fusion 360", "Keyshot"]
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions to control, analyze, and integrate your hardware.",
      details: "We build robust software applications, from embedded firmware for microcontrollers to desktop and web apps for data analysis and control. Our solutions are tailored to your specific hardware and operational needs, ensuring seamless integration and reliable performance.",
      timeline: "8-16 Weeks",
      tools: ["C++", "Python", "React", "Docker", "PlatformIO"]
    },
    {
      title: "Prototyping & Fabrication",
      description: "Rapidly turning digital designs into tangible, functional prototypes.",
      details: "Leveraging 3D printing, CNC machining, and electronics assembly, we create high-fidelity prototypes for testing, validation, and investor demos. This iterative process allows for rapid design refinement and significantly reduces time-to-market.",
      timeline: "1-4 Weeks",
      tools: ["FDM/SLA 3D Printing", "3-Axis CNC", "PCB Fabrication"]
    },
    {
      title: "System Integration",
      description: "Ensuring all mechanical, electronic, and software components work in harmony.",
      details: "We specialize in the complex task of system integration, combining disparate subsystems into a single, cohesive, and functional product. Our process includes interface design, communication protocols, and rigorous system-level testing to guarantee reliability.",
      timeline: "4-12 Weeks",
      tools: ["LabVIEW", "ROS", "PLC Programming", "Wireshark"]
    }
  ],
  projects: [
    {
      title: "Bobbie (Color Analysis)",
      category: "Web Application",
      problem: "The color analysis tool helps you discover your ideal color palette. Simply upload a clear photo of yourself, and the AI will analyze your skin's undertones and features to determine your 'color season.'",
      approach: "You'll receive a personalized report with your most flattering colors, shades to avoid, and makeup recommendations. You can even download a shareable infographic of your results.",
      result: "A personalized, shareable report, empowering users to make confident style choices.",
      image: "bobby-app-1"
    }
  ]
};

export type SiteConfig = typeof siteConfig;
