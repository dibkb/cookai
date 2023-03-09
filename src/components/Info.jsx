import React from "react";
import Cardbackground from "./Card/Cardbackground";
import saladpid from "../assets/pexels-ella-olsson-1640777 2.png";
import exercisepic from "../assets/pexels-alexy-almond-3756520-removebg-preview 1.png";
import calorieMeter from "../assets/image 8.png";
import foodPower from "../assets/Untitled design (11) 1.png";
const Info = () => {
  return (
    <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 pb-4 flex flex-col mt-24">
      <main className="flex flex-col gap-y-16 items-center">
        <div className="">
          <Cardbackground
            right={false}
            title="Caesar Salad"
            img={saladpid}
            imgClassName="absolute z-40 top-16 left-16 mt-12"
          />
        </div>
        <div className="max-w-[750px] flex flex-col gap-12">
          <h2 className="font-raleway text-4xl font-semibold text-cookDarkBg">
            Diet Planning
          </h2>
          <p className="text-cookTextLight leading-8">
            Get every detail about the recipe you are about to cook. Ranging
            from Ingredients, Nutritional values and Methods to cook it
            perfectly. Become a master of the recipe even if you had never
            prepared it before !
          </p>
        </div>
      </main>
    </div>
  );
};

export default Info;
