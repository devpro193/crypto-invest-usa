import { Banner } from "@/components/banner";
import CryptoTable from "@/components/crypto-table";
import Hero from "@/components/og-hero";
import InvestTray from "@/components/invest-tray";
import Roadmap from "@/components/roadmap";
import Services from "@/components/services";
import { Metadata } from "next";
import Image from "next/image";
import Faq from "./faq";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "FAQ | CryptoInvestUSA",
  description: "The new way to invest your digital currency.",
  openGraph: {
    images: "/home.png",
    title: "FAQ | CryptoInvestUSA",
    description: "The new way to invest your digital currency.",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Hero
        title="Crypto Invest USA FAQ"
        desc="Welcome to Crypto Invest USA! Here are some frequently asked questions to help you navigate your cryptocurrency investment journey."
        heroImage="https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        link={{
          title: "Contact Us",
          href: "/contact",
        }}
      />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col max-md:gap-4 bg-muted/40 pt-2">
        <Faq />
        <Banner />
      </main>
    </div>
  );
}
