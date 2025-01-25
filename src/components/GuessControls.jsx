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
    <div className="p-4 bg-gray-100 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Guess the Aberrations
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {ABERRATIONS.map((aberration) => (
          <label
            key={aberration}
            className="flex items-center space-x-2 text-gray-600"
          >
            <input
              type="checkbox"
              value={aberration}
              checked={guesses.includes(aberration)}
              onChange={() => handleGuessChange(aberration)}
              className="rounded border-gray-300"
            />
            <span>{aberration}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default GuessControls;
