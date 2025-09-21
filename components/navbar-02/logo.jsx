import plus from "@/public/hospital.png";
import Image from "next/image";
import Link from "next/link";
export const Logo = () => (
  <Link href="#hero">
    <div className="flex cursor-pointer items-center gap-3">
      <Image
        src={plus}
        alt="Univarsal medical puls sign"
        className="text-primary size-9"
      />
      <div className="flex flex-col [@media(max-width:320px)]:hidden">
        <p className="font-semibold">Shree Ram</p>
        <p className="text-xs font-light">Homeo Clinic</p>
      </div>
    </div>
  </Link>
);
