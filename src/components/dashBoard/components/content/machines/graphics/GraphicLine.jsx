import React from "react";
import './graphics.css'
import { Line } from "react-chartjs-2";

function GraphicLine(props) {
  const data = {
    labels: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    datasets: [
      {
        label: "produccion por mes",
        fill: false,
        backgroundColor: "rgba(73,155,234,1)",
        borderColor: "rgba(73,155,234,1)",
        pointBorderColor: "rgba(73,155,234,1)",
        pointBorderWidth: 1,
        pointHoverTadius: 5,
        pointHoverBackgroundColor: "rgba(73,155,234,1)",
        pointHoverBorderColor: "rgba(73,155,234,1)",
        pointRadius: 1,
        pointHitRadius: 10,
        data: [20, 30, 40, 10, 60, 20, 30, 40, 10, 60, 70, 100],
      },
    ],
  };

  return (
    <div className="graphic-container">
      <Line data={data} />
    </div>
  );
}

export default GraphicLine;
