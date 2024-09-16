import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsOpenAccessibilitySidebar,
  setIsOpenRequestProposal,
  setIsOpenChatbot,
} from "../store/appSlice";
import { FaRobot } from "react-icons/fa6";
import { PiCallBellFill, PiPersonArmsSpreadFill } from "react-icons/pi";
import Navbar from "../components/Navbar";
import AccessibilitySidebar from "../components/AccessibilitySidebar";
import RequestProposal from "../components/RequestProposal";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Layout = () => {
  const dispatch = useDispatch();
  const { isOpenRequestProposal, accessibility } = useSelector(
    (store) => store.app
  );

  return (
    <main className="font-urbanist text-slate-700 font-extralight overflow-hidden">
      <main
        className={`${accessibility.textSpacing && "tracking-widest"} ${
          accessibility.biggerText && "text-lg"
        } ${accessibility.lineHeight && "leading-loose"}`}
      >
        <div
          className={`w-full duration-200 ${
            isOpenRequestProposal ? "-ml-80 sm:-ml-[500px]" : "ml-0"
          }`}
        >
          <Navbar accessibility={accessibility} />
          <div className={`${accessibility.invertColors && "invertColors"}`}>
            <Outlet />
          </div>
          <Footer />
          <button
            onClick={() => dispatch(setIsOpenAccessibilitySidebar(true))}
            className="fixed left-2.5 top-0 bottom-0 my-auto bg-customBlue   hover:bg-customBlueHover w-12 h-12 grid place-items-center rounded-full border-2 border-white text-2xl text-white"
          >
            <PiPersonArmsSpreadFill />
          </button>
          <button
            onClick={() => dispatch(setIsOpenRequestProposal(true))}
            className="fixed bottom-5 right-5 bg-customBlue   hover:bg-customBlueHover w-12 h-12 grid place-items-center rounded-full border-2 border-white text-2xl text-white"
          >
            <PiCallBellFill />
          </button>
          <button
            onClick={() => dispatch(setIsOpenChatbot(true))}
            className="fixed bottom-5 right-[calc(40px+48px)] bg-customBlue   hover:bg-customBlueHover w-12 h-12 grid place-items-center rounded-full border-2 border-white text-2xl text-white"
          >
            <FaRobot />
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 z-10 w-full h-full bg-black/25 ${
            isOpenRequestProposal ? "visible" : "invisible"
          }`}
        >
          <div
            className={`ml-auto w-80 sm:w-[500px] duration-200 ${
              isOpenRequestProposal ? "mr-0" : "-mr-80 sm:-mr-[500px]"
            }`}
          >
            <RequestProposal /> 
          </div>
        </div>
      </main>
      <AccessibilitySidebar />
      <Chatbot />
    </main>
  );
};

export default Layout;
