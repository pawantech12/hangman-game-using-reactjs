import React from "react";
import classNames from "classnames";

const Keyboard = ({ handleGuess, guessedLetters }) => {
  const keys = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="flex w-1/2 gap-2 flex-wrap justify-center">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => handleGuess(key)}
          className={classNames(
            "px-4 py-2 rounded border",
            guessedLetters.includes(key)
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white"
          )}
          disabled={guessedLetters.includes(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
