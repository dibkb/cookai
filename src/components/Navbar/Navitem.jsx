import React from "react";
import { Link } from "react-router-dom";

const Navitem = (props) => {
  const navItemClassName =
    "select-non text-center w-full cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50";
  return (
    <>
      <nav className={navItemClassName} onClick={props.executeScrollVision}>
        Vision
      </nav>
      <Link to="/timeline">
        <nav className={navItemClassName}>Timeline</nav>
      </Link>
      <nav className={navItemClassName} onClick={props.executeScrollFooter}>
        Contact
      </nav>
    </>
  );
};

export default Navitem;
