import React from "react";

import Study from "./Study";

const Studys = ({ studys, time, handlestudyClick, handlestudyDeletion }) => {
  return (
    <>
      {studys
        //deixando a lista em ordem crescente
        ?.sort(function name(a, b) {
          if (a.time < b.time) {
            return -1;
          } else {
            return true;
          }
        })
        .map((study) => (
          <Study
            key={study?.id}
            study={study}
            time={time}
            handlestudyClick={handlestudyClick}
            handlestudyDeletion={handlestudyDeletion}
          />
        ))}
    </>
  );
};

export default Studys;
