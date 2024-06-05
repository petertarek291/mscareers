import "./App.css";
import Header from "../src/Components/Header";
import Jobs from "./Components/Jobs/Jobs";
import { useState } from "react";
import Main from "./Components/Main/";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      {!isOpen && (
        <section className="h-48 absolute  w-full bg-black top-14 left-1">
          <Main />
          <button onClick={toggle}>
            Change
          </button>
          </section>
      )}

      {isOpen && (
        <section>
          <Jobs />
        </section>
      )}
      <section className="fixed top-0 bg-red-400">
        <Header />
      </section>
    </>
  );
}

export default App;
