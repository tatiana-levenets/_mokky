import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple text-white py-6">
      <div className="custom-container">
        <div className="flex justify-between items-center">
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

          <ul className="flex gap-8 regular-text justify-center">
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
        </div>
      </div>
    </footer>
  );
}
