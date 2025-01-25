import React, { useState } from "react";
import { ABERRATIONS } from "../utils/aberrationCalculations";

const GuessControls = ({ correctData, setResults }) => {
  const [guesses, setGuesses] = useState([]);

  const handleGuessChange = (aberration) => {
    setGuesses((prev) =>
      prev.includes(aberration)
        ? prev.filter((guess) => guess !== aberration)
        : [...prev, aberration]
    );
  };

  const handleSubmit = () => {
    const correctAberrations = Object.keys(correctData).filter(
      (key) => correctData[key] !== 0
    );
    const isCorrect =
      correctAberrations.length === guesses.length &&
      correctAberrations.every((item) => guesses.includes(item));

    setResults({
      isCorrect,
      correctAberrations,
      userGuesses: guesses,
    });
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-100 mb-6">
        Guess the Aberrations
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {ABERRATIONS.map((aberration) => (
          <label
            key={aberration}
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors"
          >
            <input
              type="checkbox"
              value={aberration}
              checked={guesses.includes(aberration)}
              onChange={() => handleGuessChange(aberration)}
              className="rounded border-gray-500 bg-gray-700 text-purple-400 focus:ring-purple-500"
            />
            <span>{aberration}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg shadow-md hover:shadow-lg hover:from-purple-700 hover:to-purple-900 transition-transform transform hover:scale-105"
      >
        Submit
      </button>
    </div>
  );
};

export default GuessControls;
