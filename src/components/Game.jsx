import React from "react";

function Game({ hiddenWord, errors, checkLetter }) {
  return (
    <div id="game" className="pt-2 text-5xl w-full">
      <div id="svg" className="mx-auto bg-custom-cream w-72 h-56 relative">
        {errors > 0 && (
          <svg id="t1" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash "
              x1="20"
              y1="200"
              x2="20"
              y2="20"
            />
          </svg>
        )}
        {/* Beam */}
        {errors > 1 && (
          <svg id="t2" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="20"
              y1="20"
              x2="160"
              y2="20"
            />
          </svg>
        )}
        {/* Rope */}
        {errors > 2 && (
          <svg id="t3" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="21"
              y1="160"
              x2="60"
              y2="200"
            />
          </svg>
        )}
        {errors > 3 && (
          <svg id="t3" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="44"
              x2="22"
              y2="50"
              y1="23"
            ></line>
          </svg>
        )}
        {errors > 4 && (
          <svg id="t3" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="140"
              x2="140"
              y2="33"
              y1="20"
            ></line>
          </svg>
        )}
        {/* Head */}
        {errors > 5 && (
          <svg id="t4" width="200px" height="230px" className="absolute">
            <circle
              className="tb1 animate-dash"
              cx="140"
              cy="50"
              r="15"
              stroke="black"
              strokeWidth="5"
              fill="white"
            />
          </svg>
        )}
        {/* Body */}
        {errors > 6 && (
          <svg id="t5" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="140"
              y1="65"
              x2="140"
              y2="100"
            />
          </svg>
        )}
        {/* Left Arm */}
        {errors > 7 && (
          <svg id="t6" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="140"
              y1="70"
              x2="120"
              y2="100"
            />
          </svg>
        )}
        {/* Right Arm */}
        {errors > 8 && (
          <svg id="t7" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="140"
              y1="70"
              x2="160"
              y2="100"
            />
          </svg>
        )}
        {/* Left Leg */}
        {errors > 9 && (
          <svg id="t8" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="140"
              y1="100"
              x2="120"
              y2="130"
            />
          </svg>
        )}
        {/* Right Leg */}
        {errors > 10 && (
          <svg id="t9" width="200px" height="230px" className="absolute">
            <line
              className="tb1 animate-dash"
              x1="140"
              y1="100"
              x2="160"
              y2="130"
            />
          </svg>
        )}
      </div>
      <div id="passhint" className="flex justify-center mt-5">
        <div
          id="pass"
          className="text-2xl w-60 my-1 rounded-lg bg-custom-cream p-1"
        >
          {hiddenWord}
        </div>
        <div className="hint w-12 text-3xl my-1 text-custom-grey bg-custom-black flex justify-center items-center ml-2 rounded-lg opacity-30 cursor-pointer">
          ?
        </div>
      </div>
      <div
        id="alphabet"
        className="text-custom-cream text-lg mt-5 flex flex-wrap justify-center"
      >
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <span
            key={letter}
            className="bg-custom-orange m-1 p-1 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => checkLetter(letter)}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Game;
