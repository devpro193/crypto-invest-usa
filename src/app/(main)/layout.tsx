import type { Metadata } from "next";
import Header from "@/components/header";

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
    <>
      <Header />
      {children}
    </>
  );
}
