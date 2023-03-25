import React from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillPhone,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import cookImage from "../assets/logo.png";
const Footer = ({ scrollRefFooter }) => {
  return (
    <div
      className="w-full px-4 lg:px-12 xl:px-24 2xl:px-64 py-4"
      ref={scrollRefFooter}
    >
      <div className="mt-5 pt-5 border-t-2 border-stone-800">
        <div>
          <img src={cookImage} alt="" className="h-10 mb-4" />
          <p className="text-sm font-semibold text-stone-600">
            Muscles are torn in the gym,fed in the kitchen and built in the bed.
          </p>
        </div>
        <div className="mt-10 text-stone-800">
          <p className="text-sm font-semibold">Get in Touch</p>
          <main className="flex flex-col gap-4 mt-3">
            <span className="flex items-center gap-2">
              <MdLocationOn size={20} />
              <p>IC&SR Building, IIT Madras 600036</p>
            </span>
            <span className="flex items-center gap-2">
              <GrMail size={20} />
              <p>
                <a href="mailto:cook.ai.reach.com">cook.ai.reach.com</a>
              </p>
            </span>
            <span className="flex items-center gap-2">
              <AiFillPhone size={20} />
              <p>
                <a href="tel:+918822436250">+91 8822436250</a>
              </p>
            </span>
          </main>
        </div>
        <div className="flex gap-y-3 justify-between items-center mt-10 flex-wrap">
          <p className="text-sm font-semibold">
            © 2023 Cookai. All rights reserved.
          </p>
          <main className="text-stone-700 flex gap-3">
            {/* <a href="https://twitter.com/dibaskb">
              <AiOutlineTwitter
                className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
                size={"35"}
              />
            </a> */}
            <a href="https://www.linkedin.com/company/cook-ai/">
              <AiFillLinkedin
                className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
                size={"35"}
              />
            </a>
            <a href="https://www.instagram.com/cookonline.in/?igshid=YmMyMTA2M2Y%3D">
              <AiOutlineInstagram
                className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
                size={"35"}
              />
            </a>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Footer;
