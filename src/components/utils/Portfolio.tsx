import "../../index.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <section className="w-full z-30 flex flex-col gap-5 px-10 portfolio">
      <h1>Portfolio History</h1>
      <div className="flex flex-row w-full gap-10">
        <div className="flex flex-row">
          <PortfolioItem
            date="NOV 19"
            value="$ 9 864.34"
            gain="+ $ 234.23 (30.34%)"
          />
          <PortfolioItem
            date="OCT 19"
            value="$ 7 845.32"
            gain="+ $ 143.56 (15.43%)"
          />
          <PortfolioItem
            date="SEP 19"
            value="$ 7 453.45"
            gain="+ $ -134.23 (-8.34%)"
          />
        </div>
        <div className="w-40 h-40 bg-yellow-300"></div>
      </div>
    </section>
  );
}
