import React from "react";
import Cardbackground from "../Card/Cardbackground";
import InfoHeading from "../InfoHeading";
import { Fade } from "react-awesome-reveal";
import heart from "../../assets/heart.png";
const Preventdisease = () => {
  return (
    <Fade direction={"left"} triggerOnce>
      <main className="flex flex-col-reverse lg:flex-row gap-y-16 items-center  lg:gap-x-4 xl:gap-x-24">
        <div className="max-w-[750px] flex flex-col gap-12 lg:mt-16 text-center">
          <InfoHeading title="Prevent Chronic Disease" />
          <p className="text-cookTextLight leading-8 ">
            Realistic modifications of diet, workout and lifestyle can prevent
            most Heart Disease, Stroke, Diabetes, different varieties of cancer
            and many more such diseases. We at Cook.AI ensures that your body
            consumes the best diet possible based on your lifestyle, body need
            and workout timings.
          </p>
        </div>
        <div className="">
          <Cardbackground
            right={false}
            title="Heart"
            img={heart}
            imgClassName="absolute z-40 bottom-0 top-[15%] left-[20%] max-h-[100%]"
            titleTop={false}
          />
        </div>
      </main>
    </Fade>
  );
};

export default Preventdisease;
