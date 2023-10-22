import "../../index.css";
import PortfolioItem from "./PortfolioItem";
import industries from "../../assets/images/industries.png";

export default function Portfolio() {
  return (
    <section className="w-10/12 mx-auto z-30 flex flex-col gap-1 mt-10">
      <h1 className="text-sm px-3 font-semibold">Portfolio History</h1>
      <div className="flex flex-row w-full gap-3 items-center justify-between">
        <div className="flex flex-row justify-between w-8/12">
          <PortfolioItem
            date="NOV 19"
            value="$ 9 864.34"
            gain="234.23 (30.34%)"
            isGain={true}
          />
          <PortfolioItem
            date="OCT 19"
            value="$ 7 845.32"
            gain="143.56 (15.43%)"
            isGain={true}
            active={true}
          />
          <PortfolioItem
            date="SEP 19"
            value="$ 7 453.45"
            gain="-134.23 (-8.34%)"
            isGain={false}
          />
        </div>
        <div className="w-4/12 flex items-center justify-end">
          <div className="bg-blue-700 rounded-3xl flex items-center justify-center">
            <img
              src={industries}
              className="w-72 cursor-pointer hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
