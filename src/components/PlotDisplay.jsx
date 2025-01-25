import React from "react";
import Plot from "react-plotly.js";
import { calculatePlotPoints } from "../utils/aberrationCalculations";

const PlotDisplay = ({ data }) => {
    return (
      <div className="p-4 bg-gray-100 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {data.type} Aberration Plot
        </h2>
        <Plot
          data={Object.entries(data.aberrations)
            .filter(([_, value]) => value !== 0)
            .map(([aberration, value]) => ({
              x: Array.from({ length: 100 }, (_, i) => i / 10),
              y: Array.from({ length: 100 }, (_, i) => Math.sin(value * (i / 10))),
              type: "scatter",
              mode: "lines",
              name: aberration,
            }))}
          layout={{
            title: "",
            xaxis: { title: "X-axis (Sagittal)" },
            yaxis: { title: "Y-axis (Tangential)" },
            height: 400,
          }}
          className="rounded-md"
        />
      </div>
    );
  };
  
  export default PlotDisplay;