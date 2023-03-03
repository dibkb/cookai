export const Button = ({ text, onClickHandler, type }) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className=" border mx-auto bg-cookLime px-16 py-3 rounded-lg select-none border-cookGreen hover:bg-cookDarkGreen hover:text-white"
    >
      {text}
    </button>
  );
};
