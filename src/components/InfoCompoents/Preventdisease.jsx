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
            The majority of Heart Disease, Stroke, Diabetes, many types of
            cancer, and many other such ailments can be avoided by making
            realistic changes to food, exercise, and lifestyle. In order to
            avoid you from having an unbalanced diet depending on your
            lifestyle, body needs, and workout schedule, we at Cook.AI want to
            make sure that your body consumes the optimal diet possible. It will
            undoubtedly lower the likelihood of catching such an illness.
          </p>
        </div>
        <div className="">
          <Cardbackground
            right={false}
            title="Heart"
            img={heart}
            imgClassName="absolute z-40 bottom-0 top-[15%] left-[20%] max-h-[100%] max-w-[75%] md:max-w-[90%]"
            titleTop={false}
          />
        </div>
      </main>
    </Fade>
  );
};

export default Preventdisease;
