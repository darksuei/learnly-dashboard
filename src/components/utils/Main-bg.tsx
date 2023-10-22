import "../../index.css";

export default function MainBg() {
  return (
    <div className="w-full h-full absolute z-10">
      <div className="w-full bg">
        <div className="bg-child bg-slate-100"></div>
        <div className="bg-mid bg-slate-100"></div>
        <div className="bg-child-last bg-slate-100"></div>
      </div>
    </div>
  );
}
