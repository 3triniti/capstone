import React from "react";

function Subscribe() {
  return (
    <>
      <div className="subscribe-box flex border-solid border-2 bg-transparent border-teal-500 rounded-md w-11/12 h-24 mt-10 ml-14 mb-10">
        <div>
          <div className="font-open font-normal text-2xl text-slate-700 pl-8 pt-2">
            Subscribe!
          </div>
          <p className="font-open font-thin text-normal text-slate-700 pl-8 pt-2">
            Receive selected items and information monthly
          </p>
        </div>
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-slate-400 border-slate-200 w-80 h-12 ml-36 mt-4">
          E-Mail Address
        </div>
        <div>
          <button className="bg-teal-500 text-slate-100 hover:bg-white hover:text-teal-500 font-open font-normal rounded-md text-sm w-52 h-10 ml-16 mt-6">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
