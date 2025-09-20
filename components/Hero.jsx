import {
  HeartPlusIcon,
  MessageCircle,
  PhoneCallIcon,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Hero = () => {
  return (
    <section className="h-full w-screen overflow-hidden py-24">
      <div className="container mx-auto border-t border-b border-dashed">
        <div className="relative flex w-full max-w-5xl flex-col items-center justify-center border border-t-0 border-dashed px-5 py-12 lg:mx-auto">
          <p className="text-muted-foreground flex items-center gap-3 text-sm uppercase">
            <span className="inline-block size-2 rounded bg-green-500" />
            Dr barupal say's
          </p>
          <div className="mt-3 flex w-full max-w-xl flex-col gap-4 text-center text-4xl font-semibold tracking-tighter md:gap-6 md:text-6xl lg:text-7xl">
            <h1 className="z-10 inline">Say Goodbye to</h1>
            <ContainerTextFlip
              className="left-1/2 -translate-x-1/2 text-4xl font-semibold tracking-tighter md:text-5xl lg:text-7xl"
              words={["Kidney Stones", "Fatty Liver", "Migrain", "Thyroid"]}
            />
            <h1 className="z-10 inline md:mr-3">Without Surgery</h1>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed py-20">
          <div className="w-full max-w-2xl space-y-5 text-center">
            <p className="text-muted-foreground px-5 text-sm md:text-base lg:text-lg">
              Dr. Ramesh Barupal specializes in safe, natural, and effective
              homeopathic treatments for Pigmentary Disorders, Liver Disease,
              Depression, Migraine, Fever, Thyroid, Allergy, Diabetes, and
              Kidney Stones. Personalized care without side effects.
            </p>
            <div className="flex items-center justify-center gap-3 py-8 md:gap-4">
              <Button className="h-12 w-36 rounded-4xl text-sm md:h-14 md:w-42 md:text-base">
                <MessageCircle className="size-5 md:size-6" /> Whatsapp
              </Button>
              <Button
                variant="secondary"
                className="h-12 w-36 rounded-4xl text-sm md:h-14 md:w-42 md:text-base"
              >
                <PhoneCallIcon className="size-5 md:size-6" /> Call Now
              </Button>
            </div>
          </div>
        </div>
        <ul className="mx-auto grid h-44 w-full max-w-5xl grid-cols-1 border border-b-0 border-dashed md:h-34 md:grid-cols-2 lg:h-24 lg:grid-cols-3">
          <li className="flex h-full items-center gap-10 px-5 md:gap-3 lg:justify-center">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <HeartPlusIcon className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              11+ Years in Healthcare
            </p>
          </li>
          <li className="flex h-full items-center gap-10 border-t border-l border-dashed px-5 md:gap-3 lg:justify-center lg:border-t-0">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <Users className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              4,500+ Patients Treated
            </p>
          </li>
          <li className="col-span-1 flex h-full items-center gap-10 border-t border-l border-dashed px-5 md:col-span-2 md:justify-center md:gap-3 lg:col-span-1 lg:border-t-0">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <TrendingUp className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              72-Hour Stone Removal
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Hero };
