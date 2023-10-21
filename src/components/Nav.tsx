import NavItem from "./utils/NavItem";
import Profile from "./utils/Profile";
import { dashboard, performance, wallet, logout } from "../assets/icons";

export default function Nav() {
  return (
    <nav className="nav h-screen relative py-10 bg-red-100 text-sm">
      <Profile />
      <ul className="w-full flex flex-col gap-y-5 items-center my-5">
        <li className="w-full">
          <NavItem title="Dashboard" isActive={true} icon={dashboard} />
        </li>
        <li className="w-full">
          <NavItem title="Performance" icon={wallet} />
        </li>
        <li className="w-full">
          <NavItem title="Holdings" icon={performance} />
        </li>
      </ul>
      <div className="absolute bottom-10 w-full">
        <NavItem title="Logout" icon={logout} />
      </div>
    </nav>
  );
}
