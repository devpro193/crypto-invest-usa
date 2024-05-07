import Hero from "@/components/hero";
import InvestTray from "@/components/invest-tray";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Hero
        title="Invest Your Digital Currency Now!"
        desc="Experience the Potential of Crypto Investments and Take Control of Your Investments with Crypto Invest USA!"
        heroImage="https://images.unsplash.com/photo-1576520804567-b88e5dade12d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4">
        <InvestTray />
      </main>
    </div>
  );
}
