import React from "react";
import Cardbackground from "../Card/Cardbackground";
import InfoHeading from "../InfoHeading";
import platfom from "../../assets/Untitled design (11) 1.png";
const OnePlatform = () => {
  return (
    <main className="mt-24 flex flex-col-reverse lg:flex-row gap-y-16 items-center lg:items-start lg:gap-x-4 xl:gap-x-24">
      <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
        <InfoHeading title="One Platform" />
        <p className="text-cookTextLight leading-8 ">
          Cook. AI is a one-stop platform that assists users in creating or
          selecting a meal plan and shopping accordingly. Users can track and
          analyse their nutritional intakes to ensure that micro and
          macronutrients are consumed in a balanced ratio. We use and share that
          data with our fitness centres to provide a comprehensive Data-Driven
          Workout Program. Everything is accessible through the same app for the
          smoothest body size transitions and eating exactly what is required.
        </p>
      </div>
      <div className="">
        <Cardbackground
          right={false}
          img={platfom}
          imgClassName="absolute z-40 top-[10%] left-[7%] max-w-[90%] "
        />
      </div>
    </main>
  );
};

export default OnePlatform;
