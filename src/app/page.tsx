
import Hero from '@/components/sections/Hero';
import ServicesSummary from '@/components/sections/ServicesSummary';
import Skills from '@/components/sections/Skills';
import FeaturedWork from '@/components/sections/FeaturedWork';
import CtaBand from '@/components/sections/CtaBand';
import AboutTeaser from '@/components/sections/AboutTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <FeaturedWork />
      <Skills />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}
