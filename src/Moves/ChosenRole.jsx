import React, { useState } from "react";
import postedJobs from "../Services/get";

const ChosenRole = (choosenRole) => {
  const data = [];
  choosenRole = "2";

  const x = postedJobs[0].find(({ title }) => {
    return title.toLowerCase().includes(choosenRole.toLowerCase());
  });
  if (x !== undefined) {
    data.push(x);
  }

  return (
    <div className="flex w-full">
      <div className="left-side  vh-96 p-5 w-1/2 text-left">
        {data.map((item, i) => (
          <div key={i} className="p-1">
            <h1 className="font-bold m-2 p-2 text-center">{item.title}</h1>
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
          </div>
        ))}
      </div>
      <div className="right-side shadow-inner bg-slate-50 vh-96 p-5 w-2/3">
        <form className="items-start p-3 flex flex-col w-full m-auto">
          <h2 className="w-full bg-red-50 mt-2 p-5">Personal Info</h2>
          <div className="p-2 w-full">
            <label className="w-1/5 font-thin">First Name </label>
            <input
              type="text"
              className="w-4/5  font-bold placeholder:text-black text-center bg-auto"
              placeholder="Enter First Name..."
              id="candidate_name"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Middle Name : </label>
            <input
              type="text"
              placeholder="Enter Last Name..."
              className="w-4/5 font-bold placeholder:text-black text-center"
              id="candidate_middle_name"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Last Name : </label>
            <input
              type="text"
              placeholder="Enter Last Name..."
              className="w-4/5 font-bold placeholder:text-black text-center"
              id="candidate_last_name"
            />
          </div>

          <div className="p-2 w-full">
            <label className="w-1/5">E-mail : </label>
            <input
              type="email"
              placeholder="Enter Email.... ex: username@Microsoft.com"
              className="w-4/5 font-bold placeholder:text-black text-center"
              id="candidate_email"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Mobile : </label>
            <input
              type="text"
              className="w-4/5 font-bold placeholder:text-black text-center"
              placeholder="ex:0020 "
              id="candidate_cv"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Upload CV</label>
            <input type="file" className="w-4/5 text-red-400 text-center" />
          </div>
          <div className="h-0.5 w-full bg-gray-400"></div>
          <h2 className="w-full bg-red-50  mt-2 p-5">Education and Courses</h2>
          <div className="p-2 w-full">
            <label className="w-1/5">Education : </label>
            <input
              type="text"
              className="w-4/5 font-bold placeholder:text-black text-center p-2 bg-none"
              placeholder="Enter your highest Education "
              id="candidate_edu"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Courses : </label>
            <div className="text-center p-4">
              <input
                type="text"
                className="w-4/5 font-bold placeholder:text-black text-center p-2 bg-none"
                placeholder="Enter your highest Courses"
                id="candidate_extra_edu"
              />
              <input
                type="text"
                className="w-4/5 font-bold placeholder:text-black text-center p-2 bg-none"
                id="candidate_extra_edu"
              />
              <input
                type="text"
                className="w-4/5 font-bold placeholder:text-black text-center p-2 bg-none"
                id="candidate_extra_edu"
              />
            </div>
          </div>
          <div className="h-0.5 w-full bg-gray-400"></div>
          <h2 className="w-full bg-red-50 mt-2 p-5">Expriences</h2> 
          <div className="p-4 w-full">
            <label className="w-1/5">Last Employeer : </label>
            <div className="text-center p-4">
            <span>1-</span><input
              type="text"
              placeholder="Enter Last Employeer Name..."
              className="w-4/5 font-bold placeholder:text-black text-center m-2"
              id="candidate_last_name"
            />
            <input
              type="text"
              className="w-4/5 font-bold placeholder:text-black text-center"
              placeholder="Contact..."
            />
            <input
              type="text"
              className="w-4/5 font-bold placeholder:text-gray-600 text-center mt-1"
              placeholder="if it possible enter your last title (Optional)"
            />

            <div className="text-center p-4">
            <span>2-</span><input
              type="text"
              placeholder="Enter Last Employeer Name..."
              className="w-4/5 font-bold placeholder:text-black text-center m-2"
              id="candidate_last_employeer_name"
            />
            <input
              type="text"
              className="w-4/5 font-bold placeholder:text-black text-center"
              placeholder="Contact..."
            /><br/>
            
            <input
              type="text"
              className="w-4/5 font-bold placeholder:text-gray-600 text-center mt-1"
              placeholder="if it possible enter your last title (Optional)"
            />

            </div>

            </div>
            
          </div>

          <input
            type="submit"
            value="Save and Continue"
            className="w-1/2 bg-fuchsia-950 text-white py-1"
          />
        </form>
      </div>
    </div>
  );
};

export default ChosenRole;
