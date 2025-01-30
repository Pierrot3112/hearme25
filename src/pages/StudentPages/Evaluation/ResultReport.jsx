import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ResultReport = ({ score, totalQuestions, evaluation }) => {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Questions",
        data: [score, totalQuestions - score],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="result">
      <h1>{evaluation.title}</h1> {/* Displaying the evaluation title */}
      <p>
        Vous avez obtenu un score de <strong>{score}</strong> sur <strong>{totalQuestions}</strong>.
      </p>
      <div className="result-container">
        <div className="chart-container">
          <h2>Niveau débutant</h2>
          <Bar data={data} options={options} />
        </div>
        <div className="score-container">
          <h2>Points à améliorer</h2>
          <ul>
            <li>L'évaluation aa une durée limitée.</li>
            <li>n'utilisez pas de moteurs de recherches et ne demandez pas d'aide à d'autre personnes.</li>
            <li>Une fois que vous avez soumis une réponse, vous ne pouvez plus de renevir en arrière.</li>
            <li>Si vous n'êtes pas sur d'une réponse, il est préférable de rrépondre "je ne sais pas" plutôt que de devenir au hasard.</li>
            <li>Vous pouvez quitter le teste, mais le minuteur continuera de fonctionner.</li>
            <li>Voius disposez de 2 tentatives par évaluation tous les 30 jjours.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultReport;