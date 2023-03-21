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
      "absolute z-40 text-white left-[15%] top-[12%] text-base sm:text-2xl font-satisfy";
    starClass = "absolute z-40 right-[15%] top-[12%] w-[20px] sm:w-[30px]";
  } else {
    titleClass =
      "absolute z-40 text-white left-[15%] bottom-[6%] text-base sm:text-2xl font-satisfy";
    starClass = "absolute z-40 right-[15%] bottom-[6%] w-[20px] sm:w-[30px]";
  }
  return (
    <div className="right-0 sm:right-0 relative mt-0 sm:mt-12 flex w-[90vw] max-w-[600px] h-[100vw] sm:h-[700px]">
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
