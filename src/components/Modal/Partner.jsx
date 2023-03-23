import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./joinnow.module.css";
const info = ["Web Developer", "Graphics Designer", "Food Supplier"];
export const Partner = ({ setShowModal }) => {
  const [page, setPage] = useState(1);
  const [allItems, setAllItems] = useState(info);
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState({
    name: null,
    email: null,
    linkedin: null,
    phoneNumber: null,
  });
  useEffect(() => {
    if (name !== "") {
      if (name.length >= 3) {
        setError({ ...error, name: false });
      } else {
        setError({ ...error, name: true });
      }
    }
  }, [name]);
  useEffect(() => {
    if (email !== "") {
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setError({ ...error, email: false });
      } else {
        setError({ ...error, email: true });
      }
    }
  }, [email]);
  useEffect(() => {
    if (linkedin !== "") {
      if (
        linkedin.match(
          /^(http[s]?:\/\/)?([w]{3}\.)?[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?([\/]?[a-zA-Z0-9#]+\/?)*$/
        )
      ) {
        setError({ ...error, linkedin: false });
      } else {
        setError({ ...error, linkedin: true });
      }
    }
  }, [linkedin]);
  useEffect(() => {
    if (phoneNumber !== "") {
      if (phoneNumber.length >= 10) {
        setError({ ...error, phoneNumber: false });
      } else {
        setError({ ...error, phoneNumber: true });
      }
    }
  }, [phoneNumber]);
  useEffect(() => {
    if (
      error.email === false &&
      error.name === false &&
      error.phoneNumber === false &&
      error.linkedin === false
    ) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [error]);
  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://cookai.onrender.com/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          linkedin,
          job: selected[0],
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setShowModal(false);
  };
  const formOne = (
    <section className={styles.modal__conatiner}>
      <div className={styles.modal__content}>
        <main className="flex items-center justify-between">
          <h1 className="font-raleway text-3xl font-semibold text-stone-700 select-none mb-2">
            We are Hiring!
          </h1>
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
        </main>

        <small className="text-xs font-medium text-stone-500">
          Please choose a role you want to apply for
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
                  setSelected([element]);
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
                  setSelected([]);
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
          onClick={() => {
            setPage(2);
          }}
          className="w-full sm:w-1/3 border bg-cookLime w-xl py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white font-medium text-stone-700 mt-6"
        >
          Next
        </button>
      </div>
    </section>
  );
  const formTwo = (
    <section className={styles.modal__conatiner}>
      <div className={styles.modal__content}>
        <article className="mb-4 flex gap-6 items-start justify-between">
          <h2 className="font-raleway text-3xl font-semibold select-none">
            Fill the Form
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
          Join our watchlist to get exclusive offers on Launch!
        </p>
        <form
          action="submit"
          className="flex flex-col gap-2 mt-8"
          onSubmit={submitFormHandler}
        >
          <input
            type="text"
            required
            placeholder="Name"
            className={`rounded-md border text-sm font-medium py-4 px-6 ${
              error.name ? "border-red-600 bg-red-50" : ""
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <small
            className={`text-[10px] font-medium text-red-600 ml-2
          ${error.name ? "visible" : "invisible"}
          `}
          >
            Name should be atleast 3 characters
          </small>
          <input
            type="text"
            required
            placeholder="Email"
            className={`rounded-md border text-sm font-medium py-4 px-6 ${
              error.email ? "border-red-600 bg-red-50" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small
            className={`text-[10px] font-medium text-red-600 ml-2
          ${error.email ? "visible" : "invisible"}
          `}
          >
            Not a vaild email
          </small>
          <input
            type="number"
            required
            placeholder="Phone Number"
            className={`rounded-md border text-sm font-medium py-4 px-6 ${
              error.phoneNumber ? "border-red-600 bg-red-50" : ""
            }`}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <small
            className={`text-[10px] font-medium text-red-600 ml-2
          ${error.phoneNumber ? "visible" : "invisible"}
          `}
          >
            Not a valid phone number
          </small>
          <input
            type="text"
            placeholder="LinkedIn Profile Url"
            className={`rounded-md border text-sm font-medium py-4 px-6 ${
              error.linkedin ? "border-red-600 bg-red-50" : ""
            }`}
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <small
            className={`text-[10px] font-medium text-red-600 ml-2
          ${error.linkedin ? "visible" : "invisible"}
          `}
          >
            Not a valid url
          </small>
          <small className="text-cookTextLight text-small font-medium select-none">
            NOTE : Diet is a very important part of our life , every molecules
            thatides hgoing to function.
          </small>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                setPage(1);
              }}
              className="w-xl sm:w-1/3 w-full border bg-white w-xl py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white font-medium text-stone-700"
            >
              Previous
            </button>
            {validated && (
              <button
                type="submit"
                className="w-xl sm:w-1/3 border bg-cookLime py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white font-medium text-stone-700"
              >
                Submit
              </button>
            )}
            {!validated && (
              <button
                disabled={true}
                className="w-xl sm:w-1/3 border bg-cookLime py-3 rounded-lg select-none border-cookGreen font-medium text-stone-700 opacity-60"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
  return createPortal(
    <>
      {page === 1 && formOne}
      {page === 2 && formTwo}
    </>,
    document.body
  );
};
