import Main from "./components/Main";
import Nav from "./components/Nav";
import { ProfileContext } from "./contexts/ProfileContext";

function App() {
  return (
    <main className="flex flex-row bg-white wrapper">
      <Nav />
      <Main />
    </main>
  );
}

export default App;
