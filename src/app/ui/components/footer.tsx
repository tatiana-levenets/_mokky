import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple text-white py-6">
      <div className="custom-container ">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <a href="#">
              <Image
                src="/images/logo.svg"
                width={160}
                height={41}
                alt="mokky logo"
              />
            </a>
          </div>

          <ul className="flex gap-8 regular-text mx-auto order-last md:-order-none w-full md:w-auto mt-8 md:mt-0 justify-center">
            {["Contact Us", "License", "Mockups"].map((item) => {
              return (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-turquoise transition duration-300 text-base"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* todo */}
          <div className="sm:w-[160px] flex items-end">
            <button className="up-button ml-auto">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="33.5"
                  width="33"
                  height="33"
                  rx="3.5"
                  transform="rotate(-90 0.5 33.5)"
                  stroke="#F7F9F9"
                  className="transition duration-300"
                />
                <path
                  d="M10 20L17 14L24 20"
                  stroke="#F7F9F9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="transition duration-300"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
