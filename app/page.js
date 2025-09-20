import About from "@/components/About";
import { Feature } from "@/components/Feature";
import { Hero } from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import UseTimeline from "@/components/UseTimeline";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <About />
        <UseTimeline />
        <Feature />
        <Testimonial />
      </div>
    </main>
  );
}
