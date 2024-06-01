import React from "react";

function Stickman() {
  return (
    <svg
      id="stickman"
      className="absolute bottom-[-31%] right-0"
      width="80px"
      height="100px"
    >
      <circle
        cx="40"
        cy="20"
        r="13"
        stroke="black"
        strokeWidth="5"
        fill="white"
      />
      <line x1="40" y1="35" x2="40" y2="70" fill="white" />
      <line x1="40" y1="50" x2="10" y2="20" />
      <line x1="40" y1="50" x2="70" y2="20" />
      <line x1="40" y1="70" x2="20" y2="100" />
      <line x1="40" y1="70" x2="60" y2="100" />
    </svg>
  );
}

export default Stickman;
