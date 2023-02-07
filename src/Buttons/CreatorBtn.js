import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Creators from "../Pages/Creators";

export const CreatorBtn = ({ setView }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleIsOpen = () => {
    setOpen((o) => !o);
  };
  return (
    <div className="-mt-1.5">
      <button className=" hover:text-teal-500" onClick={toggleIsOpen}>
        CREATORS<span className="text-yellow-400 ml-2 text-xl">&#8964;</span>
      </button>
      {isOpen && (
        <div className="absolute top-20 bg-white z-50">
          <Creators />
        </div>
      )}
    </div>
  );
};
