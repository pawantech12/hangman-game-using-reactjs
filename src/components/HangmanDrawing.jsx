import React from "react";

const HangmanDrawing = ({ wrongGuesses }) => {
  const stages = [
    "head",
    "body",
    "left-arm",
    "right-arm",
    "left-leg",
    "right-leg",
  ];

  return (
    <div className="flex justify-center mb-4">
      <div className="hangman">
        <div className="stand"></div>
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`hangman-part ${index < wrongGuesses ? stage : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HangmanDrawing;
