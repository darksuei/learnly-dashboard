import { star, alarm, plus } from "../../assets/icons";

export default function Menu() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 w-6/12 h-20 ml-auto z-30">
      <div className="flex flex-row gap-2 items-center justify-center text-[#6c6c6c]">
        <img src={star} width={20} />
        <span>US stock market opens in 3 hours</span>
      </div>
      <select className=" h-10 mt-2 rounded-md bg-[#f2f2f2] text-[#6c6c6c]">
        <option>Main Wallet</option>
      </select>
      <div>
        <img src={alarm} className="w-6" />
      </div>
      <div className="">
        <img src={plus} className="w-8" />
      </div>
    </div>
  );
}
