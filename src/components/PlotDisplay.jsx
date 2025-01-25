import React from "react";
import Plot from "react-plotly.js";

const PlotDisplay = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-xl max-w-full md:max-w-4xl mx-auto mb-6">
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-100 mb-4">
        {data.type} Aberration Plot
      </h2>
      <div>
        <Plot
          data={Object.entries(data.aberrations)
            .filter(([_, value]) => value !== 0)
            .map(([aberration, value], index) => ({
              x: Array.from({ length: 100 }, (_, i) => i / 10),
              y: Array.from({ length: 100 }, (_, i) => Math.sin(value * (i / 10))),
              type: "scatter",
              mode: "lines",
              name: `Aberration ${index + 1}`,
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
            legend: { font: { color: "#d8dee9" } },
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
            height: 400,
          }}
          config={{ responsive: true }}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default PlotDisplay;
