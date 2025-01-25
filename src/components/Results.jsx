import React from "react";

const Results = ({ results, onNewInstance }) => {
  return (
    <div className="p-4 bg-gray-100 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Results</h2>
      {results.isCorrect ? (
        <p className="text-green-600 font-bold">Congratulations! You guessed correctly!</p>
      ) : (
        <>
          <p className="text-red-600 font-bold">Incorrect Guess.</p>
          <p>
            <strong>Correct Aberrations:</strong>{" "}
            {results.correctAberrations.join(", ")}
          </p>
          <p>
            <strong>Your Guesses:</strong> {results.userGuesses.join(", ")}
          </p>
        </>
      )}
      <button
        onClick={onNewInstance}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default Results;
