import React from "react";

const InfoHeading = ({ title }) => {
  return (
    <span className="relative w-fit mx-auto">
      <h2 className="relative whitespace-nowrap font-raleway text-4xl font-semibold text-zinc-700">
        {title}
      </h2>
      <small className="z-[-1] top-6 right-4 absolute w-full h-[17px] bg-cookLightYellow"></small>
    </span>
  );
};

export default InfoHeading;
