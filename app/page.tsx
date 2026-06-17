import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Category from "@/components/home/category";
import Reveal from "@/components/home/reveal";
import MovingSection from "@/components/home/moveing";
import Products from "@/components/home/product";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Category />
      <Reveal />
      <MovingSection />
      <Products />
      <CTA />
    </main>
  );
}
