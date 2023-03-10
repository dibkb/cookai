import React from "react";
import Analysis from "./InfoCompoents/Analysis";
import DietPlanning from "./InfoCompoents/DietPlanning";
import OnePlatform from "./InfoCompoents/OnePlatform";
import Worlout from "./InfoCompoents/Worlout";
const Info = () => {
  return (
    <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 pb-4 flex flex-col mt-24">
      <div className="max-w-screen-2xl mx-auto">
        <DietPlanning />
        <Worlout />
        <Analysis />
        <OnePlatform />
      </div>
    </div>
  );
};

export default Info;
