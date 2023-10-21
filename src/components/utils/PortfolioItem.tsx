import "../../index.css";

type Params = {
  date: string;
  value: string;
  gain: string;
};

export default function PortfolioItem({ date, value, gain }: Params) {
  return (
    <div className="border-2 h-fit py-7 px-5 rounded-2xl">
      <div className="my-5">
        <h2 className="font-semibold text-lg w-fit">{date}</h2>
        <div className="portfolio-line"></div>
      </div>
      <div className="w-full h-2/6"></div>
      <h2 className="text-xs">Portfolio Value</h2>
      <h1 className="text-3xl">{value}</h1>
      <h3 className="text-base text-green-600">{gain}</h3>
    </div>
  );
}
