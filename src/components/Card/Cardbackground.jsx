import React from "react";
import { Star } from "../../utils/icons";
const Cardbackground = ({ right, title, titleTop, img, imgClassName }) => {
  let cardMiddle;
  let cardBottom;
  if (right) {
    cardMiddle = `absolute rotate-[8deg] z-10 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg`;
    cardBottom = `absolute rotate-[12deg]  z-0 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg_two`;
  } else {
    cardMiddle = `absolute rotate-[-8deg] z-10 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg`;
    cardBottom = `absolute rotate-[-12deg]  z-0 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg_two`;
  }
  return (
    <div className="flex relative w-[600px] h-[700px]">
      <p className="absolute z-40 text-white top-8 left-6 text-2xl mt-12 ml-12 font-satisfy">
        {title}
      </p>
      <Star className={"absolute right-6 z-40 top-8 mt-12 mr-12"} />
      <div className="mt-12 ml-12">
        <img src={img} alt="" className={imgClassName} />
        <div className="absolute shadow-md z-20 w-[500px] h-[600px] bg-cookDarkBg rounded-xl"></div>
        <div className={cardMiddle}></div>
        <div className={cardBottom}></div>
      </div>
    </div>
  );
};

export default Cardbackground;
