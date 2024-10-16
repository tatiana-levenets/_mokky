import Link from "next/link";
import { categories } from "@/app/constants/categories";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-purple text-white py-6">
      <div className="custom-container ">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/images/logo.svg"
              width={160}
              height={41}
              alt="mokky logo"
            />
          </div>

          <ul className="hidden lg:flex gap-8 regular-text">
            {categories.map((category) => {
              return (
                <li>
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-white hover:text-turquoise transition duration-300 text-base"
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
