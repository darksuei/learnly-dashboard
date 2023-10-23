import { useState } from "react";
import { ProfileContext } from "./contexts/ProfileContext";

//Components
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const [value, setValue] = useState("$ 9 864.34");
  const [gain, setGain] = useState("234.23 (30.34%)");
  return (
    <ProfileContext.Provider value={{ value, setValue, gain, setGain }}>
      <main className="flex flex-row bg-white wrapper">
        <Nav />
        <Main />
      </main>
    </ProfileContext.Provider>
  );
}

export default App;
