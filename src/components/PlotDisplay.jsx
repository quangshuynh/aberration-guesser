import React from "react";
import Plot from "react-plotly.js";

const PlotDisplay = ({ data }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-100 mb-6">
        {data.type} Aberration Plot
      </h2>
      <Plot
        data={Object.entries(data.aberrations)
          .filter(([_, value]) => value !== 0)
          .map(([aberration, value], index) => ({
            x: Array.from({ length: 100 }, (_, i) => i / 10),
            y: Array.from({ length: 100 }, (_, i) => Math.sin(value * (i / 10))),
            type: "scatter",
            mode: "lines",
            name: `Aberration ${index + 1}`, // Generic labels for the legend
          }))}
        layout={{
          title: "",
          xaxis: {
            title: "X-axis (Sagittal)",
            titlefont: { color: "#d8dee9" },
            tickfont: { color: "#d8dee9" },
          },
          yaxis: {
            title: "Y-axis (Tangential)",
            titlefont: { color: "#d8dee9" },
            tickfont: { color: "#d8dee9" },
          },
          legend: {
            font: { color: "#d8dee9" },
          },
          paper_bgcolor: "rgba(0,0,0,0)", // Transparent background
          plot_bgcolor: "rgba(0,0,0,0)", // Transparent background
          height: 400,
        }}
        className="rounded-md"
      />
    </div>
  );
};

export default PlotDisplay;
