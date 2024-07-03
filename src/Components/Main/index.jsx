import React, { useRef, useState } from "react";
import "../Main/index.css";
import ImageMe from "../img/GCS_Home Page_Hero.png";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import Postedjobs from "../Jobs/Postedjobs";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  const navigate = useNavigate();

  return (
    <>
      {
        <div className="relative block w-full">
          <img src={ImageMe} className="h-96 max-h-96 block w-full" />
          <h1 className="p-10 font-bold absolute top-1/4 text-5xl">
            Because impact matters
          </h1>
          {!isOpen && (
            <form
              className="absolute ml-5 top-1/2 mt-10 left-5 w-2/3"
              onSubmit={() => {
                
            navigate(`/search?${searchParams}`);
                toggle(isOpen);
              }}
            >
              <input
                type="text"
                className="p-5 h-12 w-1/2"
                placeholder="Search by job title,ID or keyword"
                value={searchParams.get("jobTitle") ?? ""}
                
                onChange={(e) => setSearchParams({ jobTitle: e.target.value })}
              />
              <button
                type="submit"
                className="m-0.5 w-1/4 h-12 bg-purple-900  text-white"
              >
                Find Jobs
              </button>
            </form>
          )}
           {isOpen && <Postedjobs />}
        </div>
      }
    </>
  );
};

export default Index;
