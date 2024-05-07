import React from "react";

const StartScreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz !</h2>
      <h3>{numQuestions} question to testy your mastery</h3>
      <button className="btn btn-ui">Lets's start</button>
    </div>
  );
};

export default StartScreen;
