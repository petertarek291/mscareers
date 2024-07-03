import "./App.css";
import Header from "../src/Components/Header";
import Main from "./Components/Main/";
import { Routes, Route } from "react-router-dom";
import Postedjobs from "./Components/Jobs/Postedjobs";
import ChosenRole from "./Components/Jobs/ChosenRole";
import { useState } from "react";
function App() {
  const [selectedJob, setSelectedJob] = useState()
  return (
    <>
      <section className="fixed top-0 bg-red-400">
        <Header />
      </section>

      <Routes>
        <Route
          path="/"
          element={
            <section className="h-48 absolute  w-full top-14 left-1">
              <Main />
            </section>
          }
        />
        <Route
          path="/search"
          element={
            <section className="h-48 absolute  w-full top-14 left-1">
              <Postedjobs onSelectJob={ setSelectedJob} />
            </section>
          }
        />
        
      </Routes>
    </>
  );
}

export default App;
