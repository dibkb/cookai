import React from "react";
import { createPortal } from "react-dom";
import { Star } from "../../utils/icons";
import { Button } from "../Utils";
import "./joinnow.css";
const JoinnowModal = () => {
  const submitFormHandeler = (e) => {
    e.preventDefault();
  };
  return createPortal(
    <section className="modal__conatiner">
      <div className="modal__content">
        <article className="mb-4 flex gap-6 items-center">
          <h2 className="font-raleway text-4xl font-semibold select-none">
            Join the Watchlist
          </h2>
          <Star />
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
          <input type="text" placeholder="Name" className="form__input" />
          <input type="text" placeholder="Email" className="form__input" />
          <input
            type="number"
            placeholder="Phone Number"
            className="form__input"
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
