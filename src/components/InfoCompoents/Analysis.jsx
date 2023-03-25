import React from "react";
import Cardbackground from "../Card/Cardbackground";
import heartmonitor from "../../assets/image 8.png";
import InfoHeading from "../InfoHeading";
import { Fade } from "react-awesome-reveal";
const Analysis = () => {
  return (
    <Fade direction={"right"} triggerOnce>
      <main className="flex flex-col lg:flex-row gap-y-16 items-center lg:gap-x-4 xl:gap-x-24">
        <div className="">
          <Cardbackground
            right={false}
            title="Heart rate monitor"
            img={heartmonitor}
            imgClassName="absolute z-40 top-[15%] left-[20%] max-w-[60%] md:w-[600px]"
            titleTop={false}
          />
        </div>
        <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
          <InfoHeading title="In-Depth Assistance" />
          <p className="text-cookTextLight leading-8 ">
            Get round-the-clock assistance as our AI process metrics including
            calories, macro and micro nutrients, vitamins, sleep, stress level,
            genome, medications, microbiome, glucose, body composition,
            adherence, weight change rate trends, hunger, fatigue and many more.
            Every important detail of your body will be tracked, and the plan
            will be assigned based on the analysis of your body. It's just up to
            you whether or not you'll keep to your motivation!
          </p>
        </div>
      </main>
    </Fade>
  );
};

export default Analysis;
