import React from "react";
import "../Jobs/style.css";
import Postedjobs from "./Postedjobs";


const Jobs = () => {

  return (
    <section className=" w-full block">

      <div className="relative top-16 m-auto w-11/12">
        <Postedjobs />
      </div>
    </section>
  );
};

export default Jobs;
