import { MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <section id="contact" className="h-full w-screen overflow-hidden pb-24">
    <div className="container mx-auto border-t border-b border-dashed">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed px-5 py-12 md:px-10 lg:mx-auto lg:px-15">
        <div className="relative mx-auto mt-3 text-center text-3xl font-medium tracking-tight md:text-4xl">
          <h2>Choose Natural Healing Today</h2>
          <p className="text-muted-foreground mt-3 text-center text-sm md:text-base">
            No side effects. No dependency. Just safe, effective, and holistic
            care for long-lasting health.
          </p>
        </div>
        <div className="mx-auto grid max-w-(--breakpoint-xl) gap-16 py-24 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground mb-8 flex size-10 shrink-0 items-center justify-center rounded-lg md:size-12">
              <MessageCircle />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Whatsapp</h3>
            <p className="text-muted-foreground mt-2">
              Dr. Ramesh is here to help.
            </p>
            <Link
              className="text-primary mt-4 font-medium"
              href="https://wa.me/8947048749?text=Hello%20Dr.Ramesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drop a message for a quick chat
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground mb-8 flex size-10 shrink-0 items-center justify-center rounded-lg md:size-12">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Clinic</h3>
            <p className="text-muted-foreground mt-2">
              Come visit Dr.Ramesh at his clinic.
            </p>
            <Link
              className="text-primary mt-4 font-medium"
              href="https://www.google.com/maps/place/Dr.Ramesh+Barupal/@28.0267251,73.2970111,17z/data=!3m1!4b1!4m6!3m5!1s0x393fdd8dc87fb4eb:0x791a0c77f8b69764!8m2!3d28.0267204!4d73.2995914!16s%2Fg%2F11w3nkh6mg?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Dr.Ramesh Barupal, near Icici Bank, Jaisalmer Road, Bikaner,
              Rajasthan 334004
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground mb-8 flex size-10 shrink-0 items-center justify-center rounded-lg md:size-12">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Phone</h3>
            <p className="text-muted-foreground mt-2">24/7 Avaliable on Call</p>
            <Link
              className="text-primary mt-4 font-medium"
              href="tel:8947048749"
            >
              +91-8460541860
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
