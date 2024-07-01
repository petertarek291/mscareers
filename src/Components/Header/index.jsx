import React from "react";

const Index = () => {
    

  return (
    
      <div className="my-3 mx-10 z-10 w-64 flex fixed  " >
        <div className=" h-10 w-2/5 flex-auto">
        <a href="https://www.microsoft.com/en-eg/">
            <img 
            className="overflow-visible w-28 hover:max-w-lg"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Microsoft Egypt" />
        </a>
        </div>
        <div className=" border-r-black border-r-2 my-0 h-6 pb-1"></div>
        <div className="  mx-3 ">

            <a href="#" className="cursur-pointer">
            <span className="dev2 h-10 mx-3 font-semibold hover:underline flex-auto">
            Careers
        </span>
        
            </a>
        </div>
        </div>
        


  );
};

export default Index;
