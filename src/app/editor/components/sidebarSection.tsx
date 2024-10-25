"use client";
import Button from "@/app/ui/components/button";
import { useRef, useState } from "react";

export default function SidebarSection() {
  const hiddenFileInput = useRef(null);
  const [imageLocalUrl, setImageLocalUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      const url = URL.createObjectURL(image);
      setImageLocalUrl(url);
    }
  };

  //todo
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="mb-6 lg:mb-10">
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h3 className="font-noto font-semibold text-">Screen Left</h3>
        <p>720x1600px</p>
      </div>

      <div>
        <img src={imageLocalUrl} alt="" />
      </div>

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept="image/*"
      />

      <Button variant="secondary" className="w-full" handleClick={handleClick}>
        Upload
        <span className="-rotate-90">
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
              className="transition duration-300"
            />
          </svg>
        </span>
      </Button>
    </div>
  );
}
