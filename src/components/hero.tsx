"use client";
import Image from "next/image";

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
              className={`max-w-xl max-sm:max-w-sm font-jakarta sm:text-[3.5rem] text-[3rem] font-extrabold text-primary leading-[3rem]`}
            >
              {title}
            </h1>

            <p className="max-w-[35rem] text-lg max-md:text-[1.05rem] max-md:leading-6">
              {desc}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
