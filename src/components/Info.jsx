import React from "react";
import DietPlanning from "./InfoCompoents/DietPlanning";
const Info = () => {
  return (
    <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 pb-4 flex flex-col mt-24">
      <div className="max-w-screen-2xl mx-auto">
        <DietPlanning />
      </div>
    </div>
  );
};

export default Info;
