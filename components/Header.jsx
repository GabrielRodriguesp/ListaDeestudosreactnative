import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h2>Tasks for today</h2>
      <div className="numbers">
        <div className="studys">{props.numberstudys}</div>
        <div className="confirmeds">{props.numberConfirmed}</div>
      </div>
    </header>
  );
};

export default Header;
