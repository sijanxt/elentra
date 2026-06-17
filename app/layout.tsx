import type { Metadata } from "next";
import { Lora, Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LenisProvider from "@/components/providers/lenis-provider";
import Preloader from "@/components/ui/preloader";
import SoundToggle from "@/components/ui/sound-toggle";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elentra Home Appliances | German-Engineered Luxury",
  description: "Elevate your home with Elentra's premium, design-forward smart home appliances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorant.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 transition-colors duration-300 font-lora">
        <Preloader />
        <LenisProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LenisProvider>
        <SoundToggle />
      </body>
    </html>
  );
}

