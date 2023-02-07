import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductBar from "./ProductBar";
import ServiceBar from "./ServiceBar";

export const Burger = ({ setView }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleIsOpen = () => {
    setOpen((o) => !o);
  };
  return (
    <>
      <button
        onClick={toggleIsOpen}
        className="text-slate-500 mt-1.5 flex flex-col gap-1"
      >
        <div className="w-4 h-0.5 bg-teal-500" />
        <div className="w-4 h-0.5 bg-teal-500" />
        <div className="w-4 h-0.5 bg-teal-500" />
      </button>
      {isOpen && (
        <div className="absolute top-20 bg-white left-0 right-0">
          <ServiceBar />
          <ProductBar />
        </div>
      )}
    </>
  );
};

export default Burger;
