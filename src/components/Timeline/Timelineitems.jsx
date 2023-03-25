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
    <div className="flex flex-col gap-8 text-center items-center mt-12">
      <section className="flex gap-4 items-center">
        <main className="bg-stone-800 text-white w-fit px-12 py-6 rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <BsFillRocketFill size={45} />
          <p className="text-sm">Idea</p>
        </main>
        <p className="font-semibold italic">May 2021</p>
      </section>
      <p className="font-medium text-stone-700 leading-8 text-sm">
        Despite decades of diet fads and government-issued food pyramids, we
        still know surprisingly little about nutrition science! The idea that
        there is one optimal diet for everyone is a fundamental flaw in the
        entire premise. It contradicts the remarkable diversity of human
        metabolism, microbiome (the 40 trillion bacteria from approximately
        1,000 species that live in our guts), and environment (lifestyle, family
        history, medical conditions, medications) that distinguishes each of us.
        A Good diet has to be individualised. There are also efforts underway in
        the pitch. Deep learning, another subtype of A.I, is used in some
        ongoing nutrition studies to accurately determine what participants are
        eating from smartphone photos of their plates of food. This eliminates
        the need to manually enter data(as long as participants remember to take
        the picture). But that is a single type of data. Rather than just
        creating a simple calorie calculator, our idea is to process all of our
        data — workout, activity, sleep, stress level, medications, genome,
        microbiome, and glucose — from multiple devices, such as skin patches
        and smartwatches. With advanced algorithms, this is entirely possible,
        taking into account all aspects of dieting such as body composition,
        adherence, weight change rate trends, hunger, and fatigue. The important
        thing to remember is that we will not simply collect this information.
        An algorithm will constantly assess how these data points trend in
        relation to one another and will make appropriate adjustments.
      </p>
    </div>
  );
};
export const Team = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center mt-12">
      <section className="flex gap-4 items-center">
        <main className="bg-stone-800 text-white w-fit px-12 py-6 rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <RiTeamFill size={45} />
          <p className="text-sm">Team</p>
        </main>
        <p className="font-semibold italic">May 2021</p>
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
    <div className="flex flex-col gap-8 text-center items-center mt-12">
      <section className="flex gap-4 items-center">
        <main className="bg-stone-800 text-white w-fit px-12 py-6 rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <TfiWorld size={45} />
          <p className="text-sm">Website</p>
        </main>
        <p className="font-semibold italic">March 2023</p>
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
    <div className="flex flex-col gap-8 text-center items-center mt-12">
      <section className="flex gap-4 items-center">
        <main className="bg-stone-800 text-white w-fit px-12 py-6 rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <BsDatabaseFill size={45} />
          <p className="text-sm">Database</p>
        </main>
        <p className="font-semibold italic">TBD</p>
      </section>
      <p className="font-medium text-stone-700 leading-8 text-sm"></p>
    </div>
  );
};
export const App = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center mt-12">
      <section className="flex gap-4 items-center">
        <main className="bg-stone-800 text-white w-fit px-12 py-6 rounded-2xl shadow-md flex flex-col gap-4 items-center">
          <AiFillAppstore size={45} />
          <p className="text-sm">App</p>
        </main>
        <p className="font-semibold italic">TBD</p>
      </section>
      <p className="font-medium text-stone-700 leading-8 text-sm"></p>
    </div>
  );
};
