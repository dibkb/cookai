import React from "react";
const Cardbackground = ({ right, title, titleTop }) => {
  let cardMiddle;
  let cardBottom;
  console.log(title);
  if (right) {
    cardMiddle = `absolute rotate-[8deg] z-10 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg`;
    cardBottom = `absolute rotate-[12deg]  z-0 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg_two`;
  } else {
    cardMiddle = `absolute rotate-[-8deg] z-10 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg`;
    cardBottom = `absolute rotate-[-12deg]  z-0 w-[500px] h-[600px] rounded-xl bg-cookCardGrayBg_two`;
  }
  return (
    <div className="relative">
      <p className="absolute z-40 text-white top-8 left-6 text-2xl mt-12 ml-12">
        {title}
      </p>
      <div className="mt-12 ml-12 ">
        <div className="absolute z-20 w-[500px] h-[600px] bg-cookDarkBg rounded-xl"></div>
        <div className={cardMiddle}></div>
        <div className={cardBottom}></div>
      </div>
    </div>
  );
};

export default Cardbackground;
