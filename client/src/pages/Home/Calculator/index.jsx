import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import CalcForm from "./CalcForm";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../../context/ThemeContext"; // Adjust the import path as needed

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.isLightMode ? "#ffffff" : "#a3a0ff",
  height: 7,
  "& .MuiSlider-track": {
    border: "none",
    color: theme.isLightMode ? "#5250ff" : "#5250ff",
  },
  "& .MuiSlider-thumb": {
    color: theme.isLightMode ? "#1e3a8a" : "#a3a0ff",
    height: 20,
    width: 20,
    backgroundColor: theme.isLightMode ? "#ffffff" : "#fff",
    border: `5px solid ${theme.isLightMode ? "#3938c9" : "#3938c9"}`,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
}));

const Calculator = ({ illumination }) => {
  const { requestProposalInputs } = useSelector((store) => store.app);
  const { isLightMode } = useTheme(); // Access the current theme state

  const [isShowCalcForm, setIsShowCalcForm] = useState(false);
  const [inputs, setInputs] = useState({
    "Number of pages": 2,
    "Style of design": 2,
    "Copywriting no. of pages": 2,
    "SEO placement guarantee": 2,
    "Responsive design": 2,
    "Database integration": 2,
    "E-Commerce functionality": 2,
    CMS: 2,
  });
  const [calcQuotes, setCalcQuotes] = useState({
    "Number of pages": "10-50",
    "Style of design": "Simple",
    "Copywriting no. of pages": "5-10",
    "SEO placement guarantee": "30",
    "Responsive design": "Yes",
    "Database integration": "Basic",
    "E-Commerce functionality": "Basic",
    CMS: "Standard",
  });

  const handleChange = (param) => (e) => {
    const val = e.target.value;
    setInputs({ ...inputs, [param]: val });
    // Update quotes based on the parameter and value
    // ... (same as your existing logic)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...requestProposalInputs, calcQuotes });
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/proposal`, {
        ...requestProposalInputs,
        calcQuotes,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main
      className={`flex flex-col items-center py-10 space-y-10 ${
        isLightMode ? "bg-top-light" : "bg-top-dark"
      }`}
    >
      <h1
        className={`text-6xl sm:text-5xl  text-center font-bold lg:mb-0 ${
          isLightMode ? "text-black" : "text-customBlue"
        }`}
        data-aos="fade-up-left"
      >
        Quote Calculator
      </h1>

      {/* Add left image and main content side by side */}
      <div className="flex flex-col lg:flex-row max-w-7xl w-10/12 mx-auto gap-10">
        {/* Left side image */}
        <section
          className="w-full lg:w-2/4 mb-10 lg:mb-8 mt-8"
          data-aos="fade-up-right"
        >
          <img
            src="https://cdn.dribbble.com/users/1961650/screenshots/5641178/media/9dff9982fefd62111032346e2cd6edd0.gif"
            alt="Calculator"
            className="w-auto h-full object-cover rounded-lg"
          />
        </section>

        {/* Right side: Main form content */}
        <form
          onSubmit={handleSubmit}
          className={`h-auto w-full lg:w-2/3 flex flex-col items-center justify-center mb-10 lg:mb-0 py-6 p-4 ${
            isLightMode ? "bg-white text-black" : "bg-dark-800 text-white"
          }`}
          data-aos="fade-left"
        >
          {!isShowCalcForm ? (
            <main className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Form sections */}
              {/* Repeat these sections for each form input */}
              <section className="flex flex-col items-center space-y-4">
                <span className="font-semibold">Number of pages</span>
                <div className="w-72 px-4 py-1 rounded-xl">
                  <CustomSlider
                    value={inputs["Number of pages"]}
                    onChange={handleChange("Number of pages")}
                    step={1}
                    min={1}
                    max={5}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["Number of pages"]}
                </div>
              </section>

              {/* Repeat similar sections for other form inputs */}
              {/* ... */}
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">Style of design</span>
                <div className="w-72  px-4 py-1 rounded-xl">
                  <CustomSlider
                    value={inputs["Style of design"]}
                    onChange={handleChange("Style of design")}
                    step={1}
                    min={1}
                    max={5}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["Style of design"]}
                </div>
              </section>
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">Copywriting no. of pages</span>
                <div className="w-72   px-4 py-1 rounded-xl ">
                  <CustomSlider
                    value={inputs["Copywriting no. of pages"]}
                    onChange={handleChange("Copywriting no. of pages")}
                    step={1}
                    min={1}
                    max={4}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["Copywriting no. of pages"]}
                </div>
              </section>
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">SEO placement guarantee</span>
                <div className="w-72   px-4 py-1 rounded-xl">
                  <CustomSlider
                    value={inputs["SEO placement guarantee"]}
                    onChange={handleChange("SEO placement guarantee")}
                    step={1}
                    min={1}
                    max={4}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["SEO placement guarantee"]}
                </div>
              </section>
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">Responsive design</span>
                <div className="w-72   px-4 py-1 rounded-xl ">
                  <CustomSlider
                    value={inputs["Responsive design"]}
                    onChange={handleChange("Responsive design")}
                    step={1}
                    min={1}
                    max={2}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["Responsive design"]}
                </div>
              </section>
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">Database integration</span>
                <div className="w-72  px-4 py-2 rounded-xl ">
                  <CustomSlider
                    value={inputs["Database integration"]}
                    onChange={handleChange("Database integration")}
                    step={1}
                    min={1}
                    max={4}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["Database integration"]}
                </div>
              </section>
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">E-Commerce functionality</span>
                <div className="w-72   px-4 py-1 rounded-xl ">
                  <CustomSlider
                    value={inputs["E-Commerce functionality"]}
                    onChange={handleChange("E-Commerce functionality")}
                    step={1}
                    min={1}
                    max={4}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes["E-Commerce functionality"]}
                </div>
              </section>
              <section className="flex flex-col items-center space-y-2">
                <span className=" font-semibold">CMS</span>
                <div className="w-72  px-4 py-1 rounded-xl">
                  <CustomSlider
                    value={inputs.CMS}
                    onChange={handleChange("CMS")}
                    step={1}
                    min={1}
                    max={4}
                  />
                </div>
                <div
                  className={`w-32 h-10 border-2 rounded-md grid place-items-center text-lg font-normal shadow-md ${
                    isLightMode ? "border-black" : "border-white"
                  }`}
                >
                  {calcQuotes.CMS}
                </div>
              </section>
            </main>
          ) : (
            <CalcForm
              calcQuotes={calcQuotes}
              requestProposalInputs={requestProposalInputs}
            />
          )}

          {!isShowCalcForm ? (
            <div className="p-4">
              <button
                onClick={() => setIsShowCalcForm(!isShowCalcForm)}
                className={`border-2 px-8 py-2 text-xl font-normal rounded-md ${
                  isLightMode
                    ? "border-blue-800 bg-customBlueHover hover:bg-customBlue text-white hover:border-white"
                    : "border-white bg-customBlueHover hover:bg-customBlueHover hover:text-black hover:border-white"
                }`}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="space-x-2.5">
              <button
                onClick={() => setIsShowCalcForm(!isShowCalcForm)}
                className={`border px-5 py-1.5 text-lg rounded-md ${
                  isLightMode
                    ? "border-slate-200  hover:bg-customBlueHover"
                    : "border-slate-200  hover:bg-customBlueHover"
                }`}
              >
                Go back
              </button>
              <button
                type="submit"
                className={`border px-5 py-1.5 text-lg rounded-md ${
                  isLightMode
                    ? "border-slate-200 hover:border-blue-400 hover:bg-customBlueHover"
                    : "border-slate-200 hover:border-blue-400 hover:bg-customBlueHover"
                }`}
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Calculator;
