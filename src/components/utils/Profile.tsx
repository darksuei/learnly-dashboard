import usericon from "../../assets/images/user-icon.png";

export default function Profile({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-3 w-full lg:w-10/12 ml-auto ${
        isActive ? "mt-8 mb-10" : "mb-14"
      }`}
    >
      <div className="w-10 h-10 rounded-xl">
        <img src={usericon} className="w-10 h-10 rounded-xl" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm">Kristen Ramos</h1>
        <p className="text-xs">kristen.ramos@email.com</p>
      </div>
    </div>
  );
}
