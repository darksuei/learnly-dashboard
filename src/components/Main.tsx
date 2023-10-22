import "../index.css";
import MainBg from "./utils/Main-bg";
import MainComponent from "./utils/MainComponent";

export default function Main() {
  return (
    <section className="main-section h-screen mx-auto relative">
      <MainBg />
      <MainComponent />
    </section>
  );
}
