import React from "react";
import logo from "../../public/NUTRINATION.png";
import { Link } from "react-router-dom";
export const FullLogo = () => {
  return (
    <Link className="flex items-center gap-2 select-none" href={"/"}>
      <img src={logo} alt="" width={35} height={34} className="select-none" />
      {/* <Image
        src={logo.src}
        width={35}
        height={34}
        alt="Full size compoany logo"
      /> */}
      <p className={`font-pacifico`}>Nutrination</p>
    </Link>
  );
};
