import React from "react";
const Cardbackground = (right) => {
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
    <div className="relative mt-12 ml-12 ">
      <div className="absolute z-20 w-[500px] h-[600px] bg-cookDarkBg rounded-xl"></div>
      <div className={cardMiddle}></div>
      <div className={cardBottom}></div>
    </div>
  );
};

export default Cardbackground;
