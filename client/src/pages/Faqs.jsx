import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { faqData } from "../configs/faq";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path according to your project structure

const Faqs = () => {
  const [faq, setFaq] = useState(0);
  const { isLightMode } = useTheme(); // Use isLightMode instead of theme

  return (
    <section className={`md:mx-20 mt-7 mb-10 w-10/12 mx-auto ${isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <h1 className={`text-6xl md:text-6xl font-semibold mb-3 ${isLightMode ? 'text-black' : 'text-white'}`}>
        Frequently asked <span className="text-customBlue">questions?</span>
      </h1>
      <section className={`space-y-2.5 font-light p-8 ${isLightMode ? 'bg-gray-100 border-gray-300' : 'bg-gray-800 border-gray-700'}`}>
        {faqData.map((i, j) => (
          <div
            key={j}
            onClick={() => {
              faq === j ? setFaq(null) : setFaq(j);
            }}
            className={`shadow h border duration-200 text-base px-3 md:px-5 py-6 rounded-lg cursor-pointer ${
              faq === j
                ? (isLightMode ? 'bg-customBlueHover' : 'bg-darkModeButtonHover')
                : (isLightMode ? 'border-gray-300' : 'border-gray-700')
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="space-x-2.5 flex items-center">
                <span className={`font-normal ${isLightMode ? 'text-black' : 'text-white'}`}>{j + 1}</span>
                <span className={`text-xl font-semibold ${isLightMode ? 'text-black' : 'text-white'}`}>{i.que}</span>
              </p>
              <div>
                <BsChevronDown
                  className={`duration-200 ${
                    faq === j ? "-rotate-180" : "rotate-0"
                  } ${isLightMode ? 'text-lightText' : 'text-lightText'}`}
                />
              </div>
            </div>
            <div
              className={`duration-200 grid ${
                faq === j ? "active opacity-100" : "inactive opacity-0"
              }`}
            >
              <div className={`overflow-hidden text-xl font-normal ${isLightMode ? 'text-lightText' : 'text-white'}`}>
                {i.ans}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Faqs;
