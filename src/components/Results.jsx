import React from "react";

const Results = ({ results, onNewInstance }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Results</h2>
      {results.isCorrect ? (
        <p className="text-green-400 font-bold text-lg">
          🎉 Congratulations! You guessed correctly!
        </p>
      ) : (
        <>
          <p className="text-red-400 font-bold text-lg">❌ Incorrect Guess!</p>
          <p className="text-gray-300 mt-2">
            <strong className="text-gray-100">Correct Aberrations:</strong>{" "}
            {results.correctAberrations.join(", ")}
          </p>
          <p className="text-gray-300 mt-2">
            <strong className="text-gray-100">Your Guesses:</strong>{" "}
            {results.userGuesses.join(", ")}
          </p>
        </>
      )}
      <button
        onClick={onNewInstance}
        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg shadow-md hover:shadow-xl hover:from-purple-700 hover:to-purple-900 transition-transform transform hover:scale-105"
      >
        🔄 Try Again
      </button>
    </div>
  );
};

export default Results;
