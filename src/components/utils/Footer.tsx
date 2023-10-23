import "../../index.scss";
import { apple } from "../../assets/icons";
import { tableHeaders, tableItems } from "./data";

export default function Footer() {
  return (
    <footer className="z-30 py-2 lg:w-11/12 w-fit lg:mx-auto lg:px-4">
      <table className="w-full text-xs">
        <tr>
          {tableHeaders.map((item, index) => {
            return (
              <th className="text-[#ccc]" key={index}>
                {item}
              </th>
            );
          })}
        </tr>
        <tr>
          <td className="flex flex-row justify-center items-center gap-3">
            <img src={apple} className="w-5" />
            <span>AAPL</span>
          </td>
          {tableItems.map((items, index) => {
            return <td key={index}>{items}</td>;
          })}
        </tr>
      </table>
    </footer>
  );
}
