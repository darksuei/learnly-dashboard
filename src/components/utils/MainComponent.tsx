import Menu from "./Menu";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Account from "./Account";

export default function MainComponent() {
  return (
    <div className="z-20 relative h-full flex flex-col justify-between">
      <Menu />
      <Account />
      <Portfolio />
      <Footer />
    </div>
  );
}
