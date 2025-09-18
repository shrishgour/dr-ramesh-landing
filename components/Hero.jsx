import { TrendingUp, Users, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Hero = () => {
  return (
    <section className="h-full w-screen overflow-hidden py-32">
      <div className="container mx-auto border-t border-b border-dashed">
        <div className="relative flex w-full max-w-5xl flex-col justify-start border border-t-0 border-dashed px-5 py-12 md:items-center md:justify-center lg:mx-auto">
          <p className="text-muted-foreground flex items-center gap-2 gap-3 text-sm">
            <span className="inline-block size-2 rounded bg-green-500" />
            NEW BLOCKS IN 10 DAYS
          </p>
          <div className="mt-3 flex w-full max-w-xl flex-col gap-4 text-5xl font-semibold tracking-tighter md:text-center md:text-6xl lg:text-left lg:text-7xl">
            <h1 className="z-10 inline">Say Goodbye to</h1>
            <ContainerTextFlip
              className="text-4xl font-semibold tracking-tighter md:left-1/2 md:-translate-x-1/2 md:text-5xl lg:left-auto lg:translate-x-0 lg:text-7xl"
              words={["Kidney Stones", "Fatty Liver", "Migrain", "Thyroid"]}
            />
            <h1 className="z-10 inline md:mr-3">Without Surgery</h1>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed py-20">
          <div className="w-full max-w-2xl space-y-5 md:text-center">
            <p className="text-muted-foreground px-5 lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,{" "}
            </p>
            <Button className="mx-5 h-12 rounded-lg">Get Started Now</Button>
          </div>
        </div>
        <ul className="mx-auto grid h-44 w-full max-w-5xl grid-cols-1 border border-b-0 border-dashed md:h-34 md:grid-cols-2 lg:h-24 lg:grid-cols-3">
          <li className="flex h-full items-center justify-between gap-10 px-5 md:gap-3 lg:justify-center">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <Zap className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              10x Faster Development
            </p>
          </li>
          <li className="flex h-full items-center justify-between gap-10 border-t border-l border-dashed px-5 md:gap-3 lg:justify-center lg:border-t-0">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <Users className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">10,000+ Developers</p>
          </li>
          <li className="col-span-1 flex h-full items-center justify-between gap-10 border-t border-l border-dashed px-5 md:col-span-2 md:justify-center md:gap-3 lg:col-span-1 lg:border-t-0">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <TrendingUp className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              25% Conversion Boost
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Hero };
