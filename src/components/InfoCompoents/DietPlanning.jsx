import Cardbackground from "../Card/Cardbackground";
import saladpid from "../../assets/pexels-ella-olsson-1640777 2.png";
import InfoHeading from "../InfoHeading";
import React from "react";
import { Fade } from "react-awesome-reveal";
const DietPlanning = () => {
  return (
    <Fade direction={"right"} triggerOnce>
      <main className="flex flex-col lg:flex-row gap-y-16 items-center lg:gap-x-4 xl:gap-x-24">
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
            Get every detail about the recipe you are about to cook from a
            database of 50,000+ dishes. Ranging from ingredients, nutritional
            values and methods to cook it perfectly. Ensure that your body
            doesn't miss life supporting molecules by automatically tracking
            them through our App. Gone are the days of manually calculating your
            calories and other metrics, as our AI makes it easy and smooth for
            you to choose any recipe that really suits your body!
          </p>
        </div>
      </main>
    </Fade>
  );
};

export default DietPlanning;
