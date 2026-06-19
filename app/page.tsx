import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Reveal from "@/components/home/reveal";
import MovingSection from "@/components/home/moveing";
import Products from "@/components/home/product";
import NewItems from "@/components/home/newitem";
import CTA from "@/components/home/cta";
import Video  from "@/components/home/video"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features  />
      <NewItems />
      <Video />
      <Reveal />
      {/* <MovingSection /> */}
      <Products />
      <CTA />
    </main>
  );
}
