import React from "react";
import logo from "../../assets/logo.png";
import { navItemsList } from "../../utils/navitems";
const Navbar = () => {
  const navItems = navItemsList.map(({ id, item }) => {
    return (
      <nav
        key={id}
        className="cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50"
      >
        {item}
      </nav>
    );
  });
  return (
    <div className="flex items-center justify-between mt-3">
      <img src={logo} alt="" width={97} className="select-none" />
      <div className="flex gap-10">{navItems}</div>
    </div>
  );
};

export default Navbar;
