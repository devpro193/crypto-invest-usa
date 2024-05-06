import Hero from "@/components/hero";
import Settings from "@/components/settings";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Hero
        title="Inverst Your Crypto Now!"
        desc="Experience the Potential of Crypto Investments and Take Control of Your Investments with Crypto Invest USA!"
        heroImage="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Settings />
    </div>
  );
}
