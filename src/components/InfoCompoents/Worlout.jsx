import React from "react";
import Cardbackground from "../Card/Cardbackground";
import InfoHeading from "../InfoHeading";
import { Fade } from "react-awesome-reveal";
import exercisepic from "../../assets/pexels-alexy-almond-3756520-removebg-preview 1.png";
const Worlout = () => {
  return (
    <Fade direction={"left"} triggerOnce>
      <main className="flex flex-col-reverse lg:flex-row gap-y-16 items-center  lg:gap-x-4 xl:gap-x-24">
        <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
          <InfoHeading title="Personalised Workout" />
          <p className="text-cookTextLight leading-8 ">
            Track everything that goes into your body. Allow are Fitness Centres
            to assist you together along with your fitness goals. We use your
            diet data and share it with our fitness centers to provide a
            complete Data-Driven Workout Program. The plan will cover diet,
            workout and analysis.
          </p>
        </div>
        <div className="">
          <Cardbackground
            right={false}
            title="Jumping Lunges"
            img={exercisepic}
            imgClassName="absolute z-40 bottom-0 top-[1%] left-[25%] max-h-[100%]"
            titleTop={false}
          />
        </div>
      </main>
    </Fade>
  );
};

export default Worlout;
