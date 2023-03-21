import React from "react";
import Mainheading from "./Mainheading";
import vision from "../assets/vision.png";
import { Button } from "./Utils";
import { Heart } from "../utils/icons";
import { Interested } from "./Modal/Interested";
import { Partner } from "./Modal/Partner";
const Vision = () => {
  const [interested, setInterested] = React.useState(false);
  const [partner, setPartner] = React.useState(false);
  return (
    <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 pb-4 flex flex-col mt-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-fit mx-auto">
          <Mainheading title="Our Vision" />
        </div>
        <img src={vision} alt="" className="max-w-4xl mx-auto w-[90%]" />
        <p className="text-base text-center mt-12 leading-10 font-medium text-cookTextDark">
          Using our unlimited passion for technology, we aspire to Modernize the
          food consumption and fitness culture of the people for maintaining
          optimum health. We also look forward to create better infrastructure
          and logistics services for farms and farmers in order to revolutionize
          the Primary Sector of our country.
        </p>
        {interested && <Interested setShowModal={setInterested} />}
        {partner && <Partner setShowModal={setPartner} />}
        <div className="mx-auto flex flex-col md:flex-row mb-12 mt-12 gap-12 w-[80%] md:max-w-2xl">
          <Button
            text={"I’m Interested"}
            onClickHandler={() => {
              setInterested(true);
            }}
          />
          <Button
            text={"Partner With Us"}
            mode="outline"
            onClickHandler={() => {
              setPartner(true);
            }}
          />
        </div>
        <span className="flex items-center gap-2 mx-auto mt-12 mb-4 select-none w-fit">
          <p className="text-zinc-700">Launching soon, Stay tuned</p>
          <Heart />
        </span>
      </div>
    </div>
  );
};

export default Vision;
