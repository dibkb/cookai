import React from "react";

const Navitem = ({ id, item, mobile }) => {
  return (
    <nav
      key={id}
      className="text-center w-full cursor-pointer text-cookTextDark font-medium text-base py-2 px-4 rounded-md hover:bg-yellow-50"
    >
      {item}
    </nav>
  );
};

export default Navitem;
