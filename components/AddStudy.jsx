import React, { useState } from "react";
import Button from "./Button";
import "./AddStudy.css";

const AddStudy = ({ handlestudyAddition, changeScreen }) => {
  const [inputData, setInputData] = useState("");
  const [inputTime, setInputTime] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddstudyClick = () => {
    handlestudyAddition(inputData, inputTime);
    changeScreen();
    setInputData("");
  };

  const handleTimeChange = (e) => {
    setInputTime(e.target.value);
  };

  return (
    <div>
      <div className="add-study-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          className="add-study-input"
          type="text"
        />

        <input type="time" onChange={handleTimeChange} value={inputTime} />
      </div>
      <Button onClick={handleAddstudyClick}>Confirm</Button>
    </div>
  );
};

export default AddStudy;
