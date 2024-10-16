import Image from "next/image";

import Header from "./ui/components/header";
import CategoryCard from "./ui/components/categoryCard";
import { categories } from "./constants/categories";
import { mockups } from "./constants/mockups";
import PrimaryBtn from "./ui/components/button";
import MockupCard from "./ui/components/mockupCard";
import Footer from "./ui/components/footer";
import Link from "next/link";
import Button from "./ui/components/button";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-purple py-10 lg:pt-10 lg:pb-20">
        <div className="lg:flex gap-8 custom-container items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-4 lg:mb-8 font-noto font-bold text-5xl md:text-6xl lg:text-7xl text-white md:leading-snug lg:leading-tight text-center lg:text-left">
              Bring Your Designs to Life!
            </h1>

            <Button
              className="w-full md:w-1/3 lg:w-1/2 mx-auto lg:mx-0"
              link={{ href: "/categories" }}
            >
              Get Started
              <span>
                <svg
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5V4ZM16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964466C12.9763 0.769204 12.6597 0.769204 12.4645 0.964466C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03553L16.3536 4.85355ZM1 5H16V4H1V5Z"
                    fill="#242038"
                    className="arrow"
                  />
                </svg>
              </span>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={"/images/laptop.png"}
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              style={{ width: "auto", height: "400px" }}
              className="object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="pt-28 pb-14">
        <div className="custom-container">
          <h2 className="mb-8 lg:mb-16">Choose your mockup style</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => {
              return (
                <li key={category.name}>
                  <CategoryCard {...category} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="pb-28 pt-14">
        <div className="custom-container">
          <h2 className="mb-8 lg:mb-16">Popular mockups</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-7 md:mb-10">
            {mockups.slice(0, 6).map((mockup) => {
              return (
                <li key={mockup.id}>
                  <MockupCard {...mockup} />
                </li>
              );
            })}
          </ul>

          <Button className="mx-auto" variant="secondary" link={{ href: "#" }}>
            View All
            <span>
              <svg
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5V4ZM16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964466C12.9763 0.769204 12.6597 0.769204 12.4645 0.964466C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03553L16.3536 4.85355ZM1 5H16V4H1V5Z"
                  fill="#6369D1"
                  className="arrow"
                />
              </svg>
            </span>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
