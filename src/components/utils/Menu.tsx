import "../../index.css";
import { star, alarm, plus } from "../../assets/icons";

export default function Menu() {
  return (
    <div className="flex flex-row items-center justify-around lg:justify-center gap-1 md:gap-4 lg:gap-7 w-10/12 lg:w-7/12 h-20 ml-auto z-30 text-sm">
      <div className="flex flex-row gap-2 items-center justify-center text-[#6c6c6c] h-full relative">
        <img src={star} width={20} />
        <span className="sm:w-24">US stock market opens in 3 hours</span>
      </div>
      <select className="py-2 outline-none rounded-lg bg-[#f2f2f2] text-[#6c6c6c] cursor-pointer">
        <option className="py-4 text-xs">Main Wallet</option>
        {/* <option className="py-4 text-xs">Secondary Wallet</option> */}
      </select>
      <div className="relative p-1">
        <div className="w-1.5 h-1.5 z-50 rounded-full bg-[#ff0000] absolute top-0 right-0"></div>
        <img src={alarm} width={20} className="cursor-pointer" />
      </div>
      <div className="">
        <img src={plus} width={32} className="cursor-pointer hover:w-10" />
      </div>
    </div>
  );
}
