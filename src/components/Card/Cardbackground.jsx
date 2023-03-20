import React from "react";
import { Star } from "../../utils/icons";
const Cardbackground = ({ right, title, titleTop, img, imgClassName }) => {
  let cardMiddle;
  let cardBottom;
  if (right) {
    cardMiddle = `absolute rotate-[deg] z-10 w-[90%] h-[90%] rounded-xl bg-cookCardGrayBg`;
    cardBottom = `absolute rotate-[0deg]  z-0 w-[90%] h-[90%] rounded-xl bg-cookCardGrayBg_two`;
  } else {
    cardMiddle = `absolute rotate-[-8deg] z-10 w-[80%] h-[90%] rounded-xl bg-cookCardGrayBg right-[10%] top-[10%]`;
    cardBottom = `absolute rotate-[-12deg]  z-0 w-[80%] h-[90%] rounded-xl bg-cookCardGrayBg_two right-[10%] top-[10%]`;
  }
  let titleClass;
  let starClass;
  if (titleTop) {
    titleClass =
      "absolute z-40 text-white top-0 left-0 text-2xl border-red-200 border font-satisfy";
    starClass = "absolute right-6 z-40 top-8 mt-12 mr-12";
  } else {
    titleClass =
      "absolute z-40 text-white bottom-20 left-6 text-2xl mt-12 ml-12 font-satisfy";
    starClass = "absolute right-6 z-40 bottom-20 mt-12 mr-12";
  }
  return (
    <div className="mt-12 flex relative w-[90vw] max-w-[600px] h-[100vw] sm:h-[700px] border">
      <p className={titleClass}>{title}</p>
      <Star className={starClass} />
      <img src={img} alt="" className={imgClassName} />
      <div className="">
        <div className="absolute shadow-md z-20 w-[80%] h-[90%] right-[10%] top-[10%] bg-cookDarkBg rounded-xl"></div>
        <div className={cardMiddle}></div>
        <div className={cardBottom}></div>
      </div>
    </div>
  );
};

export default Cardbackground;
