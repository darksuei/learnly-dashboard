import "../../index.css";
import { useState } from "react";

type Params = {
  title: string;
  icon?: string;
  isActive?: boolean;
};

export default function NavItem({ title, icon, isActive }: Params) {
  const [active, setActive] = useState(false);
  function handleMouseEnter() {
    setActive(true);
  }
  function handleMouseLeave() {
    setActive(false);
  }
  return (
    <div className="w-6/12 mx-auto py-3 cursor-pointer">
      <div
        className="flex flex-row items-center justify-start gap-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon && <img src={icon} alt={title} width={20} />}
        <div>
          <h2>{title}</h2>
          {(isActive || active) && <div className="navitem"></div>}
        </div>
      </div>
    </div>
  );
}
