import React from "react";
import { useState } from "react";

// Props
interface CardProps {
  backgroundImg: string;
  logo: string;
  message: string;
}
// Card component
const Card: React.FC<CardProps> = ({ logo, message, backgroundImg }) => {
  // use of usestate
  const [index, SetIndex] = useState(0);

  return (
    <>
      <div
        className={`h-screen flex items-center justify-center ${
          index === 0 ? "bg-black" : "bg-white"
        }`}
      >
        {/* Main-Conatainer */}
        <div
          className={`h-[30rem] w-[20rem] rounded-lg ring-2 flex items-center justify-center flex-col gap-[3rem] ${
            index === 0 ? "ring-white" : "ring-black"
          }`}
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* logo-container */}
          <div
            className="h-[6rem] w-[14rem]"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Message */}
          <div className="text-blue-100 text-2xl font-bold font-serif">
            {message}
          </div>
          <div>
            {/* Button */}
            <button
              type="button"
              className={`
                ${
                  index === 0 ? "bg-black text-white" : "bg-white text-black"
                } h-auto w-auto py-2 px-4 rounded-2xl hover:cursor-pointer border 
              `}
              onClick={() => {
                if (index === 0) {
                  SetIndex(1);
                } else {
                  SetIndex(0);
                }
              }}
            >
              {index === 0 ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
