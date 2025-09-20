import { Feature } from "@/components/Feature";
import { Hero } from "@/components/Hero";
import UseTimeline from "@/components/UseTimeline";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <UseTimeline />
        <Feature />
      </div>
    </main>
  );
}
