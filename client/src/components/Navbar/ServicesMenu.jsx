import { useNavigate } from "react-router-dom";

const ServicesMenu = ({ isOpenServices, setIsOpenServices }) => {
  const navigate = useNavigate();

  return (
    <ul
      onMouseEnter={() => setIsOpenServices(true)}
      onMouseLeave={() => setIsOpenServices(false)}
      className={`absolute top-[26px] left-0  bg-gradient-to-br from-black/75 via-emerald-950/75 to-black/75 shadow  hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText p-2.5 rounded-xl w-max duration-100 overflow-hidden ${
        isOpenServices
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-75"
      }`}
    
    >
      <li
        onClick={() => {
          navigate("/services/app-&-website-development");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        App & website development
      </li>
      <li
        onClick={() => {
          navigate("/services/digital-marketing");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        Digital marketing
      </li>
      <li
        onClick={() => {
          navigate("/services/crm-&-erp");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        CRM & ERP
      </li>
      <li
        onClick={() => {
          navigate("/services/pilot-run-&-market-fit-testing");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        Pilot run & market fit testing
      </li>
      <li
        onClick={() => {
          navigate("/services/investment-deck");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        Investment deck
      </li>
      <li
        onClick={() => {
          navigate("/services/research-&-market-penetration");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        Research & market penetration
      </li>
      <li
        onClick={() => {
          navigate("/services/game-&-graphic-development");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        Game & graphic development
      </li>
      <li
        onClick={() => {
          navigate("/services/onboarding-&-bdm");
          setIsOpenServices(false);
        }}
        className="px-2.5 py-1 hover:bg-customBlue text-md font-normal text-lightText hover:text-lightText cursor-pointer rounded-md"
      >
        Onboarding & BDM
      </li>
    </ul>
  );
};

export default ServicesMenu;
