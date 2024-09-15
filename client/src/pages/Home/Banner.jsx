import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../../store/appSlice";
//import { BsSun, BsMoonStars } from "react-icons/bs";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { useTheme } from "../../context/ThemeContext";

import Spline from "@splinetool/react-spline";
const Banner = () => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);
  const [sound, setSound] = useState(false);

  // Get theme state from ThemeContext
  const { isLightMode } = useTheme();

  // State for typewriter effect

  // Infinite Typewriter Effect

  useEffect(() => {
    if (sound) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [sound]);

  return (
    <main
      className={`relative h-auto lg:h-screen text-justify tracking-wide flex flex-col lg:flex-row ${
        isLightMode ? "text-black bg-white" : "dark:text-white bg-gray-900"
      } transition-colors duration-300`}
    >
      <section
        className={`w-auto lg:w-[40%] bg-cover bg-center grid place-items-center px-5 sm:px-10 xl:px-20 h-[calc(35vh-56px)] lg:h-auto ${
          accessibility.hideImages
            ? "bg-none"
            : isLightMode
            ? "bg-[url('/stacked-peaks-haikei.svg')]"
            : "bg-[url('/stacked-peaks-haikei.svg')]"
        }`}
      >
        <div className="space-y-5">
          {/* Apply conditional classes for h1 based on light/dark mode */}
          <h1
            className={`text-4xl sm:text-5xl font-semibold  font-serif ${
              isLightMode ? "text-black font-work-sans" : "text-white"
            }`}
          >
            We are India's only startup kickstarter under one roof solution
          </h1>
          <p
            className={`hidden lg:block  " ${
              isLightMode ? " text-lightText text-xl font-normal " : " text-lightText font-normal text-md  "
            }`}
          >
            We proudly stand as the sole Startup Kickstarter in the Indian
            Diaspora. So, don't just get excited about Shark Tank; we are here
            to fuel your startup dreams with our expertise. Startups are like
            babies, cherished by their founders with all their hearts, but even
            they don't always know what to do with them—that's where we come
            into the picture.
          </p>
          <button
            onClick={() => dispatch(setIsOpenRequestProposal(true))}
            className={`border ${
              isLightMode ? "border-black" : "border-white"
            } px-5 py-2.5 rounded-md text-xl font-normal text-buttonText hover:bg-customBlueHover bg-customBlue hover:text-white duration-200 hidden lg:block`}
          >
            Get my custom quote
          </button>
        </div>
      </section>

      <section className="w-auto lg:w-[70%]">
        {!isLightMode && (
          <>
            <div className="h-full">
              {/* Video Element */}
              {/* <video
                autoPlay
                loop
                playsInline
                className="object-cover object-center w-full h-full hidden lg:block"
                src="https://cdn.dribbble.com/userupload/5582973/file/original-d10bc667d64989b2572d660a236c1f18.mp4"
              ></video> */}
              <Spline
                scene="https://prod.spline.design/OCqLxoD9ezUz6Xsn/scene.splinecode"
                className="object-cover object-center w-full h-full hidden lg:block"
              />
            </div>

            <div
              className={`relative w-full h-[calc(65vh)] bg-cover bg-center block lg:hidden ${
                accessibility.hideImages
                  ? "bg-none"
                  : "bg-[url(/night-mobile.jpg)]"
              }`}
            >
              <div className="absolute bottom-0 left-0 flex flex-col justify-end px-5 sm:px-20 pb-5 space-y-5 text-sm font-light dark:text-slate-300 text-slate-800 bg-gradient-to-b from-black/0 via-black/25 to-black/50 h-full">
                <p
                  className={`font-serif text-4xl -mb-2.5 ${
                    isLightMode ? "" : ""
                  }`}
                >
                  Adiya Business Solution
                </p>
                <p className={`${isLightMode ? "text-2xl font-medium font-serif ":" text-2xl font-medium font-serif "}`}>
                  As the only Startup Kickstarter in the Indian Diaspora, we
                  take great pride in our status. Thus, don't simply get excited
                  about Shark Tank; we are here to use our experience to drive
                  your startup aspirations.
                </p>
                <button
                  onClick={() => dispatch(setIsOpenRequestProposal(true))}
                  className={`border ${
                    isLightMode ? "border-black " : "border-white bg-customBlue"
                  } px-5 py-2.5 rounded-md text-lg hover:bg-customBlue hover:text-white duration-200 w-fit`}
                >
                  Get my custom quote
                </button>
              </div>
            </div>
          </>
        )}

        {isLightMode && (
          <>
            <div className="h-full">
              <Spline
                scene="https://prod.spline.design/LA8BMarz0cqDAA2T/scene.splinecode"
                className="object-cover object-center h-full hidden lg:block"
              />
            </div>

            <div
              className={`relative w-full h-[calc(65vh)] bg-cover bg-center block lg:hidden ${
                accessibility.hideImages
                  ? "bg-none"
                  : "bg-[url(/day-mobile.jpg)] object-cover" 
              }`}
            >
              <div className="absolute bottom-0 left-0 flex flex-col justify-end px-5 sm:px-20 pb-5 space-y-5 text-sm font-light  bg-gradient-to-b h-full">
                <p
                  className={`font-serif text-4xl font-bold -mb-2.5 ${
                    isLightMode ? "text-white" : "text-customBlue"
                  }`}
                >
                  Adiya Business Solution
                </p>
                <p className={`${isLightMode ? "text-2xl font-medium font-serif  ":" text-2xl font-medium font-serif "}`}>
                  We proudly stand as the sole Startup Kickstarter in the Indian
                  Diaspora. So, don't just get excited about Shark Tank; we are
                  here to fuel your startup dreams with our expertise. Startups
                  are like babies, cherished by their founders with all their
                  hearts, but even they don't always know what to do with them—
                  that's where we come into the picture.
                </p>
                <button
                  onClick={() => dispatch(setIsOpenRequestProposal(true))}
                  className={`border ${
                    isLightMode ? " text-blue-50 font-normal text-xl bg-customBlue" : "border-white bg-customBlue"
                  } px-5 py-2.5 rounded-md text-lg hover:bg-customBlueHover hover:text-white duration-200 w-fit`}
                >
                  Get my custom quote
                </button>
              </div>
            </div>
          </>
        )}
      </section>
          {/* Darkmode Lightmode */}
      <section className="absolute h-fit lg:top-0 top-[calc(35vh-56px+20px)] lg:bottom-0 lg:my-auto right-5 lg:left-[40%] space-y-2.5">
        <button
          onClick={() => setSound(!sound)}
          className="relative bg-gradient-to-b from-slate-800 to-slate-700 border-4 border-slate-600 w-32 h-14 rounded-full -ml-16 hidden lg:block"
        >
          <span
            className={`absolute top-1 w-10 h-10 bg-white rounded-full grid place-items-center text-slate-700 text-xl duration-200 ${
              sound ? "right-[76px]" : "right-1"
            }`}
          >
            <RxSpeakerLoud
              className={`absolute duration-200 ${
                !sound ? "invisible opacity-0" : "visible opacity-100"
              }`}
            />
            <RxSpeakerOff
              className={`absolute duration-200 ${
                sound ? "invisible opacity-0" : "visible opacity-100"
              }`}
            />
          </span>
        </button>
        <audio
          ref={audioRef}
          controls
          src="/music.mp3"
          className="hidden"
        ></audio>
      </section>
    </main>
  );
};

export default Banner;
