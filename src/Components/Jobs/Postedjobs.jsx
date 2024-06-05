import React, { useEffect, useState } from "react";
import postedJobs from "../../Services/get";
import ChosenRole from "../../Moves/ChosenRole";

const Postedjobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  
  return (
    <>
      {isOpen && <ChosenRole />}
      {isOpen && (
        <>
          <button
            onClick={() => {
              toggle(isOpen);
            }}
            className="bg-purple-900 h-full pb-auto box-border text-white rounded-sm font-medium"
          >
            Back
          </button>
        </>
      )}

      {!isOpen &&
        postedJobs[0].map((item) => (
          <button
            className="p-1 mt-2 hover:bg-gray-100 text-left bg-white active:border-l-4 focus:border-l-2 focus:border-fuchsia-950 hover:border-l-2 hover:border-fuchsia-900 border-l-fuchsia-950"
            key={item.job_number}
            onClick={toggle}
  
          >
            <h1>
              <span className="font-bold">Title</span> : {item.title}
            </h1>
            <h2>
              <span className="font-bold">Profession</span> : {item.profession}
            </h2>
            <h2>
              <span className="font-bold"> Date Posted </span>
              {item.date_posted}
            </h2>
            <p>
              <span className="font-bold">Overview</span> : {item.Overview}
            </p>
            <p>
              <span className="font-bold">Responsibilities </span>
              {item.Responsibilities}
            </p>
            <p className="font-bold">Job Number : {item.job_number}</p>
            <div className="mt-1 w-full h-1 bg-gray-300"></div>
          </button>
        ))}
    </>
  );
};

export default Postedjobs;
