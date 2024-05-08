"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Roadmap() {
  return (
    <div className="bg-background p-4 md:p-10">
      <div className="mx-auto flex flex-col w-full max-w-6xl gap-10">
        <div className="grid gap-2 mx-auto text-center max-w-xl">
          <h2 className="text-4xl max-sm:text-3xl font-semibold">
            The Road Map To Success
          </h2>
          <p className="text-sm text-muted-foreground">
            Our experts are dedicated to guiding you through the exciting world
            of crypto investment. Here’s your comprehensive roadmap to success
            in navigating the crypto investment process:
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl sm:max-w-5xl gap-6">
          {/* Slider */}
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="max-sm:basis-4/5 basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-muted/40">
                      <CardHeader className="flex gap-2 items-center">
                        <div className="p-1.5 bg-gradient-to-tr from-yellow-600 to-orange-600 backdrop-blur-sm rounded-full flex items-center gap-2 shrink-0 max-w-72 mx-auto">
                          <div className="p-5 py-2 rounded-full text-3xl bg-muted flex-auto shrink-0 grow">
                            {index + 1}
                          </div>
                          <CardTitle className="line-clamp-2 text-xl leading-5">
                            {"Lorem ipsum dolor sit. dasdasas dsa das d"}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Corrupti, odit quos, laborum deserunt officiis
                          magnam harum earum alias aliquam ea qui et nobis
                          repellat mollitia pariatur maxime expedita quibusdam
                          eum.
                        </CardDescription>
                      </CardHeader>
                      {/* <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent> */}
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
