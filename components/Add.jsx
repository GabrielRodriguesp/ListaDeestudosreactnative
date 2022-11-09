import React from "react";

import "./Add.css";

const Add = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="buttonAdd">
      {children}
    </button>
  );
};

export default Add;
