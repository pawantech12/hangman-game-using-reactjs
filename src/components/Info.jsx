import React from "react";

function Info() {
  return (
    <div id="info" className="pt-2 text-5xl w-full">
      <div id="author" className="text-center pt-10">
        <div className="txt">
          Hangman game is about guessing words. Try to pick correct letters and
          you will win. Otherwise, you will lose.
          <br />
          <p>
            Created by
            <br />
            <a target="_blank" href="http://threeg.ct8.pl">
              <b>ThreeG</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
