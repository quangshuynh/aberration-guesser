import React, { useState } from "react";
import PlotDisplay from "./components/PlotDisplay";
import GuessControls from "./components/GuessControls";
import Results from "./components/Results";
import Header from "./components/Header";
import { generatePlotData } from "./utils/aberrationCalculations";

const App = () => {
  const [plotData, setPlotData] = useState(generatePlotData());
  const [results, setResults] = useState(null);

  const handleNewInstance = () => {
    setPlotData(generatePlotData());
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 space-y-6">
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
      </main>
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © 2025 Aberration Guesser. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
