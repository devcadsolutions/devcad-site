import Hero from '@/components/sections/Hero';
import ServicesSummary from '@/components/sections/ServicesSummary';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Process from '@/components/sections/Process';
import AboutTeaser from '@/components/sections/AboutTeaser';
import CtaBand from '@/components/sections/CtaBand';
import Faq from '@/components/sections/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <FeaturedWork />
      <Process />
      <AboutTeaser />
      <CtaBand />
      <Faq />
    </>
  );
}
