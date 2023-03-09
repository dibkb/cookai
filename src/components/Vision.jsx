import React from "react";
import Mainheading from "./Mainheading";
import vision from "../assets/vision.png";
import { Button } from "./Utils";
import { Heart } from "../utils/icons";
const Vision = () => {
  return (
    <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 pb-4 flex flex-col mt-24">
      <Mainheading title="Our Vision" />
      <img src={vision} alt="" className="max-w-4xl mx-auto w-[90%]" />
      <p className="text-lg text-center mt-12 leading-10 font-medium text-cookTextDark">
        Using our unlimited passion for technology, we aspire to Modernize the
        food consumption and fitness culture of the people for maintaining
        optimum health. We also look forward to create better infrastructure and
        logistics services for farms and farmers in order to revolutionize the
        Primary Sector of our country.
      </p>
      <div className="mx-auto flex flex-col md:flex-row mb-12 mt-12 gap-12 w-[60%] md:max-w-2xl">
        <Button text={"Join our Watchlist"} />
        <Button text={"Join Our Cause"} mode="outline" />
      </div>
      <span className="flex items-center gap-2 mx-auto mt-12 mb-4 select-none">
        <p className="text-zinc-700">Launching soon, Stay tuned</p>
        <Heart />
      </span>
    </div>
  );
};

export default Vision;
