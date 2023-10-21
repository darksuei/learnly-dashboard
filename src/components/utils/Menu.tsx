import { star, alarm, plus } from "../../assets/icons";

export default function Menu() {
  return (
    <div className="flex flex-row items-center gap-5 w-7/12 h-20 bg-red-200 ml-auto relative top-0 z-30">
      <div className="flex flex-row gap-2 items-center text-[#6c6c6c]">
        <img src={star} width={20} />
        <span>US stock market opens in 3 hours</span>
      </div>
      <select className=" h-10 mt-2 rounded-md bg-[#f2f2f2] text-[#6c6c6c]">
        <option>Main Wallet</option>
      </select>
      <div>
        <img src={alarm} className="w-10" />
      </div>
      <div className="bg-black rounded-full p-4">
        <img src={plus} className="w-10" />
      </div>
    </div>
  );
}
