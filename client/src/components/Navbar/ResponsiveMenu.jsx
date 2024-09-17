import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
//import {navData} from "./index";
import PropTypes from 'prop-types';
const ResponsiveMenu = ({ isOpenResponsiveMenu, setIsOpenResponsiveMenu }) => {
  const navigate = useNavigate();
  const [isOpenServices, setIsOpenServices] = useState(false);
  // 195.2px - 244px
  return (
    <ul
      className={`fixed lg:hidden   w-full z-10 top-14 left-0 bg-customBlue font-medium shadow overflow-hidden text-white text-lg md:text-2xl md:font-medium duration-200 ${
        isOpenResponsiveMenu
          ? isOpenServices
            ? "h-[calc(195.2px+390.4px)]"
            : "h-[195.2px] "
          : "h-0"
      }`}
    >
      <li
        onClick={() => {
          navigate("/");
          setIsOpenServices(false);
          setIsOpenResponsiveMenu(false);
        }}
        className="py-3 px-5 cursor-pointer border-b"
      >
        Home
      </li>
      <li
        onClick={() => {
          navigate("/about");
          setIsOpenServices(false);
          setIsOpenResponsiveMenu(false);
        }}
        className="py-3 px-5 cursor-pointer border-b"
      >
        About
      </li>
      <li
        onClick={() => setIsOpenServices(!isOpenServices)}
        className={`py-3 px-5 cursor-pointer flex items-center justify-between ${
          isOpenServices ? "bg-customBlue" : "bg-transparent"
        }`}
      >
        <span>Services</span>
        <BsChevronDown
          className={`duration-200 ${isOpenServices ? "-rotate-180" : ""}`}
        />
      </li>
      <ul
        className={`bg-customBlue overflow-hidden  text-md font-normal  text-lightText duration-100 ${
          isOpenServices ? "h-[390.4px]" : "h-0"
        }`}
      >
        <li
          onClick={() => {
            navigate("/services/app-&-website-development");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b border-t"
        >
          App & website development
        </li>
        <li
          onClick={() => {
            navigate("/services/digital-marketing");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b"
        >
          Digital marketing
        </li>
        <li
          onClick={() => {
            navigate("/services/crm-&-erp");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b"
        >
          CRM & ERP
        </li>
        <li
          onClick={() => {
            navigate("/services/pilot-run-&-market-fit-testing");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b"
        >
          Pilot run & market fit testing
        </li>
        <li
          onClick={() => {
            navigate("/services/investment-deck");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b"
        >
          Investment deck
        </li>
        <li
          onClick={() => {
            navigate("/services/research-&-market-penetration");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b"
        >
          Research & market penetration
        </li>
        <li
          onClick={() => {
            navigate("/services/game-&-graphic-development");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer border-b"
        >
          Game & graphic development
        </li>
        <li
          onClick={() => {
            navigate("/services/onboarding-&-bdm");
            setIsOpenServices(false);
            setIsOpenResponsiveMenu(false);
          }}
          className="py-3 px-10 cursor-pointer "
        >
          Onboarding & BDM
        </li>
      </ul>
      <li
        onClick={() => {
          navigate("/faqs");
          setIsOpenServices(false);
          setIsOpenResponsiveMenu(false);
        }}
        className="py-3 px-5 cursor-pointer border-t border-b border-b-customBlue"
      >
        Faqs
      </li>
      {/* <li
        onClick={() => {
          navigate("/contact");
          setIsOpenServices(false);
          setIsOpenResponsiveMenu(false);
        }}
        className="py-2.5 px-5 cursor-pointer border-b border-b-emerald-500"
      >
        Contact
      </li> */}
    </ul>
  );
};

export default ResponsiveMenu;
ResponsiveMenu.propTypes = {
  isOpenResponsiveMenu: PropTypes.bool.isRequired,
  setIsOpenResponsiveMenu: PropTypes.func.isRequired,
};