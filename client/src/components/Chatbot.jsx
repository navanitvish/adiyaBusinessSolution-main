import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpenChatbot } from "../store/appSlice";
import { FaRobot } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { VscRefresh } from "react-icons/vsc";
import { BsChevronDoubleRight } from "react-icons/bs";
import { chatbotConfig } from "../configs/chatbotConfig";

const Chatbot = () => {
  const dummyRef = useRef();
  const containerRef = useRef();
  const dispatch = useDispatch();
  const { isOpenChatbot } = useSelector((store) => store.app);
  const [chatbotData, setChatbotData] = useState([]);

  const handleClickQue = (prompt, que) => {
    setChatbotData([
      ...chatbotData,
      { bot: false, prompt: <div className="leading-tight">{que}</div> },
      {
        bot: true,
        prompt: (
          <div className="leading-tight">
            {eval(`chatbotConfig[prompt][que]`)}
          </div>
        ),
      },
    ]);
  };

  const handleClickPrompt = (prompt) => {
    setChatbotData([
      ...chatbotData,
      { bot: false, prompt: <div className="leading-tight">{prompt}</div> },
      {
        bot: true,
        prompt: (
          <section className="text-black space-y-2.5 flex flex-col">
            {Object.keys(eval(`chatbotConfig[prompt]`)).map((i) => (
              <div
                key={i}
                onClick={() => handleClickQue(prompt, i)}
                className="flex space-x-2.5 leading-tight cursor-pointer hover:underline"
              >
                <span className="mt-px text-blue-400">
                  <BsChevronDoubleRight />
                </span>
                <span>{i}</span>
              </div>
            ))}
          </section>
        ),
      },
    ]);
  };

  useEffect(() => {
    dummyRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatbotData]);

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (!containerRef?.current?.contains(e.target)) {
          dispatch(setIsOpenChatbot(false));
          setChatbotData([]);
        }
      },
      true
    );
  }, []);

  return (
    <main
      className={`fixed z-10 top-0 left-0 w-full h-full select-none ${
        isOpenChatbot ? "visible" : "invisible"
      }`}
    >
      <main
        ref={containerRef}
        className={`absolute bottom-[calc(30px+48px)] left-0 right-0 mx-auto sm:left-auto sm:right-[calc(40px+48px)] bg-white w-[350px] sm:w-96 h-96 rounded-3xl overflow-hidden border-2 border-blue-500 border-b-[5px] border-b-blue-500 duration-200 ${
          isOpenChatbot ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <section className="bg-customBlue text-black flex items-center justify-between p-5 text-3xl shadow">
          <FaRobot />
          <div className="flex items-center space-x-2.5">
            <VscRefresh
              onClick={() => setChatbotData([])}
              className="cursor-pointer text-2xl"
            />
            <IoCloseOutline
              onClick={() => {
                dispatch(setIsOpenChatbot(false));
                setChatbotData([]);
              }}
              className="cursor-pointer"
            />
          </div>
        </section>
        <main className="h-[calc(384px-70px)] bg-[url(https://web.telegram.org/a/chat-bg-pattern-light.ee148af944f6580293ae.png)] bg-cover bg-center">
          <main className="bg-white/75 h-[calc(384px-70px)] p-2.5 pr-[5px] space-y-2.5 overflow-y-scroll scrollbar scrollbar-w-[5px] scrollbar-thumb-black scrollbar-thumb-rounded-full">
            <section className="text-black font-medium w-10/12 mr-auto ml-2.5 flex flex-col items-start -mb-2">
              <div>Tell us what you want to know</div>
            </section>

            <section className="text-black font-normal flex flex-wrap">
              {Object.keys(chatbotConfig).map((i) => (
                <button
                  key={i}
                  onClick={() => handleClickPrompt(i)}
                  className="border border-black px-4 py-2 rounded-full w-fit mt-2 mr-2"
                >
                  {i}
                </button>
              ))}
            </section>

            {chatbotData.map((i, j) => (
              <section
                key={j}
                className={`w-10/12 flex flex-col ${
                  i.bot
                    ? "mr-auto ml-2.5 items-start text-customBlue font-normal"
                    : "ml-auto mr-2.5 items-end text-black font-medium"
                }`}
              >
                {i.prompt}
              </section>
            ))}

            <div ref={dummyRef}></div>
          </main>
        </main>
      </main>
    </main>
  );
};

export default Chatbot;
