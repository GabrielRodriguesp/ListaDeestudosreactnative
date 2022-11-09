import React from "react";

import "./CleanAll.css";

const CleanAll = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="buttonClean">
      {children}
    </button>
  );
};

export default CleanAll;
