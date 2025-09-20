import pilot from "@/public/drramesh-2.png";
import Image from "next/image";
import { Statistics } from "./Statistics";

function About() {
  return (
    <section className="h-full w-screen overflow-hidden pb-24">
      <div className="container mx-auto border-t border-b border-dashed">
        <div className="relative grid max-w-7xl grid-cols-1 gap-14 border border-t-0 border-b-0 border-dashed px-5 py-12 md:grid-cols-[1fr_2fr] md:gap-24 md:px-10 lg:mx-auto">
          <div className="bg-primary-300 relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <div className="bg-primary-800 pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(transparent,white)]" />
            <Image
              src={pilot}
              alt="Dr Ramesh Barupal sitting in his clinic."
              className="z-10 size-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="mb-8 text-3xl font-medium md:text-4xl">
                <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
                  Meet{" "}
                </span>
                Dr. Ramesh Barupal
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                Dr. Ramesh Barupal is a dedicated{" "}
                <span className="font-semibold">
                  Homeopathic & Naturopathic Physician
                </span>{" "}
                with over a{" "}
                <span className="font-semibold">decade of experience</span> in
                treating chronic and lifestyle-related diseases. His approach
                focuses on identifying root causes, combining the gentle power
                of homeopathy with the holistic balance of naturopathy. Over the
                years, he has guided countless patients toward recovery from
                complex conditions such as thyroid disorders, migraine,
                diabetes, kidney stones, and allergies—helping them regain
                health naturally and safely.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
