import React from "react";

const Navitem = () => {
  const navItemClassName =
    "select-non text-center w-full cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50";
  return (
    <>
      <nav className={navItemClassName}>Vision</nav>
      <nav className={navItemClassName}>Timeline</nav>
      <nav className={navItemClassName}>About</nav>
      <nav className={navItemClassName}>Contact</nav>
    </>
  );
};

export default Navitem;
