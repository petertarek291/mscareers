import "./App.css";
import Header from "../src/Components/Header";
import Main from "./Components/Main/";
function App() {

  return (
    <>
      <section className="fixed top-0 bg-red-400">
        <Header />
      </section>

      <section className="h-48 absolute  w-full top-14 left-1">
        <Main />
      </section>
    </>
  );
}

export default App;
