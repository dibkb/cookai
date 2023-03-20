export const Button = ({ text, onClickHandler, type, mode }) => {
  let buttonClass;
  if (mode === "outline") {
    buttonClass =
      "w-full border bg-white w-xl py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white font-medium text-stone-700";
  } else {
    buttonClass =
      "w-full border bg-cookLime w-xl py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white font-medium text-stone-700";
  }
  return (
    <button type={type} onClick={onClickHandler} className={buttonClass}>
      {text}
    </button>
  );
};
