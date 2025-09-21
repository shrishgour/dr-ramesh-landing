import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Logo } from "../navbar-02/logo";

const footerLinks = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "How It works",
    href: "#howitworks",
  },
  {
    title: "Treatment",
    href: "#treatment",
  },
  {
    title: "Testimonials",
    href: "#testimonial",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto mb-4 flex flex-col border-t border-b border-dashed">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed px-5 md:px-10 lg:mx-auto lg:px-15">
        <div className="flex flex-col items-center justify-start py-12">
          <Logo />

          <ul className="mt-6 flex flex-wrap items-center gap-4">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Dr. Ramesh Barupal. All rights reserved.
            </Link>
            | Developed by @shrish_dev
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
