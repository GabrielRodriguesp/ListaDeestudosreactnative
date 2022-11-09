import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Studys from "./components/Studys";
import AddStudy from "./components/AddStudy";
import Add from "./components/Add";
import CleanAll from "./components/CleanAll";

const App = () => {
  const [studys, setstudys] = useState(
    JSON.parse(localStorage.getItem("studys")) ||
      localStorage.setItem("studys", JSON.stringify([]))
  );

  const handlestudyClick = (studyId) => {
    const newstudys = studys.map((study) => {
      if (study.id === studyId)
        return { ...study, confirmed: !study.confirmed };

      return study;
    });

    setstudys(newstudys);
    SaveStudys(newstudys);
  };

  const [screenAdd, setScreenAdd] = useState(false);

  function changeScreen() {
    setScreenAdd(!screenAdd);
  }

  const handlestudyAddition = (studyTitle, studyTime) => {
    const newstudys = [
      ...studys,
      {
        title: studyTitle,
        time: studyTime,
        id: uuidv4(),
        confirmed: false,
      },
    ];
    setstudys(newstudys);
    SaveStudys(newstudys);
  };

  const handlestudyDeletion = (studyId) => {
    const newstudys = studys?.filter((study) => study.id !== studyId);

    setstudys(newstudys);
    SaveStudys(newstudys);
  };

  function studysFiltered() {
    let filter = studys?.filter((study) => study.confirmed === true);
    return filter?.length;
  }

  const SaveStudys = (newstudys) => {
    localStorage.setItem("studys", JSON.stringify(newstudys));
  };

  const handleCleanAll = () => {
    setstudys([]);
    SaveStudys([]);
  };

  return (
    <div className="container">
      <Header
        numberConfirmed={studysFiltered()}
        numberstudys={studys?.length}
      />
      <Add onClick={changeScreen}>{screenAdd ? "Cancel" : "Add"}</Add>

      {screenAdd && (
        <AddStudy
          handlestudyAddition={handlestudyAddition}
          changeScreen={changeScreen}
        />
      )}
      {!screenAdd && (
        <div>
          <Studys
            studys={studys}
            handlestudyClick={handlestudyClick}
            handlestudyDeletion={handlestudyDeletion}
          />
          {studys?.length > 2 && (
            <CleanAll onClick={handleCleanAll} children="Clear All" />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
