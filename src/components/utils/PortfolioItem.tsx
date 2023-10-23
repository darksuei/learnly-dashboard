import "../../index.scss";
import { useState, useContext } from "react";

//Components
import { ProfileContext } from "../../contexts/ProfileContext";
import PortfolioGraph from "./PortfolioGraph";
import { uparrow, downarrow } from "../../assets/icons";

type Params = {
  date: string;
  value: string;
  gain: string;
  isGain: boolean;
  active?: boolean;
};

export default function PortfolioItem({
  date,
  value,
  gain,
  isGain,
  active,
}: Params) {
  const [isActive, setIsActive] = useState(false);
  const { setValue, setGain } = useContext(ProfileContext);
  function handleMouseEnter() {
    setIsActive(true);
    setValue!(value);
    setGain!(gain);
  }
  function handleMouseLeave() {
    setIsActive(false);
  }

  return (
    <div
      className={`mx-auto lg:mx-0 border-2 h-fit py-5 w-7/12 lg:w-52 px-5 rounded-2xl flex flex-col gap-1.5 cursor-pointer ${
        active ? "bg-gray-100" : "bg-white"
      } hover:bg-gray-100`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-2">
        <h2 className="font-semibold text-base w-fit">{date}</h2>
        <div className="portfolio-line"></div>
      </div>
      <div className="w-full h-2/6"></div>
      <PortfolioGraph hasGraph={active || isActive} />
      <h2 className="text-xs">Portfolio Value</h2>
      <h1 className="text-lg">{value}</h1>
      <h3
        className={`text-xs flex flex-row items-center gap-1 ${
          isGain ? "text-green-500" : "red"
        }`}
      >
        {isGain ? (
          <img src={uparrow} width={20} />
        ) : (
          <img src={downarrow} width={20} />
        )}
        {gain}
      </h3>
    </div>
  );
}
