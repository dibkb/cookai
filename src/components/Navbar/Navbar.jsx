import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { navItemsList } from "../../utils/navitems";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const navItems = navItemsList.map(({ id, item }) => {
    return (
      <nav
        key={id}
        className="text-center w-full cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50"
      >
        {item}
      </nav>
    );
  });
  return (
    <nav className="z-10 fixed top-0 w-full px-4 lg:px-12 xl:px-24 2xl:px-64 bg-white pb-4">
      <div className="flex items-center justify-between mt-3 relative">
        <img src={logo} alt="" width={97} className="select-none" />
        <div className="hidden gap-10 md:flex">{navItems}</div>
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
          <div className="md:hidden items-center flex-col absolute w-full top-12 right-0 bg-white gap-y-2 py-4">
            {navItems}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
