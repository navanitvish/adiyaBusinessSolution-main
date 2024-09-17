import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { faqData } from "../configs/faq";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path according to your project structure
import ReactSEO from "../components/ReactSEO";
const Faqs = () => {
  const [faq, setFaq] = useState(0);
  const { isLightMode } = useTheme(); // Use isLightMode instead of theme
  const seoProps = {
    url: "https://adiya-business-solution-main.vercel.app",
    title: "Faqs",
    description:
      "Welcome to ADIYA Business Solution, your trusted partner for CRM, Website Development, and App Development.",
    thumbnail: "https://yourwebsite.com/thumbnail.jpg",
    themeColor: "#ffffff",
    canonicalUrl: `https://adiyabusinesssolution.com ${location.pathname}`,
    keywords: "business solutions, CRM, website development, app development",
    twitterUsername: "@adiyabusiness",
  };
  return (
    <section className={`md:mx-20 mt-7  mb-10  mx-auto ${isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
<ReactSEO {...seoProps} />
      <h1 className={` text-2xl lg:text-6xl p-4 md:text-5xl font-semibold mb-3 ${isLightMode ? 'text-black' : 'text-white'}`}>
        Frequently asked <span className="text-customBlue">questions?</span>
      </h1>
      <section className={`space-y-3.5   flex flex-col w-full  p-4 ${isLightMode ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-gray-300' : 'bg-gray-800 border-gray-700'}`}>
        {faqData.map((i, j) => (
          <div
          key={j}
          tabIndex={0} // Add tabIndex to make the element focusable
          role="button" // Add role to indicate the element's purpose
          onClick={() => {
            faq === j ? setFaq(null) : setFaq(j);
          }}
          className={`shadow h border  duration-200 text-base px-3 md:px-5 py-4 rounded-lg cursor-pointer ${
            faq === j
              ? (isLightMode ? '   ' : 'bg-darkModeButtonHover ')
              : (isLightMode ? 'border-gray-300' : 'border-indigo-700')
          }`}
        >
            <div className="flex items-center justify-between  ">
              <p className="space-x-2.5 flex items-center justify-center  ">
                <span className={`font-normal  ${isLightMode ? 'text-black' : 'text-white'}`}>{j + 1}</span>
                <span className={` text-sm  md:text-lg lg:text-xl font-medium    p-4 ${isLightMode ? 'text-black' : 'text-white'}`}>{i.que}</span>
              </p>
              <div>
                <BsChevronDown
                  className={`duration-200 ${
                    faq === j ? "-rotate-180" : "rotate-0"
                  } ${isLightMode ? 'text-black' : 'text-indigo-500'}`}
                />
              </div>
            </div>
            <div
              className={`duration-200 grid ${
                faq === j ? "active opacity-100" : "inactive opacity-0"
              }`}
            >
              <div className="overflow-hidden text-sm lg:text-xl  text-justify  tracking-tighter font-normal ">
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
