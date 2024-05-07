import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function InvestTray() {
  const cards = [
    {
      title: "Expert Guidance",
      description:
        "Our team of seasoned professionals is dedicated to providing you with personalized investment advice tailored to your financial goals and risk tolerance",
      image: "/etiquette.png",
    },
    {
      title: "In-Depth Research",
      description:
        "We conduct thorough research and analysis of the crypto market to identify promising investment opportunities and mitigate potential risks.",
      image: "/bitcoin.png",
    },
    {
      title: "Diversification Strategies",
      description:
        "We help you build a diversified crypto portfolio to optimize returns and minimize volatility, ensuring a robust investment strategy.",
      image: "/bar-chart.png",
    },
    {
      title: "Security and Trust",
      description:
        "Your security is our top priority. We implement industry-leading security measures to safeguard your assets and ensure peace of mind.",
      image: "/lock.png",
    },
    {
      title: "Educational Resources",
      description:
        "Whether you're a seasoned investor or new to the world of cryptocurrency, we offer a wealth of educational resources to empower you with the knowledge and skills needed to succeed in the crypto market",
      image: "/dollar.png",
    },
    {
      title: "Continuous Support",
      description:
        "Our dedicated support team is here to assist you every step of the way, providing timely insights, guidance, and assistance to help you achieve your investment objectives.",
      image: "/helpline.png",
    },
  ];

  return (
    <div className="bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10">
        <h1 className="text-3xl mx-auto text-center font-semibold">
          Why Invest in Crypto with Us?
        </h1>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
          {/* <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              General
            </Link>
            <Link href="#">Security</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link>
          </nav> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(({ title, description, image }, i) => (
              <Card key={i} x-chunk="dashboard-04-chunk-1">
                <CardHeader className="items-center">
                  <div className="p-2 bg-gradient-to-tr from-primary to-orange-500 backdrop-blur-sm rounded-full">
                    <div className="p-0.5 w-fit rounded-full bg-muted flex-1">
                      <Image
                        src={image}
                        alt={title}
                        width={50}
                        height={50}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-center">
                    {description}
                  </CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <form>
                    <Input placeholder="Store Name" />
                  </form>
                </CardContent> */}
                {/* <CardFooter className="border-t px-6 py-4 mt-auto">
                  <Button>Save</Button>
                </CardFooter> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
