import Image from "next/image";

import ImageController from "./components/imageController";
import Breadcrumb from "../ui/components/breadcrumb";
import Button from "../ui/components/button";

export default function Page() {
  return (
    <main>
      <section className="py-14 lg:py28">
        <div className="custom-container">
          <div className="mb-8 lg:mb-16">
            <h2>Iphone 14 mockup</h2>
            {/* todo component */}
            <Breadcrumb homeElement="Mokky" capitalizeLinks />
          </div>
          <div className="flex gap-8">
            <div className="w-1/3 py-6">
              {/* todo rename like ImageController */}
              <ImageController />
              <Button className="w-full">
                Download
                <span className="rotate-90">
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
                      className=" transition duration-300"
                    />
                  </svg>
                </span>
              </Button>
            </div>
            <div className="w-2/3 border border-lightGrey rounded p-6">
              <Image
                src="/images/mockups/4.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }}
                alt="mockup"
                className="w-full h-auto max-h-[600px] object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
