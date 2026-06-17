import type { Metadata } from "next";
import { Lora, Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LenisProvider from "@/components/providers/lenis-provider";
import Preloader from "@/components/ui/preloader";
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 transition-colors duration-300 font-lora" suppressHydrationWarning>
        <Preloader />
        <LenisProvider>
          <Navbar />
          <main className="relative z-10 bg-white flex-grow shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

