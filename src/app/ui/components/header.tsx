import Link from "next/link";
import { categories } from "@/app/constants/categories";

export default function Header() {
  return (
    <header className="bg-purple text-white py-6">
      <div className="custom-container ">
        <div className="flex justify-between">
          <div>logo</div>
          <ul className="flex gap-8 regular-text">
            {categories.map((category) => {
              return (
                <li>
                  <Link key={category.name} href={category.href}>
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
