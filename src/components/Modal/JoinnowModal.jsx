import React from "react";
import { createPortal } from "react-dom";
import "./joinnow.css";
const JoinnowModal = () => {
  return createPortal(
    <section className="modal__conatiner">
      <div className="modal__content">
        <article className="mb-4">
          <h2 className="font-raleway text-2xl font-semibold select-none">
            Join the Watchlist
          </h2>
        </article>
        <p className="text-cookTextLight text-sm mb-4">
          My friends , Diet is a very important part of our life , every
          molecules that goes into our body decides how the body is going to
          function.
        </p>
        <form action="submit">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
        </form>
      </div>
    </section>,
    document.body
  );
};

export default JoinnowModal;
