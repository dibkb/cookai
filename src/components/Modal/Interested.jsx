import React from "react";
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
  const content = (
    <section className={styles.modal__conatiner}>
      <div className={styles.modal__content}>
        <h1 className="font-raleway text-2xl font-semibold text-stone-700 select-none mb-2">
          Why are you interested ?
        </h1>
        <small className="text-xs font-medium text-stone-500">
          Select at least two
        </small>
        <main className="grid grid-cols-1 sm:grid-cols-3 gap-4 select-none mt-6">
          {info.map((element) => {
            return (
              <span
                className="cursor-pointer border border-stone-200 h-[60px] sm:h-[150px] rounded-lg flex justify-center items-center p-4 text-center font-medium text-sm text-stone-700
                    transition ease-in-out delay-50
                  hover:scale-110 hover:bg-cookLime"
                key={JSON.stringify(element)}
              >
                {element}
              </span>
            );
          })}
        </main>
      </div>
    </section>
  );
  return createPortal(content, document.body);
};
