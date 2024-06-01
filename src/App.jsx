import React, { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Options from "./components/Options";
import Info from "./components/Info";
import Modal from "./components/Modal";

const words = [
  "MUG",
  "TELEPHONE",
  "CAR",
  "HORSE",
  "MOUSE",
  "DOG",
  "TABLE",
  "TANK",
  "SQUARE",
  "HOUSE",
  "MEADOW",
  "BULL",
  "TOWEL",
  "BAG",
  "BOOK",
  "PLATE",
  "PERFUME",
  "PEN",
  "BENCH",
  "BLOCK",
  "ELEPHANT",
  "COMMODE",
  "LAPTOP",
  "CABLE",
  "CAN",
  "SPOON",
  "HAND",
  "EAR",
  "PIERCE",
  "DRESS",
  "BLANKET",
  "SHOES",
  "CAT",
  "SAND",
  "LAVA",
  "SHARK",
  "DRAWER",
  "FIGURE",
  "DESK",
  "WIPER",
  "WATER",
  "SANDWICH",
  "TRUCK",
  "DOLL",
  "GUITAR",
  "DRUM",
  "PIANO",
  "PLATTER",
  "PUZZLE",
  "TIGER",
  "BEAR",
  "LINOLEUM",
  "STICKER",
  "FOLDER",
  "FILE",
  "LIST",
  "CLOCK",
  "FOX",
  "BUTTERFLY",
  "KEYBOARD",
  "CAMERA",
  "LENS",
  "SMARTPHONE",
  "FISHNET",
  "STOCKING",
  "CLOTH",
  "TURTLE",
  "FISH",
  "BONE",
  "ICE",
  "GROUND",
  "SALAD",
  "BIKE",
  "PLANE",
  "TRAIN",
  "METRO",
  "SHIP",
  "VEST",
  "PHOTO",
  "STRING",
  "CHAIN",
  "BRACELET",
  "COLLAR",
  "FUR",
  "DISH",
  "SINK",
  "COOKER",
  "AQUARIUM",
  "WOOL",
  "PILLOW",
  "CAP",
  "BAND",
  "BANDANA",
  "DRAGON",
  "SHELL",
  "GLOBE",
  "MICROSCOPE",
  "JACKET",
  "PICTURE",
  "KARMA",
  "RIPE",
  "RUBBER",
  "COUNTER",
  "CASES",
  "SWITCH",
  "ILO",
  "BROOM",
  "BIN",
  "SHEET",
  "LEAF",
]; // Sample words, extend as needed

function App() {
  const [currentView, setCurrentView] = useState("menu");
  const [word, setWord] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [errors, setErrors] = useState(0);
  const [difficulty, setDifficulty] = useState(2); // 1: Easy, 2: Medium, 3: Hard
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const startGame = () => {
    setErrors(0);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setGameOver(false);
    setGameWon(false);
    setShowModal(false);
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
        // alert("Congratulations! You guessed the word!");
        setGameWon(true);
        setGameOver(true);
        setShowModal(true);
        // setCurrentView("menu");
      }
      setCorrectLetters((prev) => [...prev, letter]);
    } else {
      setErrors(errors + 1);
      if (errors + 1 >= 11) {
        // alert(`Game over! The word was: ${word}`);
        setGameOver(true);
        setGameWon(false);
        setShowModal(true);
        // setCurrentView("menu");
      }
      setIncorrectLetters((prev) => [...prev, letter]);
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
      className=" w-full h-screen bg-custom-gold flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center text-center p-5 relative w-1/3 max-[950px]:w-1/2 max-sm:w-4/5 max-[410px]:w-11/12">
        <div className="title text-white text-4xl mb-5">HANGMAN</div>
        {currentView === "menu" && (
          <>
            <Menu
              startGame={startGame}
              showOptions={showOptions}
              showInfo={showInfo}
            />
          </>
        )}

        {currentView === "game" && (
          <Game
            hiddenWord={hiddenWord}
            errors={errors}
            checkLetter={checkLetter}
            correctLetters={correctLetters}
            incorrectLetters={incorrectLetters}
          />
        )}
        {currentView === "options" && (
          <Options
            difficulty={difficulty}
            changeDifficulty={changeDifficulty}
          />
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
        {showModal && (
          <Modal onClose={startGame}>
            {gameWon
              ? "Congratulations! You win!"
              : `Game over. The word was "${word}".`}
          </Modal>
        )}
      </div>
      {currentView === "menu" && (
        <div className="w-full absolute bottom-0 h-1/3 bg-custom-black"></div>
      )}
    </div>
  );
}

export default App;
