import "../../index.css";
import { arrow } from "../../assets/icons";
import icon from "../../assets/images/icon.png";
import AccountInfo from "./AccountInfo";

export default function Account() {
  return (
    <section className="flex flex-row justify-between w-10/12 mx-auto h-[27%]">
      <div className="p-6 bg-white w-4/12 relative rounded-2xl shadow h-56">
        <h1 className="text-xl text-center mb-3">Upgrade your account</h1>
        <p className="text-xs text-gray-500 w-6/12 ml-auto">
          Access to many other features and helpful insights
        </p>
        <img src={icon} className="accounticon" />
        <button className="p-3.5 bg-[#262626] absolute bottom-4 right-4 rounded-lg text-red-700">
          <img src={arrow} width={20} />
        </button>
      </div>
      <AccountInfo />
    </section>
  );
}
