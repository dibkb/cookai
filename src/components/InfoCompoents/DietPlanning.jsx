import Cardbackground from "../Card/Cardbackground";
import saladpid from "../../assets/pexels-ella-olsson-1640777 2.png";
import InfoHeading from "../InfoHeading";
import React from "react";
import { Fade } from "react-awesome-reveal";
const DietPlanning = () => {
  return (
    <Fade direction={"right"} triggerOnce>
      <main className="flex flex-col lg:flex-row gap-y-16 items-center lg:items-start lg:gap-x-4 xl:gap-x-24">
        <div className="">
          <Cardbackground
            right={false}
            title="Caesar Salad"
            img={saladpid}
            imgClassName="absolute z-40 top-[20%] right-[12%] max-w-[75%] md:max-w-[90%]"
            titleTop={true}
          />
        </div>
        <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
          <InfoHeading title="Diet Planning" />
          <p className="text-cookTextLight leading-8 ">
            Get every detail about the recipe you are about to cook. Ranging
            from Ingredients, Nutritional values and Methods to cook it
            perfectly. Become a master of the recipe even if you had never
            prepared it before !
          </p>
        </div>
      </main>
    </Fade>
  );
};

export default DietPlanning;
