import React from "react";
import Cardbackground from "../Card/Cardbackground";
import heartmonitor from "../../assets/image 8.png";
import InfoHeading from "../InfoHeading";
const Analysis = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-y-16 items-center lg:items-start lg:gap-x-4 xl:gap-x-24">
      <div className="">
        <Cardbackground
          right={false}
          title="Heart rate monitor"
          img={heartmonitor}
          imgClassName="absolute z-40 top-[12%] left-[25%] mt-12"
          titleTop={false}
        />
      </div>
      <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
        <InfoHeading title="In-Depth Assistance" />
        <p className="text-cookTextLight leading-8 ">
          Get round-the-clock assistance with dieting and workouts that is
          tailored to your specific needs. The Artificial Intelligence allows
          you to select the fitness plan that best suits your needs. There will
          be no food restrictions because every detail of what you eat will be
          tracked, and only specific workouts will be assigned based on your
          consumption habits.It's up to you whether or not you'll keep to your
          exercise schedule!
        </p>
      </div>
    </main>
  );
};

export default Analysis;
