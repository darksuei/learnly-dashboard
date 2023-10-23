import "../../index.scss";
import { arrow } from "../../assets/icons";
import icon from "../../assets/images/icon.png";
import AccountInfo from "./AccountInfo";

export default function Account() {
  return (
    <section className="flex flex-col gap-y-3 lg:flex-row justify-between w-full lg:w-11/12 mx-auto lg:h-[27%]">
      <div className="p-6 bg-white w-11/12 mx-auto md:9/12 lg:w-4/12 relative rounded-2xl shadow h-48">
        <h1 className="text-xl text-center mb-3">Upgrade your account</h1>
        <p className="text-xs text-gray-500 w-6/12 ml-auto">
          Access to many other features and helpful insights
        </p>
        <img src={icon} className="accounticon" />
        <button
          className="p-3.5 bg-[#262626] hover:bg-black absolute bottom-4 right-4 rounded-lg text-red-700"
          onClick={() => {
            alert("Coming Soon!");
          }}
        >
          <img src={arrow} width={20} />
        </button>
      </div>
      <AccountInfo />
    </section>
  );
}
