import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceBar from "../Components/ServiceBar";

export const ServiceBtn = ({ setView }) => {
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
      <button className="hover:text-teal-500 pl-14" onClick={toggleIsOpen}>
        SERVICES <span className="text-yellow-400 ml-2 text-xl">&#8964;</span>
      </button>
      {isOpen && (
        <div className="absolute top-20 bg-white z-50 text-left">
          <ServiceBar />
        </div>
      )}
    </div>
  );
};
