import React, { useRef, useState } from "react";
import "../Main/index.css";
import ImageMe from "../img/GCS_Home Page_Hero.png";

import Postedjobs from "../Jobs/Postedjobs";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const inputRef = useRef();
  function handleSubmit(event) {
    setInputSearch(inputRef.current.value);

    toggle(isOpen);
    event.preventDefault();
  }

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      {!isOpen && (
        <div className="relative block w-full">
          <img src={ImageMe} className="h-96 max-h-96 block w-full" />
          <h1 className="p-10 font-bold absolute top-1/4 text-5xl">
            Because impact matters
          </h1>

          <form
            className="absolute ml-5 top-1/2 mt-10 left-5 w-2/3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="p-5 h-12 w-1/2"
              placeholder="Search by job title,ID or keyword"
              ref={inputRef}
            />
            <button
              type="submit"
              className="m-0.5 w-1/4 h-12 bg-purple-900  text-white"
              onClick={() => {
                return <Postedjobs searchedJob={inputSearch} />;
              }}
            >
              Find Jobs
            </button>
          </form>
        </div>
      )}
      {isOpen && <Postedjobs searchedJob={inputSearch}/>}
    </>
  );
};

export default Index;
