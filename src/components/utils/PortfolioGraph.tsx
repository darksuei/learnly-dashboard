import portfoliograph from "../../assets/images/portfoliograph.png";

type Params = {
  hasGraph?: boolean;
};

export default function PortfolioGraph({ hasGraph }: Params) {
  return (
    <main className="w-full h-24 flex items-center justify-center">
      {hasGraph && <img src={portfoliograph} className="w-full" />}
    </main>
  );
}
