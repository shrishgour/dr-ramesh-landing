"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Shree Mati Geeta Devi Homoyo",
    designation: "06 Sep 2024",
    company: "TechCorp",
    testimonial:
      "I had a great experience with Dr. Ramesh Barupal in Bikaner. The care was gentle, the supervision was good, and the facility was clean & hygienic. The treatment was excellent and the booking process was easy. I highly recommend this doctor!",

    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry. " +
      "The intuitive interface makes it easy to onboard new team members, and the automation features save us countless hours every week. ",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate. " +
      "As a designer, I appreciate the attention to detail and well-thought-out UI components. " +
      "It makes designing and prototyping so much more efficient.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service. " +
      "The ability to track performance, analyze data, and collaborate across teams has been a game-changer.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful. " +
      "As a developer, I appreciate the well-documented API, the flexibility of integrations, and the robust security features.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful. " +
      "I can now generate detailed reports in minutes, which previously took days to compile. " +
      "helping us make smarter, data-backed decisions.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const Testimonial = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="testimonial" className="h-full w-screen overflow-hidden pb-24">
      <div className="container mx-auto border-t border-b border-dashed">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center border border-t-0 border-dashed px-5 py-12 lg:mx-auto">
          <div className="relative mx-auto mt-3 text-center text-3xl font-medium tracking-tight md:text-4xl">
            <h2>Testimonials</h2>
            <p className="text-muted-foreground mt-3 text-center text-sm md:text-base">
              Stories of Healing & Hope
            </p>
          </div>
          <div className="container mx-auto mt-14 w-full px-12 lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-xl)">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn("h-3.5 w-3.5 rounded-full border-2", {
                    "bg-primary border-primary": current === index + 1,
                  })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-accent mb-8 rounded-xl px-6 py-8 sm:py-6">
    <div className="flex items-center justify-between gap-20">
      <div className="bg-muted-foreground/20 relative hidden aspect-3/4 w-full max-w-[18rem] shrink-0 rounded-xl lg:block">
        <img
          src={testimonial.avatar}
          alt="Avatar Portrait"
          className="z-10 h-full w-full object-cover"
        />
        <div className="bg-primary absolute top-1/4 right-0 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full">
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
              className="fill-primary-foreground"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between gap-1">
          <div className="hidden items-center gap-4 sm:flex md:hidden">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-medium">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">
                {testimonial.designation}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="fill-muted-foreground stroke-muted-foreground h-5 w-5" />
            <StarIcon className="fill-muted-foreground stroke-muted-foreground h-5 w-5" />
            <StarIcon className="fill-muted-foreground stroke-muted-foreground h-5 w-5" />
            <StarIcon className="fill-muted-foreground stroke-muted-foreground h-5 w-5" />
            <StarIcon className="fill-muted-foreground stroke-muted-foreground h-5 w-5" />
          </div>
        </div>
        <p className="mt-6 text-base leading-normal font-medium tracking-tight md:text-xl lg:text-xl lg:leading-normal! xl:text-2xl">
          {testimonial.testimonial}
        </p>
        <div className="mt-6 flex items-center gap-4 sm:hidden md:flex">
          <Avatar>
            <AvatarImage src={testimonial.avatar} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-medium">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold md:text-base xl:text-lg">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              {testimonial.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
