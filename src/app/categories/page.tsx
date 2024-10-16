import { categories } from "../constants/categories";
import CategoryCard from "../ui/components/categoryCard";

export default function Page() {
  return (
    <main>
      <div className="bg-gradient-to-r from-pink to-50% to-white from-50% h-screen">
        <div className="custom-container">
          <div className="flex items-center gap-8">
            <div className="w-1/2 text-left">
              <h2 className="text-white">
                Choose your
                <br />
                mockup style
              </h2>
            </div>
            <div className="w-1/2 p-10">
              <ul className="flex flex-col justify-between gap-4">
                {categories.map((category) => {
                  return (
                    <li key={category.name}>
                      <CategoryCard {...category} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
