import "../../index.css";
import { star, alarm, plus } from "../../assets/icons";

export default function Menu() {
  return (
    <div className="flex flex-row items-center justify-center gap-7 w-7/12 h-20 ml-auto z-30 text-sm">
      <div className="flex flex-row gap-2 items-center justify-center text-[#6c6c6c] h-full">
        <img src={star} width={20} />
        <span>US stock market opens in 3 hours</span>
      </div>
      <select className="h-fit py-2 outline-none rounded-md bg-[#f2f2f2] text-[#6c6c6c] cursor-pointer px-3">
        <option className="p-4">Main Wallet</option>
        <option className="p-4">Secondary Wallet</option>
      </select>
      <div className="relative p-1">
        <div className="w-1.5 h-1.5 z-50 rounded-full bg-[#ff0000] absolute top-0 right-0"></div>
        <img src={alarm} className="w-5 cursor-pointer" />
      </div>
      <div className="">
        <img src={plus} className="w-9 cursor-pointer" />
      </div>
    </div>
  );
}
