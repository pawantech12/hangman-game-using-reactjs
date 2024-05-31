import React from "react";
import Stickman from "./Stickman";

function Menu({ startGame, showOptions, showInfo }) {
  return (
    <div id="menu" className="pt-2 text-5xl w-full h-3/4">
      <div id="opt" className="w-full">
        <ul className="list-none m-0 p-0 w-full">
          <li>
            <a
              onClick={startGame}
              id="play"
              className="block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-pointer hover:bg-custom-light-grey"
            >
              PLAY
            </a>
          </li>
          <li>
            <a
              onClick={showOptions}
              id="options"
              className="block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-pointer hover:bg-custom-light-grey"
            >
              OPTIONS
            </a>
          </li>
          <li>
            <a
              onClick={showInfo}
              id="auth"
              className="block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-pointer hover:bg-custom-light-grey"
            >
              INFORMATIONS
            </a>
          </li>
          <li>
            <a
              onClick={() => window.close()}
              id="exit"
              className="block text-2xl m-1 p-2 bg-custom-cream text-custom-black rounded cursor-pointer hover:bg-custom-light-grey"
            >
              EXIT
            </a>
          </li>
        </ul>
      </div>
      <Stickman />
    </div>
  );
}

export default Menu;
