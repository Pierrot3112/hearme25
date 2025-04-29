import React, { useState } from 'react';
import '../UserStyle/d.scss';
import { useNavigate } from "react-router-dom";

const EvaluationDetail = ({ evaluation }) => {
  const navigate = useNavigate();
  const handleStartTest = () => {
    navigate(`/user/evaluation/${evaluation.id}`);
  };

  return (
    <div className="ev-details">
      <p className="title">Evaluations</p>
      <div className="ev-hd">
        <div className="d">
          <h1 style={{ fontWeight: 'bold' }}>{evaluation.title}</h1>
          <p>
            Demontrer votre sens du détails et compétences et voyez vous vous
            situez par rapport aux autres
          </p>
          <p>
            Compétence en {evaluation.title} : <span>{evaluation.nb_quizz} questions, {evaluation.duree|| 10} minutes</span>
          </p>
        </div>
        <div className="icon">{evaluation.icon}</div>
      </div>

      <button className="demarer" onClick={handleStartTest}>
        Démarrer le test
      </button>

      <hr />
      <div className="about-ev">
        <h1>A propos de l'évaluation de {evaluation.titre}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam esse temporibus reiciendis aliquid culpa enim asperiores nesciunt vel autem voluptates, ut iusto sit impedit nihil tempora consequatur cumque, error ex!
        </p>
      </div>
      <div className="instruct-ev">
        <h1>Instructions</h1>
        <ul>
          <li>L'évaluation a une durée limitée.</li>
          <li>N'utilisez pas de moteur de recherche et ne demandez pas d'aide à d'autres personnes.</li>
          <li>Une fois que vous avez soumis une réponse, vous ne pouvez revenir en arrière.</li>
          {/* <li>Si vous n'êtes pas sûr d'une réponse, il est préférable de répondre "je ne sais pas" plutôt que de répondre au hasard.</li> */}
          <li>Vous pouvez quitter le test, mais le minuteur continuera de fonctionner.</li>
          <li>Vous disposez de 2 tentatives par évaluation tous les 30 jours.</li>
        </ul>
      </div>
    </div>
  );
};

export default EvaluationDetail;
