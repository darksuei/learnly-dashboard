import "../../index.css";

export default function AccountGraph({ data }: { data: string }) {
  const length1 = Math.round(Math.random() * 50);
  const length2 = 20;
  const length3 = 80 - length1;

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="h-32 w-1.5 rounded-xl bg-yellow-200 flex flex-col">
        <div
          style={{ height: `${length1}%` }}
          className="w-full bg-blue-600 rounded-xl"
        ></div>
        <div
          style={{ height: `${length2}%` }}
          className="w-full bg-[#00ff00] rounded-xl"
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
