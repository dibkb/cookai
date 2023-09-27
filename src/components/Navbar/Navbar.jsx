import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FullLogo } from "../Fulllogo";
const NavItem = () => {
  const navItemClassName =
    "select-non text-center w-full cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50";
  return (
    <>
      <Link to="/vision">
        <nav className={navItemClassName}>Vision</nav>
      </Link>
      <Link to="/timeline">
        <nav className={navItemClassName}>Timeline</nav>
      </Link>
      <Link to={"/contact"}>
        <nav className={navItemClassName}>Contact</nav>
      </Link>
    </>
  );
};
const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <nav className="z-50 shadow-md fixed top-0 w-full px-4 lg:px-12 xl:px-24 2xl:px-64 bg-white pb-4">
      <div className="flex items-center justify-between mt-3">
        <Link to="/">
          <FullLogo />
        </Link>
        <div className="hidden gap-10 md:flex">
          <NavItem />
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
            <NavItem />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
