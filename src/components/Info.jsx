import React from "react";
import Cardbackground from "./Card/Cardbackground";

const Info = () => {
  return (
    <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 pb-4 relative">
      <Cardbackground right={false} title="Caesar Salad" />
    </div>
  );
};

export default Info;
