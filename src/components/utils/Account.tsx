import "../../index.css";
import { arrow, dollar } from "../../assets/icons";

export default function Account() {
  return (
    <section className="flex flex-row justify-center gap-8 px-10 w-full h-[27%]">
      <div className="p-6 bg-white w-4/12 relative rounded-2xl">
        <h1 className="text-xl text-center">Upgrade your account</h1>
        <p className="text-sm text-gray-500">
          Access to many other features and helpful insights
        </p>
        <button className="p-3.5 bg-[#262626] absolute bottom-4 right-4 rounded-lg text-red-700">
          <img src={arrow} width={20} />
        </button>
      </div>
      <div className="w-7/12 bg-white rounded-2xl p-5">
        <div className="w-4/12 h-full ml-auto">
          <div className="mb-2">
            <img src={dollar} width={25} className="ml-auto" />
          </div>
          <h2 className="text-xs">Portfolio Value</h2>
          <h1 className="text-3xl">$ 9 864.34</h1>
          <h3 className="text-base text-green-600 mb-2">+ 234.23 (30.34%)</h3>
          <ul>
            <li className="flex flex-row gap-2 items-center text-sm">
              <div className="h-4 w-4 bg-blue-600"></div>Portfolio
            </li>
            <li className="flex flex-row gap-2 items-center text-sm">
              <div className="h-4 w-4 bg-green-400"></div>Dollar
            </li>
            <li className="flex flex-row gap-2 items-center text-sm">
              <div className="h-4 w-4 bg-orange-200"></div>ETFs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
