import { apple } from "../../assets/icons";
export default function Footer() {
  return (
    <footer className="bg-emerald-400 z-30 py-8 w-full">
      <table className="w-full">
        <tr>
          <th className="text-sm text-[#ccc]">PRICE</th>
          <th className="text-sm text-[#ccc]">% RETURN</th>
          <th className="text-sm text-[#ccc]">SYMBOL</th>
          <th className="text-sm text-[#ccc]">TOTAL NET COST</th>
          <th className="text-sm text-[#ccc]">MARKET VALUE</th>
          <th className="text-sm text-[#ccc]">TOTAL GAIN</th>
          <th className="text-sm text-[#ccc]">DAILY GAIN</th>
          <th className="text-sm text-[#ccc]">% PORTFOLIO</th>
        </tr>
        <tr>
          <td className="flex flex-row">
            <img src={apple} className="w-5" />
            <span>AAPL</span>
          </td>
          <td>= $234.00</td>
          <td>$ 45.43</td>
          <td>$ 1 234.00</td>
          <td>$ 1 345.87</td>
          <td>$ 456.34</td>
          <td>- $ 3.45</td>
          <td>13.45%</td>
        </tr>
      </table>
    </footer>
  );
}
