import React from "react";
import { createPortal } from "react-dom";
import { Button } from "../Utils";
import styles from "./joinnow.module.css";
const JoinnowModal = ({ setShowModal }) => {
  const submitFormHandeler = (e) => {
    e.preventDefault();
  };
  return createPortal(
    <section className={styles.modal__conatiner}>
      <div className={styles.modal__content}>
        <article className="mb-4 flex gap-6 items-start justify-between">
          <h2 className="font-raleway text-4xl font-semibold select-none">
            Join the Watchlist
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setShowModal(false)}
            className="w-6 h-6 hover:text-red-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </article>
        <p className="text-cookTextLight text-xs mb-4 select-none">
          My friends , Diet is a very important part of our life , every
          molecules that goes into our body decides how the body is going to
          function.
        </p>
        <form
          action="submit"
          className="flex flex-col gap-6 mt-8"
          onSubmit={submitFormHandeler}
        >
          <input
            type="text"
            placeholder="Name"
            className={styles.form__input}
          />
          <input
            type="text"
            placeholder="Email"
            className={styles.form__input}
          />
          <input
            type="number"
            placeholder="Phone Number"
            className={styles.form__input}
          />
          <small className="text-cookTextLight text-small font-medium select-none">
            NOTE : Diet is a very important part of our life , every molecules
            thatides hgoing to function.
          </small>
          <Button text={"Submit"} type="submit" />
        </form>
      </div>
    </section>,
    document.body
  );
};

export default JoinnowModal;
