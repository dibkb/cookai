import React from "react";
import Cardbackground from "../Card/Cardbackground";
import InfoHeading from "../InfoHeading";
import exercisepic from "../../assets/pexels-alexy-almond-3756520-removebg-preview 1.png";
const Worlout = () => {
  return (
    <main className="mt-24 flex flex-col-reverse lg:flex-row gap-y-16 items-center lg:items-start lg:gap-x-4 xl:gap-x-24">
      <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
        <InfoHeading title="Personalised Workout" />
        <p className="text-cookTextLight leading-8 ">
          Track everything that goes into your body. We use your data on Macro,
          Micro Nutrients and share it with our fitness centers to provide a
          complete Data-Driven Workout Program.
        </p>
      </div>
      <div className="">
        <Cardbackground
          right={false}
          title="Jumping Lunges"
          img={exercisepic}
          imgClassName="absolute z-40 bottom-0 left-16 mt-12"
          titleTop={false}
        />
      </div>
    </main>
  );
};

export default Worlout;
