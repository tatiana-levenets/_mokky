import { categories } from "../constants/categories";
import CategoryCard from "../ui/components/categoryCard";
import DoublePage from "../ui/components/doublePage";

export default function Page() {
  return (
    <main>
      <DoublePage
        title={
          <p>
            Choose your
            <br />
            mockup style
          </p>
        }
      >
        <ul className="flex flex-col justify-between gap-4">
          {categories.map((category) => {
            return (
              <li key={category.name}>
                <CategoryCard {...category} />
              </li>
            );
          })}
        </ul>
      </DoublePage>
    </main>
  );
}
