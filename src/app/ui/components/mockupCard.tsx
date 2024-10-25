import { Mockup } from "@/app/constants/mockups";
import Image from "next/image";

export default function MockupCard({ name, src, href }: Mockup) {
  return (
    <a
      href={href}
      className="mockup-card block p-6  border border-lightGrey rounded hover:border-purple hover:shadow-md hover:shadow-purple/20 transition duration-300"
    >
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        alt={name}
        className="w-full h-72 object-cover mb-3 rounded"
        quality={30}
        blurDataURL={src}
        placeholder="blur"
      />

      <p className="mockup-name text-sm md:text-base font-bold text-grey transition duration-300">
        {name}
      </p>
    </a>
  );
}
