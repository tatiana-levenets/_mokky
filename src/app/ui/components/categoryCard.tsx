import { Category } from "@/app/constants/categories";
import Image from "next/image";

export default function CategoryCard({ name, src, href, amount }: Category) {
  return (
    <a
      href={href}
      className="category-card p-6 flex justify-between items-center border border-lightGrey rounded hover:border-purple hover:shadow-md hover:shadow-purple/20 transition duration-300"
    >
      <div className="flex">
        <Image
          src={src}
          width={36}
          height={36}
          alt={name}
          key={name}
          className="mr-4 category-icon"
        />
        <div>
          <h3 className="category-name">{name}</h3>
          <p className="text-xs text-grey">{amount} mockups</p>
        </div>
      </div>

      <svg
        width="13"
        height="26"
        viewBox="0 0 13 26"
        fill="none"
        className="arrow-card"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.71429 1L12 13L1.71429 25"
          stroke="#242038"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
}
