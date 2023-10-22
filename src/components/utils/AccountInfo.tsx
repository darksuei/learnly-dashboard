import { dollar, uparrow } from "../../assets/icons";
import AccountGraph from "./AcountGraph";

export default function AccountInfo() {
  const timeframe = ["1d", "1w", "1m", "1y", "All"];
  const months = [
    "Jan;85px",
    "Feb;95px",
    "Mar;105px",
    "Apr;90px",
    "May;100px",
    "Jun;85px",
    "Jul;75px",
    "Aug;95px",
    "Sep;85px",
    "Oct;75px",
    "Nov;95px",
    "Dec;90px",
  ];
  const portfolioitems = [
    "Portfolio;bg-blue-500",
    "Dollar;bg-green",
    "ETFs;bg-red",
  ];

  return (
    <main className="w-7/12 bg-white rounded-2xl p-5 px-7 flex flex-row justify-center gap-3 shadow h-56">
      <div className="w-8/12">
        <div className="flex flex-row gap-3 items-center h-1/6">
          {timeframe.map((time, index) => {
            return (
              <span
                key={index}
                className={`p-1 px-1.5 h-fit cursor-pointer rounded-lg text-xs text-gray-700 hover:bg-gray-100 ${
                  index === 0 ? "font-bold border border-black" : ""
                }`}
              >
                {time}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row justify-between items-end h-5/6 relative">
          {months.map((month, index) => {
            return (
              <AccountGraph
                key={index}
                data={month.split(";")[0]}
                height={month.split(";")[1]}
              />
            );
          })}
        </div>
      </div>

      <div className="w-3/12 h-full ml-auto">
        <div className="mb-2">
          <img src={dollar} width={25} className="ml-auto" />
        </div>
        <h2 className="text-xs">Portfolio Value</h2>
        <h1 className="text-2xl">$ 9 864.34</h1>
        <h3 className="text-sm font-semibold text-green-600 mb-2 flex flex-row items-center">
          <img src={uparrow} width={20} />
          <span>234.23 (30.34%)</span>
        </h3>
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
