
import Hero from '@/components/sections/Hero';
import ServicesSummary from '@/components/sections/ServicesSummary';
import Process from '@/components/sections/Process';
import FeaturedWork from '@/components/sections/FeaturedWork';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <Process />
      <FeaturedWork />
    </>
  );
}
