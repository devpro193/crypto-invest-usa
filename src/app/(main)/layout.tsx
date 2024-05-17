import type { Metadata } from "next";
import Header from "@/components/header";
import FloatBtn from "./float";
import Scroll from "@/components/scroll";

export const metadata: Metadata = {
  title: "Crypto Invest USA",
  description: "The new way to invest your digital currency.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <FloatBtn />
      <Scroll />
    </div>
  );
}
