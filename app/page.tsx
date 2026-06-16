import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Category from "@/components/home/category";
import CTA from "@/components/home/cta";
import Products from "@/components/home/product";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Category />
      <Products />
      <CTA />
    </main>
  );
}
