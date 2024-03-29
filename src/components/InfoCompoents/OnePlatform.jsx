import React from "react";
import Cardbackground from "../Card/Cardbackground";
import InfoHeading from "../InfoHeading";
import platfom from "../../assets/Untitled design (11) 1.png";
import { Fade } from "react-awesome-reveal";
const OnePlatform = () => {
  return (
    <Fade direction={"left"} triggerOnce>
      <main className="flex flex-col-reverse lg:flex-row gap-y-16 items-center lg:gap-x-4 xl:gap-x-24">
        <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
          <InfoHeading title="One Platform" />
          <p className="text-cookTextLight leading-8 ">
            Cook. AI is a one-stop platform that assists users in creating or
            selecting a meal plan and shopping accordingly. Users can track and
            analyze their nutritional intakes to ensure that everything is
            consumed in a balanced ratio OR the user can even get automatic
            recommendation from our AI. We use and share that data with our
            fitness centres to provide a comprehensive Data-Driven Workout
            Program. Everything is accessible through the same app for the
            smoothest body size transitions and optimum diets.
          </p>
        </div>
        <div className="">
          <Cardbackground
            right={false}
            title="One platform"
            img={platfom}
            imgClassName="absolute z-40 top-[10%] left-[7%] max-w-[90%] "
          />
        </div>
      </main>
    </Fade>
  );
};

export default OnePlatform;
