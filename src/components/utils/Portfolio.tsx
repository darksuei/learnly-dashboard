import "../../index.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <section className="w-full z-30 flex flex-col gap-3">
      <h1>Portfolio History</h1>
      <div className="flex flex-row w-full gap-10 items-center justify-between">
        <div className="flex flex-row gap-5 w-8/12">
          <PortfolioItem
            date="NOV 19"
            value="$ 9 864.34"
            gain="+ 234.23 (30.34%)"
            isGain={true}
          />
          <PortfolioItem
            date="OCT 19"
            value="$ 7 845.32"
            gain="+ 143.56 (15.43%)"
            isGain={true}
          />
          <PortfolioItem
            date="SEP 19"
            value="$ 7 453.45"
            gain="+ -134.23 (-8.34%)"
            isGain={false}
          />
        </div>
        <div className="w-5/12 flex items-center justify-center">
          <div className="w-60 h-60 bg-blue-700 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
