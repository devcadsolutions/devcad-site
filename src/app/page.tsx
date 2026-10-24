import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesSummary from "@/components/sections/ServicesSummary";
import Skills from "@/components/sections/Skills";
import AboutTeaser from "@/components/sections/AboutTeaser";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ description: siteConfig.description, path: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesSummary />
      <Skills />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}
