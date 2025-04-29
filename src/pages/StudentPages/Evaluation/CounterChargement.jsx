import React, { useEffect, useState } from "react";

const CounterChargement = ({ onFinish=()=>{} }) => {
  const [count, setCount] = useState(4);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 33.33); // Avancement du cercle
      setCount((prev) => {
        if (prev > 1) {
          return prev - 1; // Réduit le compteur
        } else {
          clearInterval(interval); // Arrêter l'intervalle quand le compteur atteint 0
          onFinish(); // Appeler la fonction de fin si définie
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="countdown-circle mt-5">
      <div className="circle">
        <svg>
          <circle cx="50" cy="50" r="45" className="background" />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="progress"
            style={{ strokeDashoffset: `calc(282 - (282 * ${progress}) / 100)` }}
          />
        </svg>
        <div className="count">{count}</div>
      </div>
      <p className="text">A partir de ...</p>
    </div>
  );
};

export default CounterChargement;
