import React from "react";
const Mainheading = ({ title }) => {
  return (
    <span className="relative w-fit mx-auto">
      <h2 className="relative font-raleway text-6xl font-semibold text-zinc-700">
        {title}
      </h2>
      <small className="z-[-1] top-10 right-0 absolute w-full h-[17px] bg-cookLightYellow"></small>
      <small className="z-[-2] top-8 right-6 absolute w-full h-[17px] bg-cookLime"></small>
    </span>
  );
};

export default Mainheading;
