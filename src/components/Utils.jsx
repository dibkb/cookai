export const Button = ({ text, onClickHandler, type, mode }) => {
  let buttonClass;
  if (mode === "outline") {
    buttonClass =
      "w-full border bg-white px-16 py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white";
  } else {
    buttonClass =
      "w-full border bg-cookLime px-16 py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white";
  }
  return (
    <button type={type} onClick={onClickHandler} className={buttonClass}>
      {text}
    </button>
  );
};
