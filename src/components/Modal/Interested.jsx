import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./joinnow.module.css";
const info = [
  "Weight Change",
  "All in One Platform",
  "AI Diet Plan",
  "Track Body",
  " Workout & Food Variety",
  "Save Time",
];
export const Interested = () => {
  const [allItems, setAllItems] = useState(info);
  const [selected, setSelected] = useState([]);
  const content = (
    <section className={styles.modal__conatiner}>
      <div className={styles.modal__content}>
        <h1 className="font-raleway text-3xl font-semibold text-stone-700 select-none mb-2">
          Why are you interested ?
        </h1>
        <small className="text-xs font-medium text-stone-500">
          Select at least two
        </small>
        <main className="grid grid-cols-1 sm:grid-cols-3 gap-4 select-none mt-6">
          {allItems.map((element) => {
            return (
              <span
                className="cursor-pointer border border-stone-200 h-[60px] sm:h-[150px] rounded-lg flex justify-center items-center p-4 text-center font-medium text-sm text-stone-700
                    transition ease-in-out delay-50
                  hover:scale-110 hover:bg-cookLime"
                key={JSON.stringify(element)}
                onClick={() => {
                  setSelected((prev) => [...prev, element]);
                  setAllItems((prev) =>
                    prev.filter((item) => item !== element)
                  );
                }}
              >
                {element}
              </span>
            );
          })}
        </main>
        <main className="grid grid-cols-1 sm:grid-cols-3 gap-4 select-none my-6">
          {selected.map((element) => {
            return (
              <span
                className="cursor-pointer border border-stone-200 h-[60px] sm:h-[150px] rounded-lg flex justify-between items-center p-4 text-center font-medium text-sm text-stone-700
                    transition ease-in-out delay-50
                  hover:scale-110 bg-cookLime group"
                key={JSON.stringify(element)}
                onClick={() => {
                  setAllItems((prev) => [...prev, element]);
                  setSelected((prev) =>
                    prev.filter((item) => item !== element)
                  );
                }}
              >
                <p>{element}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            );
          })}
        </main>
        <p className="text-xs text-stone-500 font-medium">
          My friends , Diet is a very important part of our life , every
          molecules that goes into our body decides how the body is going to
          function.
        </p>
        <button
          onClick={() => {}}
          className="w-full border bg-cookLime w-xl py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white font-medium text-stone-700 mt-6"
        >
          Next
        </button>
      </div>
    </section>
  );
  return createPortal(content, document.body);
};
