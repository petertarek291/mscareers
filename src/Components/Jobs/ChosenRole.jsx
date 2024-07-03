
import React from "react";
import postedJobs from "../../Services/get";

const ChosenRole = (props) => {
  const choosenRole=props.choosenRole;
  const data = [];
  const x = postedJobs[0].find(({ job_number }) => {
    return job_number.toLowerCase().includes(choosenRole.toLowerCase());
  });
  if (x !== undefined) {
    data.push(x);
  }

  return (
    <div className="flex w-full">
      <div className="left-side  vh-96 p-5 w-1/2 text-left z-50 ">
        {data.map((item, i) => (
          <div key={i} className="p-1">
            <h1 className="font-bold  m-2 p-2 text-center underline ">{item.title}</h1>
            
            <h2 className="m-3">
              <span className="font-bold">Profession</span> : {item.profession}
            </h2>
            <div className="w-full  text-center h-0.5 bg-gray-500"></div>
            <h2 className="m-3">
              <span className="font-bold"> Date Posted </span>
              {item.date_posted}
            </h2>
            <div className="w-full text-center h-0.5 bg-gray-500"></div>
            <p className="m-3">
              <span className="font-bold">Overview</span> : {item.Overview}
            </p>
            <div className="w-full  text-center h-0.5 bg-gray-500"></div>
            <p className="m-3">
              <span className="font-bold">Responsibilities </span>
              {item.Responsibilities}
            </p>
            <div className="w-full  text-center h-0.5 bg-gray-500"></div>
            <p className="font-bold">Job Number : {item.job_number}</p>
          </div>
        ))}
      </div>
      <div className="right-side shadow-inner bg-slate-50  p-5 w-2/3 ">
        <form className="items-start p-3 flex flex-col w-full m-auto">
          <h2 className="w-full bg-red-50 text-center mt-2 p-5">Personal Info</h2>
          <div className="p-2 w-full">
            <label className="w-1/5">First Name </label>
            <input
              type="text"
              className="w-4/5  font-semibold text-center bg-auto placeholder:text-start  placeholder:p-1 placeholder:font-thin"
              placeholder="Enter first name..."
              id="candidate_name"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Middle Name : </label>
            <input
              type="text"
              placeholder="Enter middle name..."
              className="w-4/5 font-semibold text-center placeholder:text-start  placeholder:p-1 placeholder:font-thin"
              id="candidate_middle_name"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Last Name : </label>
            <input
              type="text"
              placeholder="Enter last name..."
              className="w-4/5 font-semibold  text-center placeholder:text-start  placeholder:p-1 placeholder:font-thin"
              id="candidate_last_name"
            />
          </div>

          <div className="p-2 w-full">
            <label className="w-1/5">E-mail : </label>
            <input
              type="email"
              placeholder="ex: username@Microsoft.com"
              className="w-4/5 font-semibold  text-center placeholder:text-start  placeholder:p-1 placeholder:font-thin"
              id="candidate_email"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Mobile : </label>
            <input
              type="text"
              className="w-4/5 font-semibold text-center placeholder:text-start  placeholder:p-1 placeholder:font-thin"
              placeholder="ex:0020 "
              id="candidate_cmobile"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5 mr-6">Upload CV</label>
            <input type="file" className="w-4/5 text-gray-400 text-center" />
          </div>
          <div className="h-0.5 w-full bg-gray-400"></div>
          <h2 className="w-full bg-red-50  mt-2 p-5 text-center">Education and Courses</h2>
          <div className="p-2 w-full">
            <label className="w-1/5">Education : </label>
            <input
              type="text"
              className="w-4/5 font-semibold text-center p-2 bg-none placeholder:text-start  placeholder:p-1 placeholder:font-thin"
              placeholder="Enter your highest education "
              id="candidate_edu"
            />
          </div>
          <div className="p-2 w-full">
            <label className="w-1/5">Courses : </label>
            <div className="text-center p-4">
              <input
                type="text"
                className="w-4/5 font-semibold text-center p-2 bg-none placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                placeholder="Enter your courses"
                id="candidate_extra_edu"
              />
              <input
                type="text"
                className="w-4/5 font-semibold text-center p-2 bg-none placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                id="candidate_extra_edu"
              />
              <input
                type="text"
                className="w-4/5 font-semibold text-center p-2 bg-none"
                id="candidate_extra_edu"
              />
            </div>
          </div>
          <div className="h-0.5 w-full bg-gray-400"></div>
          <h2 className="w-full bg-red-50 mt-2 p-5 text-center">Expriences</h2>
          <div className="p-4 w-full">
            <label className="w-1/5">Last Employeer : </label>
            <div className="text-center p-4">
              
              <input
                type="text"
                placeholder="Enter last employeer name..."
                className="w-4/5 font-semibold text-center m-2 placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                id="candidate_last_name"
              />
              <input
                type="text"
                className="w-4/5 font-semibold text-center placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                placeholder="Email or mobile number"
              />
              <input
                type="text"
                className="w-4/5 font-semibold text-center mt-1 placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                placeholder="Last title (Optional)"
              />

            </div>

            <div className="text-center p-4">
              
              <input
                type="text"
                placeholder="Enter last employeer name..."
                className="w-4/5 font-semibold text-center m-2 placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                id="candidate_last_name"
              />
              <input
                type="text"
                className="w-4/5 font-semibold text-center placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                placeholder="Email or mobile number"
              />
              <input
                type="text"
                className="w-4/5 font-semibold text-center mt-1 placeholder:text-start  placeholder:p-1 placeholder:font-thin"
                placeholder="Last title (Optional)"
              />

            </div>
          
          </div>

          <input
            type="submit"
            value="Save and Continue"
            className="w-1/2 bg-fuchsia-950 text-white py-1 m-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default ChosenRole;
