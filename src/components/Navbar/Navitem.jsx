import React from "react";
const Navitem = ({ id, item, mobile }) => {
  let className;
  if (mobile) {
    className =
      "select-none text-center text-xl w-full cursor-pointer text-cookTextDark font-medium py-4 rounded-md hover:bg-yellow-50";
  } else {
    className =
      "select-non text-center w-full cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50";
  }

  return (
    <nav key={id} className={className}>
      {item}
    </nav>
  );
};

export default Navitem;
