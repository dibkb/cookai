import React from "react";
import harshit from "../../assets/team/harshit.png";
import irsad from "../../assets/team/irsad.jpeg";
import ikraj from "../../assets/team/ikraj.jpg";
import satyajit from "../../assets/team/satyajit.jpeg";
import dk from "../../assets/team/DK.jpg";
import { AiFillLinkedin } from "react-icons/ai";
export const MemberOne = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={harshit} alt="" className="rounded-full h-[150px] w-[150px]" />
      <p className="mt-3 font-medium">Harshit Bora</p>
      <p className="mt-3 italic text-sm">Founder</p>
      <main className="mt-3 flex justify-center">
        <a href="" className="">
          <AiFillLinkedin size={30} />
        </a>
      </main>
    </div>
  );
};
export const MemberIrhad = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={irsad} alt="" className="rounded-full h-[150px] w-[150px]" />
      <p className="mt-3 font-medium">Irshad Sareshwala</p>
      <p className="mt-3 italic text-sm">Data Analyst</p>
      <main className="mt-3 flex justify-center">
        <a href="https://www.linkedin.com/in/irshad-s-64113316b" className="">
          <AiFillLinkedin size={30} />
        </a>
      </main>
    </div>
  );
};
export const MemberIkraj = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={ikraj} alt="" className="rounded-full h-[150px] w-[150px]" />
      <p className="mt-3 font-medium">Ikraj Singh</p>
      <p className="mt-3 italic text-sm">Operations Management</p>
      <main className="mt-3 flex justify-center">
        <a
          href="https://www.linkedin.com/in/ikraj-singh-aa2817255"
          className=""
        >
          <AiFillLinkedin size={30} />
        </a>
      </main>
    </div>
  );
};
export const MemberSatyajeet = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={satyajit} alt="" className="rounded-full h-[150px] w-[150px]" />
      <p className="mt-3 font-medium">Satyajeet Narayan</p>
      <p className="mt-3 italic text-sm">Database Manager</p>
      <main className="mt-3 flex justify-center">
        <a href="https://www.linkedin.com/in/satyajeet-narayan" className="">
          <AiFillLinkedin size={30} />
        </a>
      </main>
    </div>
  );
};
export const MemberDK = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={dk} alt="" className="rounded-full h-[150px] w-[150px]" />
      <p className="mt-3 font-medium">Dibas K Borborah</p>
      <p className="mt-3 italic text-sm">CTO</p>
      <main className="mt-3 flex justify-center">
        <a href="https://www.linkedin.com/in/dibkb/" className="">
          <AiFillLinkedin size={30} />
        </a>
      </main>
    </div>
  );
};
