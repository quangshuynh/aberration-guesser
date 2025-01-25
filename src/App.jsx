import React, { useState } from "react";
import PlotDisplay from "./components/PlotDisplay";
import GuessControls from "./components/GuessControls";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { generatePlotData } from "./utils/aberrationCalculations";

const App = () => {
  const [plotData, setPlotData] = useState(generatePlotData());
  const [results, setResults] = useState(null);

  const handleNewInstance = () => {
    setPlotData(generatePlotData());
    setResults(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl bg-gray-700 rounded-lg p-4 md:p-6 shadow-lg">
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
