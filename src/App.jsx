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
    <div id="root">
      <Header />
      <main>
        <div className="card">
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
