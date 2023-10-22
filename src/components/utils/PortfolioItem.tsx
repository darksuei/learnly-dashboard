import "../../index.css";
import PortfolioGraph from "./PortfolioGraph";
import uparrow from "../../assets/icons/uparrow.svg";

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
  return (
    <div
      className={`border-2 h-fit py-7 w-52 px-5 rounded-2xl flex flex-col gap-1.5 cursor-pointer ${
        active ? "bg-gray-100" : ""
      }`}
    >
      <div className="mb-2">
        <h2 className="font-semibold text-lg w-fit">{date}</h2>
        <div className="portfolio-line"></div>
      </div>
      <div className="w-full h-2/6"></div>
      <PortfolioGraph hasGraph={active} />
      <h2 className="text-xs">Portfolio Value</h2>
      <h1 className="text-2xl">{value}</h1>
      <h3 className={`text-base flex flex-row ${isGain ? "green" : "red"}`}>
        <img src={uparrow} width={10} />
        {gain}
      </h3>
    </div>
  );
}
