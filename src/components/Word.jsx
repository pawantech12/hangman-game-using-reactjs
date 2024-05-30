import React from "react";

const Word = ({ word, guessedLetters }) => {
  return (
    <div className="flex justify-center mb-4">
      {word.split("").map((letter, index) => (
        <span key={index} className="border-b-5 border-gray-500 mx-1 text-2xl">
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default Word;
