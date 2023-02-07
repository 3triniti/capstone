import React from "react";
import { Link } from "react-router-dom";
import { CreatorBtn } from "../Buttons/CreatorBtn";
import { ProductBtn } from "../Buttons/ProductBtn";
import { ServiceBtn } from "../Buttons/ServiceBtn";
import EmptyCart from "./EmptyCart";
import logo2 from "../Images/Kauai Tea Ceremony logo long.png";
// import Burger from "./Burger";
// import { useScreenSize } from "/hooks/useScreenSize";

function Navbar() {
  // const screenSize = useScreenSize();

  return (
    <>
      <nav className=" z-30 grid-cols-2 grid justify-between items-center h-32 md:grid-cols-3">
        <div className="flex lg:pl-12 mt-48 font-open text-sm text-black font-bold tracking-widest rounded-md">
          {/* <div className="lg:disable">
            <Burger />
          </div> */}
          <CreatorBtn />
          <ServiceBtn />
          <ProductBtn />
          <div className="-mt-32">
            <Link to="/">
              <img
                src={logo2}
                className=" z-50 w-36 h-36 md:w-96 md:h-96 -mt-8 ml-10 hover:opacity-70 drop-shadow-sm"
                alt=""
              ></img>
            </Link>
          </div>
          <Link
            to="/history"
            className="hover:text-teal-500 pl-10 tracking-wider top-20"
          >
            HISTORY
          </Link>
          <Link
            to="/contact"
            className="hover:text-teal-500 pl-20 pr-20 tracking-wider top-20"
          >
            CONTACT
          </Link>
          <EmptyCart />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
