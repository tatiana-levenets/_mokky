import Link from "next/link";
import Image from "next/image";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function DoublePage({ title, children }: Props) {
  return (
    <div className="bg-gradient-to-r from-pink to-50% to-white from-50% h-screen">
      <div className="custom-container relative top-1/2 -translate-y-1/2">
        <div className="flex items-center gap-8 relative">
          <div className="w-1/2 text-left bg-pink">
            <Link href="#" className="back-link absolute top-10 left-0 p-2">
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
            <Link href="/" className="absolute bottom-10 left-0">
              <Image
                src="/images/logo.svg"
                width={160}
                height={41}
                alt="mokky logo"
              />
            </Link>
          </div>
          <div className="w-1/2 p-10 bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
