import React, { useState, useEffect } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";

const words = ["react", "javascript", "tailwind", "vite", "hangman"];

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;
    if (!word.includes(letter)) setWrongGuesses(wrongGuesses + 1);
    setGuessedLetters([...guessedLetters, letter]);
  };

  useEffect(() => {
    if (wrongGuesses >= 6) {
      setModalContent(`Game Over! The word was "${word}".`);
      setShowModal(true);
    }
    if (word.split("").every((letter) => guessedLetters.includes(letter))) {
      setModalContent("Congratulations! You won!");
      setShowModal(true);
    }
  }, [wrongGuesses, guessedLetters, word]);

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <HangmanDrawing wrongGuesses={wrongGuesses} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} />
      <button
        onClick={resetGame}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Reset Game
      </button>
      {showModal && (
        <Modal content={modalContent} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
