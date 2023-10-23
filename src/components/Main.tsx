import "../index.scss";
// Components
import MainBg from "./utils/Main-bg";
import MainComponent from "./utils/MainComponent";

export default function Main() {
  return (
    <section className="main-section mx-auto relative">
      <MainBg />
      <MainComponent />
    </section>
  );
}
