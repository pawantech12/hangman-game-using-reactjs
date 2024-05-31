import React from "react";

function Options({ difficulty, changeDifficulty }) {
  return (
    <div id="opcje" className="pt-2 text-5xl w-full">
      <div id="opt" className="w-full">
        <ul className="list-none m-0 p-0 w-full">
          <li>
            <a className="lock block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-default opacity-40">
              LANGUAGE
            </a>
          </li>
          <li>
            <a
              onClick={changeDifficulty}
              id="difficulty"
              className="block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-pointer"
            >
              DIFFICULTY: {difficulty}
            </a>
          </li>
          <li>
            <a className="lock block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-default opacity-40">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Options;
