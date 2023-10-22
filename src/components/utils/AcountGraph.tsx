import "../../index.css";

export default function AccountGraph({
  data,
  height,
}: {
  data: string;
  height: string;
}) {
  const length1 = Math.round(Math.random() * 40) + 15;
  const length2 = 20;
  const length3 = 75 - length1;
  console.log(height);

  return (
    <main className="flex flex-col items-center justify-center">
      <div
        style={{ height: `${height}` }}
        className="w-1.5 rounded-xl bg-yellow-200 flex flex-col"
      >
        <div
          style={{ height: `${length1}%` }}
          className="w-full bg-blue-600 rounded-xl"
        ></div>
        <div
          style={{ height: `${length2}%` }}
          className="w-full bg-[#68d391] rounded-xl"
        ></div>
        <div
          style={{ height: `${length3}%` }}
          className="w-full bg-[#ff0000] rounded-xl"
        ></div>
      </div>
      <p className="text-xs">{data}</p>
    </main>
  );
}
