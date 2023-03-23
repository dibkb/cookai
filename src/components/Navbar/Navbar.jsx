import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Navitem from "../Navbar/Navitem";
const Navbar = ({ executeScrollVision, executeScrollFooter }) => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <nav className="z-50 shadow-md fixed top-0 w-full px-4 lg:px-12 xl:px-24 2xl:px-64 bg-white pb-4">
      <div className="flex items-center justify-between mt-3">
        <Link to="/">
          <img src={logo} alt="" width={97} className="select-none" />
        </Link>
        <div className="hidden gap-10 md:flex">
          <Navitem executeScrollVision={executeScrollVision} />
        </div>
        {/* navbar on smaller screens */}
        <div className="md:hidden">
          <Bars3Icon
            className={`h-8 w-8 cursor-pointer text-zinc-900 transition ease-in-out ${
              showMobile ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setShowMobile((val) => !val)}
          />
        </div>
        {showMobile && (
          <div className="absolute shadow-md md:hidden items-center flex-col bg-white w-[100vw] top-16 sm:top-gap-y-2 py-4 left-0 overflow-hidden">
            <Navitem
              executeScrollVision={() => {
                setShowMobile(false);
                executeScrollVision();
              }}
              executeScrollFooter={() => {
                setShowMobile(false);
                executeScrollFooter();
              }}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
