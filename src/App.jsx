import React, { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Options from "./components/Options";
import Info from "./components/Info";

const words = ["MUG", "TELEPHONE", "CAR", "HORSE", "MOUSE"]; // Sample words, extend as needed

function App() {
  const [currentView, setCurrentView] = useState("menu");
  const [word, setWord] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [errors, setErrors] = useState(0);
  const [difficulty, setDifficulty] = useState(2); // 1: Easy, 2: Medium, 3: Hard

  const startGame = () => {
    setErrors(0);
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setHiddenWord(newWord.replace(/./g, "*"));
    setCurrentView("game");
  };

  const checkLetter = (letter) => {
    if (word.includes(letter)) {
      const newHiddenWord = hiddenWord
        .split("")
        .map((char, index) => (word[index] === letter ? letter : char))
        .join("");
      setHiddenWord(newHiddenWord);
      if (newHiddenWord === word) {
        alert("Congratulations! You guessed the word!");
        setCurrentView("menu");
      }
    } else {
      setErrors(errors + 1);
      if (errors + 1 >= 11) {
        alert(`Game over! The word was: ${word}`);
        setCurrentView("menu");
      }
    }
  };

  const showOptions = () => setCurrentView("options");
  const showInfo = () => setCurrentView("info");
  const showMenu = () => setCurrentView("menu");

  const changeDifficulty = () => {
    setDifficulty(difficulty === 3 ? 1 : difficulty + 1);
  };

  return (
    <div
      id="container"
      className="flex flex-col items-center justify-center text-center w-full h-full p-5 bg-custom-gold relative"
    >
      <div className="title text-custom-cream text-4xl mb-5">HANGMAN</div>
      {currentView === "menu" && (
        <Menu
          startGame={startGame}
          showOptions={showOptions}
          showInfo={showInfo}
        />
      )}
      {currentView === "game" && (
        <Game
          hiddenWord={hiddenWord}
          errors={errors}
          checkLetter={checkLetter}
        />
      )}
      {currentView === "options" && (
        <Options difficulty={difficulty} changeDifficulty={changeDifficulty} />
      )}
      {currentView === "info" && <Info />}
      {currentView !== "menu" && (
        <div
          onClick={showMenu}
          id="back"
          className="text-center w-1/2 mx-auto bg-custom-dark-grey text-white text-2xl cursor-pointer mt-5 p-2 rounded hover:bg-custom-grey"
        >
          MENU
        </div>
      )}
    </div>
  );
}

export default App;
