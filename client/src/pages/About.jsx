import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../store/appSlice";
import Stats from "./Stats";
import TechSysOffices from "./TechSysOffices ";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

const About = () => {
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);
  const { isLightMode } = useTheme(); // Access the theme

  return (
    <div
      className={`${
        isLightMode ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="w-full md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="lg:flex lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col lg:flex-row items-stretch justify-between">
            {/* Content Section */}
            <div className="lg:w-1/2 pr-0 lg:pr-8 flex flex-col justify-center">
              <h2
                className={`text-lg font-semibold mb-2 ${
                  isLightMode ? "text-customBlue" : "text-customBlue"
                }`}
              >
                Economy | Efficiency | Effectiveness
              </h2>
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
                  isLightMode ? "text-gray-900" : "text-gray-100"
                }`}
              >
                About Our Company
              </h1>
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  isLightMode ? "text-customBlue" : "text-customBlue"
                }`}
              >
                Adiya Business Solution
              </h2>
              <p
                className={`text-lg sm:text-xl md:text-xl font-normal mb-8 ${
                  isLightMode ? "text-black" : "text-gray-300"
                }`}
              >
                We're here to bring financial stability, improve the economy.
                Leave money issues with us and focus on your business.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-2/4 h-full">
              <img
                src="https://bankmatching.com/wp-content/uploads/2023/12/pexels-fauxels-3182750.jpg"
                alt="Company"
                className="w-full h-48 sm:h-60 lg:h-72 rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full object-cover">
          <img
            src="https://shechain.co/wp-content/uploads/2022/04/shechain.co_photos-1900-x-780-px-faq-1.png"
            alt="Team raising hands in celebration"
            className="w-full h-48 sm:h-72 md:h-96 object-cover rounded-3xl"
          />
        </div>
      </div>

      <main
        className={`flex flex-col md:flex-row items-center justify-between mt-7 mb-10 space-y-10 md:space-y-0 md:space-x-10 font-light ${
          isLightMode ? "bg-gradient-to-br from-blue-50 to-purple-50 text-black" : "text-white"
        }`}
      >
        <section className="space-y-5 text-sm sm:text-base p-4">
          <div className="container mx-auto px-4 py-8 w-full md:w-10/12">
            {/* Section 1: Left content, right image */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div
                className={`md:w-${
                  accessibility.hideImages ? "full" : "1/2"
                } md:pr-8 mb-6 md:mb-0`}
              >
                <h1
                  className={`text-4xl font-semibold sm:text-5xl ${
                    isLightMode ? "text-black" : "text-white"
                  }`}
                >
                  At{" "}
                  <span
                    className={`text-customBlue sm:text-customBlue ${
                      isLightMode ? "text-customBlue" : "text-customBlue"
                    }`}
                  >
                    Adiya Business Solution
                  </span>
                  , we make technology accessible
                </h1>
                <h2
                  className={`text-2xl sm:text-3xl font-semibold mb-4 pt-6 ${
                    isLightMode ? "text-customBlue" : "text-customBlue"
                  }`}
                >
                  Our Services
                </h2>
                <p
                  className={`mb-4 font-normal text-lg sm:text-xl text-justify ${
                    isLightMode ? "text-gray-500 text-justify" : "text-gray-300 text-justify"
                  }`}
                >
                  We offer a comprehensive range of services, including Product
                  Development, Product Testing, Team Onboarding, Pilot Run,
                  Digital Marketing, Promotion, Investment Deck, and Pitch
                  Training. We take care of everything, ensuring that your
                  startup journey is supported and guided every step of the way.
                </p>

                <button
                  onClick={() => dispatch(setIsOpenRequestProposal(true))}
                  className={`border border-black px-5 py-2.5 rounded-md text-lg sm:text-xl font-normal ${
                    isLightMode
                      ? "bg-customBlue hover:bg-customBlueHover text-white"
                      : "bg-customBlue hover:bg-darkModeButtonHover text-white"
                  }`}
                >
                  Let's get started
                </button>
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0">
                {!accessibility.hideImages ? (
                  <img
                    src="https://cdn.dribbble.com/userupload/4871858/file/original-915b36c3c2b7ca17351b02c6c39c6f9c.jpg?resize=1504x1128"
                    alt="Our journey illustration"
                    className="rounded-lg w-full"
                  />
                ) : (
                  <div className="md:w-1/2 hidden" />
                )}
              </div>
            </div>

            {/* Section 2: Left image, right content */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div
                className={`md:w-${
                  accessibility.hideImages ? "full" : "1/2"
                } md:pl-8 mb-6 md:mb-0`}
              >
                <h2
                  className={`text-2xl sm:text-3xl font-semibold mb-4 ${
                    isLightMode ? "text-black" : "text-white"
                  }`}
                >
                  Our Story
                </h2>
                <p
                  className={`text-lg sm:text-xl font-normal text-justify ${
                    isLightMode ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  <span
                    className={`block mb-2  font-medium  ${
                      isLightMode ? "text-customBlue  " : "text-customBlue "
                    }`}
                  >
                    How it all began
                  </span>
                  It all began with a simple plan to assist a friend in need
                  during our final days of college. Through this experience, we
                  quickly realized that embarking on a startup journey is a
                  challenging and often thankless endeavor. Motivated by the
                  notion that startups deserve more support, we decided to
                  streamline the lives of startup founders by providing them
                  with everything they need at their disposal. Our aim is to
                  enable them to concentrate solely on execution and operations.
                  Over the span of 9 years, we have continued this mission,
                  assisting 134 startups in their growth. Trust us when we say,
                  the satisfaction derived from this endeavor is unparalleled.
                </p>
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0">
                {!accessibility.hideImages ? (
                  <img
                    src="https://cdn.dribbble.com/userupload/14666255/file/original-52fbe74ae75b68a48cd1fffb58365670.png?resize=1504x1128"
                    alt="Our journey illustration"
                    className="rounded-lg w-full"
                  />
                ) : (
                  <div className="md:w-1/2 hidden" />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Stats />

      <div className="container mx-auto p-8 w-full md:w-10/12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1
              className={`text-4xl sm:text-4xl md:text-5xl font-bold text-left mb-4 ${
                isLightMode ? "text-black" : "text-white"
              }`}
            >
              Meet <span className={`${isLightMode ? 'text-customBlue':'text-customBlue'}`}>The</span> Founder
            </h1>
            <p
              className={`text-xl text-justify sm:text-xl  font-normal text-left ${
                isLightMode ? "text-black" : "text-white"
              }`}
            >
              <span className="font-bold">"</span>The visionary CEO-Founder of
              our business solutions company drives innovation with bespoke CRM
              systems, cutting-edge website development, and app development,
              empowering businesses to excel in today’s dynamic, competitive
              market.
              <span className="font-bold">"</span>
            </p>
            <div className="mt-4">
              <h3
                className={`font-bold ${
                  isLightMode ? "text-black" : "text-white"
                }`}
              >
                Avit Garg
              </h3>
              <p
                className={`text-gray-400 ${
                  isLightMode ? "text-gray-600" : "text-gray-300"
                }`}
              >
                CEO-ABS
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/CEO.png"
              alt="Founder"
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      <TechSysOffices />
    </div>
  );
};

export default About;
