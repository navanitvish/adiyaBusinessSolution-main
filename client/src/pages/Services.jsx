import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../store/appSlice";
import { services } from "../configs/services";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path according to your project structure
import ReactSEO from "../components/ReactSEO";
const Services = () => {
  const { param } = useParams();
  const { heading, para, img } = services[param];
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);
  const { isLightMode } = useTheme(); // Use isLightMode instead of theme
  const seoProps = {
    url: "https://adiya-business-solution-main.vercel.app",
    title: "Servies",
    description:
      "Welcome to ADIYA Business Solution, your trusted partner for CRM, Website Development, and App Development.",
    thumbnail: "https://yourwebsite.com/thumbnail.jpg",
    themeColor: "#ffffff",
    canonicalUrl: `https://adiyabusinesssolution.com ${location.pathname}`,
    keywords: "business solutions, CRM, website development, app development",
    twitterUsername: "@adiyabusiness",
  };
  return (
    <main
      className={`flex items-center justify-between mx-5 sm:mx-20 mt-7 mb-10 xl:my-0 h-auto xl:p-10 space-x-10 font-light ${
        isLightMode ? 'bg-white text-black' : ' text-white'
      }`}
    >
       <ReactSEO {...seoProps} />
      <section className="space-y-5  text-justify">
        <h1 className={`text-2xl  sm:text-6xl font-semibold ${
          isLightMode ? 'text-black' : 'text-white'
        } text-center xl:text-start`}>
          {heading}
        </h1>
        {!accessibility.hideImages && (
          <img
            src={img}
            className={`w-full block xl:hidden rounded-xl ${
              isLightMode ? 'shadow-lg' : 'shadow-md'
            }`}
            alt={heading}
          />
        )}
        <p >{para}</p>
        <button
          onClick={() => dispatch(setIsOpenRequestProposal(true))}
          className={`border px-5 py-2.5 rounded-md text-xl font-medium ${
            isLightMode ? 'border-black bg-customBlue hover:bg-customBlueHover text-white' : 'border-white bg-customBlue hover:bg-customBlueHover text-white'
          } duration-200`}
        >
          Let&apos;s get started
        </button>
      </section>
      {!accessibility.hideImages && (
        <img
          src={img}
          className={`w-[40%] hidden xl:block rounded-xl ${
            param === "game-&-graphic-development" ? "h-[60%]" : "h-auto"
          } ${
            isLightMode ? 'shadow-lg' : 'shadow-md'
          }`}
          alt={heading}
        />
      )}
    </main>
  );
};

export default Services;
