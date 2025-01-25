import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState } from "react";
import PlotDisplay from "./components/PlotDisplay";
import GuessControls from "./components/GuessControls";
import Results from "./components/Results";
import { generatePlotData } from "./utils/aberrationCalculations";

const App = () => {
  const [plotData, setPlotData] = useState(generatePlotData());
  const [results, setResults] = useState(null);

  const handleNewInstance = () => {
    setPlotData(generatePlotData());
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Aberration Guesser
        </h1>
        <PlotDisplay data={plotData} />
        {!results ? (
          <GuessControls
            correctData={plotData.aberrations}
            setResults={setResults}
          />
        ) : (
          <Results results={results} onNewInstance={handleNewInstance} />
        )}
      </div>
    </div>
  );
};

export default App;
