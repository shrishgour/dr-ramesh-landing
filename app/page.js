import About from "@/components/About";
import Contact from "@/components/contact";
import { Feature } from "@/components/Feature";
import Footer from "@/components/footer-05/footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/navbar-02/navbar";
import Testimonial from "@/components/Testimonial";
import UseTimeline from "@/components/UseTimeline";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-100">
        <Navbar />
      </header>
      <main>
        <div>
          <Hero />
          <About />
          <UseTimeline />
          <Feature />
          <Testimonial />
          <Contact />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
