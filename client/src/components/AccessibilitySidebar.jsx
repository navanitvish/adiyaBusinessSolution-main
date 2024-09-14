import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsOpenAccessibilitySidebar,
  setAccessibility,
} from "../store/appSlice";
import { BsArrowBarLeft } from "react-icons/bs";
import { IoInvertMode } from "react-icons/io5";
import { MdHideImage } from "react-icons/md";
import { ImTextWidth, ImTextHeight } from "react-icons/im";
import { FaPause, FaPlay } from "react-icons/fa6";
import { VscRefresh } from "react-icons/vsc";
import { PiSealCheckFill, PiTextBFill } from "react-icons/pi";

const AccessibilitySidebar = () => {
  const dispatch = useDispatch();
  const { isOpenAccessibilitySidebar, accessibility } = useSelector(
    (store) => store.app
  );
  const [isOversize, setIsOversize] = useState(false);

  return (
    <main
      className={`fixed z-50 top-0 left-0 w-full h-full bg-black/25 ${
        isOpenAccessibilitySidebar ? "visible" : "invisible"
      }`}
    >
      <main
        className={`mr-auto  bg-customBlue h-full duration-200 ${
          isOpenAccessibilitySidebar
            ? "ml-0 opacity-100"
            : isOversize
            ? "-ml-96 opacity-0"
            : "-ml-80 opacity-0"
        } ${isOversize ? "w-96" : "w-80"}`}
      >
        <section className="flex items-center justify-between px-5 h-14 text-white font-extralight">
          <span className="text-2xl font-medium ">Accessibility menu</span>
          <BsArrowBarLeft
            onClick={() => dispatch(setIsOpenAccessibilitySidebar(false))}
            className="text-2xl cursor-pointer"
          />
        </section>
        <section className="relative bg-white h-full rounded-3xl p-5 space-y-5">
          <section className="flex items-center justify-between">
            <span className={`duration-200 text-md  font-semibold ${isOversize && "scale-110 ml-2"}`}>
              Oversized widget
            </span>
            <button
              onClick={() => setIsOversize(!isOversize)}
              className={`relative w-14 h-7 rounded-full duration-200 ${
                isOversize ? " bg-indigo-500" : "bg-slate-600"
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 rounded-full grid place-items-center text-slate-700 duration-200 ${
                  isOversize ? "left-8 bg-white" : "left-1 bg-slate-500"
                }`}
              ></span>
            </button>
          </section>
          <section className="grid grid-cols-2 gap-2.5">
            <div
              onClick={() =>
                dispatch(
                  setAccessibility({
                    ...accessibility,
                    invertColors: !accessibility.invertColors,
                  })
                )
              }
              className={`relative border bg-indigo-200 text-md font-normal border-customBlue hover:border-customBlue rounded-xl duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isOversize ? "h-32" : "h-28"
              } ${accessibility.invertColors && " border-customBlue"}`}
            >
              <IoInvertMode
                className={`duration-200 mb-0.5 text-slate-500 ${
                  isOversize ? "text-[45px]" : "text-[33px]"
                }`}
              />
              <span className={`duration-200 text-md font-normal ${isOversize && "scale-110"}`}>
                Invert colors
              </span>
              {accessibility.invertColors && (
                <PiSealCheckFill className="absolute top-1 right-1 text-customBlue text-xl" />
              )}
            </div>
            <div
              onClick={() =>
                dispatch(
                  setAccessibility({
                    ...accessibility,
                    hideImages: !accessibility.hideImages,
                  })
                )
              }
              className={`relative border bg-indigo-100 border-indigo-200 hover:border-customBlue rounded-xl duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isOversize ? "h-32" : "h-28"
              } ${accessibility.hideImages && "border-customBlue"}`}
            >
              <MdHideImage
                className={`duration-200 mb-0.5 text-slate-500 ${
                  isOversize ? "text-[45px]" : "text-[33px]"
                }`}
              />
              <span className={`duration-200 text-md font-normal ${isOversize && "scale-110"}`}>
                Hide images
              </span>
              {accessibility.hideImages && (
                <PiSealCheckFill className="absolute top-1 right-1 text-black font-semibold text-xl" />
              )}
            </div>
            <div
              onClick={() =>
                dispatch(
                  setAccessibility({
                    ...accessibility,
                    textSpacing: !accessibility.textSpacing,
                  })
                )
              }
              className={`relative border bg-indigo-100 border-indigo-200 hover:border-customBlue rounded-xl duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isOversize ? "h-32" : "h-28"
              } ${accessibility.textSpacing && "border-customBlue"}`}
            >
              <ImTextWidth
                className={`duration-200 mb-0.5 text-slate-500 ${
                  isOversize ? "text-[45px]" : "text-[33px]"
                }`}
              />
              <span className={`duration-200 text-md font-normal ${isOversize && "scale-110"}`}>
                Text spacing
              </span>
              {accessibility.textSpacing && (
                <PiSealCheckFill className="absolute top-1 right-1 text-black text-xl" />
              )}
            </div>
            <div
              onClick={() =>
                dispatch(
                  setAccessibility({
                    ...accessibility,
                    pauseAnimation: !accessibility.pauseAnimation,
                  })
                )
              }
              className={`relative border bg-indigo-100 border-indigo-200 hover:border-customBlue rounded-xl duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isOversize ? "h-32" : "h-28"
              } ${accessibility.pauseAnimation && "border-customBlue"}`}
            >
              {accessibility.pauseAnimation ? (
                <FaPlay
                  className={`duration-200 mb-0.5 text-slate-500 ${
                    isOversize ? "text-[45px]" : "text-[33px]"
                  }`}
                />
              ) : (
                <FaPause
                  className={`duration-200 mb-0.5 text-slate-500 ${
                    isOversize ? "text-[45px]" : "text-[33px]"
                  }`}
                />
              )}
              <span className={`duration-200 text-md  font-normal ${isOversize && "scale-110"}`}>
                Pause animation
              </span>
              {accessibility.pauseAnimation && (
                <PiSealCheckFill className="absolute top-1 right-1 text-black text-xl" />
              )}
            </div>
            <div
              onClick={() =>
                dispatch(
                  setAccessibility({
                    ...accessibility,
                    biggerText: !accessibility.biggerText,
                  })
                )
              }
              className={`relative border bg-indigo-100 border-indigo-200 hover:border-customBlue rounded-xl duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isOversize ? "h-32" : "h-28"
              } ${accessibility.biggerText && "border-customBlue"}`}
            >
              <PiTextBFill
                className={`duration-200 mb-0.5 text-slate-500 ${
                  isOversize ? "text-[45px]" : "text-[33px]"
                }`}
              />
              <span className={`duration-200 text-md font-normal ${isOversize && "scale-110"}`}>
                Bigger text
              </span>
              {accessibility.biggerText && (
                <PiSealCheckFill className="absolute top-1 right-1 text-black text-xl" />
              )}
            </div>
            <div
              onClick={() =>
                dispatch(
                  setAccessibility({
                    ...accessibility,
                    lineHeight: !accessibility.lineHeight,
                  })
                )
              }
              className={`relative border bg-indigo-100 border-indigo-200 hover:border-customBlue rounded-xl duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isOversize ? "h-32" : "h-28"
              } ${accessibility.lineHeight && "border-customBlue"}`}
            >
              <ImTextHeight
                className={`duration-200 mb-0.5 text-slate-500 ${
                  isOversize ? "text-[40px]" : "text-[28px]"
                }`}
              />
              <span className={`duration-200 text-md font-normal ${isOversize && "scale-110"}`}>
                Line height
              </span>
              {accessibility.lineHeight && (
                <PiSealCheckFill className="absolute top-1 right-1 text-black text-xl" />
              )}
            </div>
          </section>
          <button
            onClick={() =>
              dispatch(
                setAccessibility({
                  invertColors: false,
                  hideImages: false,
                  textSpacing: false,
                  pauseAnimation: false,
                  biggerText: false,
                  lineHeight: false,
                })
              )
            }
            className="w-1/2 text-center py-2.5 text-xl font-normal space-x-1 bg-customBlue ease-in-out hover:bg-customBlueHover hover:text-white  hover:-translate-y-1 hover:scale-110   duration-300 text-white rounded-md flex items-center justify-center"
          >
            <VscRefresh />
            <span>Reset</span>
          </button>
        </section>
      </main>
    </main>
  );
};

export default AccessibilitySidebar;
