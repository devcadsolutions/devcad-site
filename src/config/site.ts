export const siteConfig = {
  name: "DevCAD Solutions",
  url: "https://devcad.site",
  ogImage: "/og.jpg",
  description:
    "From concept to creation, we deliver precision engineering and development solutions that drive innovation and accelerate market entry.",
  links: {
    email: "devcadsolutions@gmail.com",
  },
  navLinks: [
    { href: "/about", label: "About Me" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Portfolio" },
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
      title: "Autonomous Inspection Drone",
      category: "System Integration",
      problem: "A client in the energy sector needed to automate the inspection of remote pipelines, which was costly and hazardous for human crews.",
      approach: "We designed and built a custom drone platform with integrated thermal and high-resolution cameras. A companion software suite was developed for autonomous navigation along pre-defined pipeline routes and automated fault detection using computer vision.",
      result: "The solution reduced inspection costs by 60% and eliminated safety risks. The automated system can cover 5x more distance in a day than a manual crew.",
      image: "project-1"
    },
    {
      title: "Smart Home Hub Firmware",
      category: "Software Development",
      problem: "A startup was developing a new smart home hub but lacked the embedded systems expertise to create stable and scalable firmware.",
      approach: "Our team developed a secure, OTA-updatable firmware from the ground up. We focused on low-power operation and created a modular architecture to easily support new third-party device integrations in the future.",
      result: "The client successfully launched their product on time, with firmware that was praised for its reliability and responsiveness. The modular design has since allowed them to add over 50 new devices without a major rewrite.",
      image: "project-2"
    },
    {
      title: "Next-Gen Prosthetic Hand",
      category: "CAD & 3D Modeling",
      problem: "An innovator in prosthetics had a novel mechanism for a more life-like robotic hand but needed to translate their sketches into a manufacturable and ergonomic design.",
      approach: "Using advanced surfacing and parametric modeling techniques, we developed a complete 3D CAD assembly of the hand. We performed stress analysis on critical components and used 3D printed prototypes to test ergonomics and grip patterns with users.",
      result: "The final design was lightweight, strong, and received overwhelmingly positive feedback from test users. The detailed manufacturing-ready CAD files enabled the client to secure a manufacturing partner and move into production.",
      image: "project-3"
    }
  ]
};

export type SiteConfig = typeof siteConfig;
