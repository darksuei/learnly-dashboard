import { dollar } from "../../assets/icons";
import AccountGraph from "./AcountGraph";

export default function AccountInfo() {
  const timeframe = ["1d", "1w", "1m", "1y", "All"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const portfolioitems = [
    "Portfolio;bg-blue-500",
    "Dollar;bg-green",
    "ETFs;bg-red",
  ];

  return (
    <main className="w-7/12 bg-white rounded-2xl p-5 flex flex-row">
      <div className="w-7/12">
        <div className="flex flex-row gap-3">
          {timeframe.map((time, index) => {
            return (
              <span
                key={index}
                className="border-2 px-1 cursor-pointer rounded-lg text-xs text-gray-700"
              >
                {time}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row gap-2">
          {months.map((month, index) => {
            return <AccountGraph key={index} data={month} />;
          })}
        </div>
      </div>

      <div className="w-4/12 h-full ml-auto">
        <div className="mb-2">
          <img src={dollar} width={25} className="ml-auto" />
        </div>
        <h2 className="text-xs">Portfolio Value</h2>
        <h1 className="text-3xl">$ 9 864.34</h1>
        <h3 className="text-base text-green-600 mb-2">+ 234.23 (30.34%)</h3>
        <ul>
          {portfolioitems.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-row gap-2 items-center text-xs"
              >
                <div className={`h-3 w-3 ${item.split(";")[1]}`}></div>
                {item.split(";")[0]}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
