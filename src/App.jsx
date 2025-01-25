import React, { useState } from "react";
import PlotDisplay from "./components/PlotDisplay";
import GuessControls from "./components/GuessControls";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { generatePlotData } from "./utils/aberrationCalculations";

const App = () => {
  const [plotData, setPlotData] = useState(generatePlotData());
  const [results, setResults] = useState(null);

  const handleNewInstance = () => {
    setPlotData(generatePlotData());
    setResults(null);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-6">
        <div className="w-full max-w-screen-lg bg-white shadow-lg rounded-lg p-6 space-y-6">
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
        <Footer />
    </div>
  );
};

export default App;
