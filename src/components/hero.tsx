"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: string;
}) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2600,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <HeroBanner
            title="Invest Your Digital Currency Now!"
            desc="Experience the Potential of Crypto Investments and Take Control of Your Investments with Crypto Invest USA!"
            heroImage="https://images.unsplash.com/photo-1576520804567-b88e5dade12d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </CarouselItem>
        <CarouselItem>
          <HeroBanner
            title="Start Investing Your Digitally Now!"
            desc="Unlock the Future of Finance with Crypto Investments and Discover the Power of Digital Assets with Crypto Invest USA"
            heroImage="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </CarouselItem>
        <CarouselItem>
          <HeroBanner
            title="Start Investing Now!"
            desc="Empower Your Wealth: Dive into Crypto Investments Today and Explore the World of Digital Assets with Crypto Invest USA "
            heroImage="https://images.unsplash.com/photo-1621501011941-c8ee93618c9a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </CarouselItem>
      </CarouselContent>
      <span className="absolute left-3 top-1/2">
        <CarouselPrevious />
      </span>
      <span className="absolute right-3 top-1/2">
        <CarouselNext />
      </span>
    </Carousel>
  );
}

function HeroBanner({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: string;
}) {
  return (
    <div
      className={`w-full grid relative overflow-hidden min-h-[400px] bg-background`}
    >
      <Image
        alt="community image"
        fill
        loader={() => heroImage}
        src={heroImage}
        className="object-cover opacity-10 pointer-events-none"
      />
      <div className="relative bg-gradient-to-t from-background from-0% to-transparent to-50%">
        <div className="sm:p-[12.5rem_2.5rem_6.75rem] max-sm:p-[12rem_1rem_2.75rem] m-auto max-w-7xl flex justify-between text-white">
          <section className="grid gap-5">
            <h1
              className={`max-w-xl max-sm:max-w-sm font-jakarta sm:text-[3.5rem] text-[3rem] font-extrabold text-primary leading-[3rem] text-balance`}
            >
              {title}
            </h1>

            <p className="max-w-[35rem] text-lg max-md:text-[1.05rem] max-md:leading-6">
              {desc}
            </p>

            <Link href={"/signup"}>
              <Button className="w-fit px-6 bg-primary sm:text-lg rounded-full bg-gradient-to-b from-primary to-orange-500 font-bold">
                Invest Now
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
