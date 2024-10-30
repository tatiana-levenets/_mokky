import Link from "next/link";
import Image from "next/image";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function DoublePage({ title, children }: Props) {
  return (
    <div className="md:bg-gradient-to-r from-pink to-50% to-white from-50% h-screen">
      <div className="relative md:top-1/2 md:-translate-y-1/2">
        <div className="md:flex items-center gap-8 relative">
          <div className="custom-container md:w-1/2 text-left bg-pink">
            <Link href="/" className="md:absolute md:bottom-10 md:left-0">
              <Image
                src="/images/logo.svg"
                width={160}
                height={41}
                alt="mokky logo"
                className="mb-14 md:mb-0"
              />
            </Link>
            <Link
              href="/"
              className="back-link absolute top-10 left-0 p-2 hidden md:block"
            >
              <svg
                width="13"
                height="26"
                viewBox="0 0 13 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M1.71429 1L12 13L1.71429 25"
                  stroke="#F7F9F9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="transition duration-300"
                />
              </svg>
            </Link>

            <h2 className="text-white">{title}</h2>
          </div>
          <div className="custom-container md:w-1/2 py-10 md:p-10 bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
