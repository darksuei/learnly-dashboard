import { useState } from "react";
// Components
import NavItem from "./utils/NavItem";
import Profile from "./utils/Profile";
import Hamburger from "./utils/Hamburger";
import { dashboard, performance, wallet, logout } from "../assets/icons";

export default function Nav() {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <Hamburger isActive={isActive} setActive={setActive} />
      <nav
        className={`nav h-screen relative py-10 text-sm ${isActive && "open"}`}
      >
        <Profile isActive={isActive} />
        <ul className="w-full flex flex-col gap-y-5 items-center my-5">
          <li className="w-full">
            <NavItem title="Dashboard" isActive={true} icon={dashboard} />
          </li>
          <li className="w-full">
            <NavItem title="Holdings" icon={wallet} />
          </li>
          <li className="w-full">
            <NavItem title="Performance" icon={performance} />
          </li>
        </ul>
        <div className="absolute bottom-10 w-full">
          <NavItem title="Logout" icon={logout} />
        </div>
      </nav>
    </>
  );
}
