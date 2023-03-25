import React from "react";
import { BsFillRocketFill, BsDatabaseFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { AiFillAppstore } from "react-icons/ai";
import {
  MemberIkraj,
  MemberIrhad,
  MemberOne,
  MemberSatyajeet,
  MemberDK,
} from "./Team";
export const Idea = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center border-b border-stone-200 pb-20 mt-20">
      <section className="flex gap-4 items-center relative">
        <main className="bg-stone-800 text-white w-[120px] h-[120px] justify-center rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <BsFillRocketFill size={45} />
          <p className="text-sm">Idea</p>
        </main>
        <p className="font-semibold italic absolute left-[150px] whitespace-nowrap text-xs">
          May 2022
        </p>
      </section>
      <section className="font-medium text-stone-700 leading-8 text-sm flex flex-col gap-y-6">
        <p>
          Despite decades of diet fads and government-issued food pyramids, we
          still know surprisingly little about nutrition science! The idea that
          there is one optimal diet for everyone is a fundamental flaw in the
          entire premise. It contradicts the remarkable diversity of human
          metabolism, microbiome and environment (lifestyle, family history,
          medical conditions, medications) that distinguishes each of us.Thus, a
          Good diet has to be individualised.{" "}
        </p>
        <p>
          There are already efforts underway in the pitch. Deep learning,
          another subtype of A.I, is used in some ongoing nutrition studies to
          accurately determine what participants are eating from smartphone
          photos of their plates of food. This eliminates the need to manually
          enter data(as long as participants remember to take the picture).
        </p>
        <p>
          But that is a single type of data! Rather than just creating a simple
          calorie calculator, our idea is to process all of our data — workout,
          activity, sleep, stress level, medications, genome, microbiome, and
          glucose — from multiple devices, such as skin patches and
          smartwatches. With advanced algorithms, this is entirely possible,
          taking into account all aspects of dieting such as body composition,
          adherence, weight change rate trends, hunger, and fatigue. The
          important thing to remember is that we will not simply collect this
          information. An algorithm will constantly assess how these data points
          trend in relation to one another and will make appropriate
          adjustments.
        </p>
      </section>
    </div>
  );
};
export const Team = () => {
  return (
    <div className="flex flex-col gap-8 text-center pb-20 mt-20 items-center border-b border-stone-200">
      <section className="flex gap-4 items-center relative">
        <main className="bg-stone-800 text-white w-[120px] h-[120px] justify-center rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <RiTeamFill size={45} />
          <p className="text-sm">Team</p>
        </main>
        <p className="font-semibold italic absolute left-[150px] whitespace-nowrap text-xs">
          December 2022
        </p>
      </section>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10">
        <MemberOne />
        <MemberDK />
        <MemberIkraj />
        <MemberIrhad />
        <MemberSatyajeet />
      </div>
    </div>
  );
};
export const Website = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center border-b border-stone-200 pb-20 mt-20">
      <section className="flex gap-4 items-center relative">
        <main className="bg-stone-800 text-white w-[120px] h-[120px] rounded-2xl shadow-md flex flex-col gap-4 justify-center items-center">
          <TfiWorld size={45} />
          <p className="text-sm">Website</p>
        </main>
        <p className="font-semibold italic absolute left-[150px] whitespace-nowrap text-xs">
          March 2023
        </p>
      </section>
      <p className="font-medium text-stone-700 leading-8 text-sm">
        Recalling the quote, we launched this website on March 25, 2023 - "Start
        where you are. Use what you have. Do what you can". Our team is about to
        embark on an unexpected journey, which we are very thrilled about.
      </p>
    </div>
  );
};
export const Database = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center border-b border-stone-200 pb-20 mt-20">
      <section className="flex gap-4 items-center relative">
        <main className="bg-stone-800 text-white w-[120px] h-[120px] justify-center rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <BsDatabaseFill size={45} />
          <p className="text-sm">Database</p>
        </main>
        <p className="font-semibold italic absolute left-[150px] whitespace-nowrap text-xs">
          Work in progress
        </p>
      </section>
      <p className="font-medium text-stone-700 leading-8 text-sm"></p>
    </div>
  );
};
export const App = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center border-b border-stone-200 pb-20 mt-20">
      <section className="flex gap-4 items-center relative">
        <main className="bg-stone-800 text-white w-[120px] h-[120px] justify-center rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <AiFillAppstore size={45} />
          <p className="text-sm">App</p>
        </main>
        <p className="font-semibold italic absolute left-[150px] whitespace-nowrap text-xs">
          Work in progress
        </p>
      </section>
      <p className="font-medium text-stone-700 leading-8 text-sm"></p>
    </div>
  );
};
