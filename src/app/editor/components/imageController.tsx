"use client";
import Button from "@/app/ui/components/button";
import { useRef, useState } from "react";

export default function ImageController() {
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

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept="image/*"
        style={{ display: "none" }}
      />

      {imageLocalUrl ? (
        <div>
          {" "}
          <div className="h-64 p-6 rounded border border-lightGrey mb-4 lg:mb-8">
            <img
              src={imageLocalUrl}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex gap-8">
            <Button className="w-1/2" variant="secondary">
              Edit
              <span>
                {" "}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82997 53.1401L15.05 52.8701C15.5607 52.8576 16.0474 52.6501 16.41 52.2901L49.87 18.8801C51.5615 17.1837 52.5113 14.8858 52.5113 12.4901C52.5113 10.0945 51.5615 7.79656 49.87 6.10012V6.10012C48.1735 4.40861 45.8756 3.45874 43.48 3.45874C41.0843 3.45874 38.7864 4.40861 37.09 6.10012L3.67997 39.5101C3.32002 39.8727 3.11249 40.3593 3.09997 40.8701L2.82997 51.0901C2.8233 51.3569 2.8701 51.6224 2.96762 51.8709C3.06513 52.1193 3.2114 52.3457 3.39778 52.5368C3.58417 52.7278 3.80691 52.8796 4.05288 52.9832C4.29885 53.0869 4.56307 53.1402 4.82997 53.1401V53.1401ZM39.92 8.93012C40.3875 8.46524 40.942 8.097 41.5518 7.84641C42.1616 7.59582 42.8148 7.46781 43.4741 7.46966C44.1334 7.47152 44.7859 7.60322 45.3943 7.85723C46.0027 8.11125 46.5551 8.48262 47.02 8.95012C47.4848 9.41763 47.8531 9.97212 48.1037 10.5819C48.3543 11.1918 48.4823 11.845 48.4804 12.5043C48.4786 13.1636 48.3469 13.816 48.0929 14.4244C47.8388 15.0328 47.4675 15.5852 47 16.0501L44 19.1201L36.85 12.0001L39.92 8.93012ZM7.06997 41.7801L34 14.8301L41.14 22.0001L14.2 48.9001L6.88997 49.0801L7.06997 41.7801Z"
                    fill="#6369D1"
                    className="transition duration-300"
                  ></path>
                  <path
                    d="M60 56.54H4C3.46957 56.54 2.96086 56.7508 2.58579 57.1258C2.21071 57.5009 2 58.0096 2 58.54C2 59.0705 2.21071 59.5792 2.58579 59.9543C2.96086 60.3293 3.46957 60.54 4 60.54H60C60.5304 60.54 61.0391 60.3293 61.4142 59.9543C61.7893 59.5792 62 59.0705 62 58.54C62 58.0096 61.7893 57.5009 61.4142 57.1258C61.0391 56.7508 60.5304 56.54 60 56.54Z"
                    fill="#6369D1"
                    className="transition duration-300"
                  ></path>
                </svg>
              </span>
            </Button>
            <Button className="w-1/2" variant="delete">
              Delete
              <span>
                <svg
                  enable-background="new 0 0 32 32"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-4 h-4"
                >
                  <path
                    clip-rule="evenodd"
                    d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z"
                    fill="#E63946"
                    fill-rule="evenodd"
                    className="transition duration-300"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z"
                    fill="#E63946"
                    fill-rule="evenodd"
                    className="transition duration-300"
                  ></path>
                </svg>
              </span>
            </Button>
          </div>
        </div>
      ) : (
        <Button
          variant="secondary"
          className="w-full"
          handleClick={handleClick}
        >
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
      )}
    </div>
  );
}
