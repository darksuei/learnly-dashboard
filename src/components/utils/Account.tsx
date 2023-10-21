import { arrow } from "../../assets/icons";

export default function Account() {
  return (
    <section className="flex flex-row px-10 gap-10">
      <div className="p-4 bg-white">
        <h1>Upgrade your account</h1>
        <p>Access to many other features and helpful insights</p>
        <button className="p-3">
          <img src={arrow} />
        </button>
      </div>
      <div>
        <div>
          <h2 className="text-xs">Portfolio Value</h2>
          <h1 className="text-3xl">xxx</h1>
          <h3 className="text-base text-green-600">xxx</h3>
        </div>
      </div>
    </section>
  );
}
