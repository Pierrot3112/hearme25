import React, { useState } from 'react';
import '../UserStyle/d.scss';
import ChargementEvDemar from './ChargementEvDemar'; // Import your loading component
import CommencerInterface from './CommencerInterface'; // Import the component you want to show after loading

const EvaluationDetail = ({ evaluation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showTestContent, setShowTestContent] = useState(false); // Show the test content after 5 seconds

  const handleStartTest = () => {
    setIsModalOpen(true); // Open the modal
    setIsLoading(true); // Show the loading component
    console.log('Modal Opened:', isModalOpen);

    setTimeout(() => {
      setIsLoading(false); // Hide the loading component after 5 seconds
      setShowTestContent(true); // Show the test interface
      console.log('Test content shown:', showTestContent);
    }, 3000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setIsLoading(true); // Reset the loading state
    setShowTestContent(false); // Reset the test content display
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
            Compétence en {evaluation.title} : <span>25 questions, 25 minutes</span>
          </p>
        </div>
        <div className="icon">{evaluation.icon}</div>
      </div>

      <button className="demarer" onClick={handleStartTest}>
        Démarrer le test
      </button>

      <hr />
      <div className="about-ev">
        <h1>A propos de l'évaluation de {evaluation.title}</h1>
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
          <li>Si vous n'êtes pas sûr d'une réponse, il est préférable de répondre "je ne sais pas" plutôt que de répondre au hasard.</li>
          <li>Vous pouvez quitter le test, mais le minuteur continuera de fonctionner.</li>
          <li>Vous disposez de 2 tentatives par évaluation tous les 30 jours.</li>
        </ul>
      </div>

      {/* Modal Window for Loading and Test Content */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Show loading content or test content */}
            {isLoading ? (
              <ChargementEvDemar />
            ) : (
              showTestContent && (
                <CommencerInterface evaluation={evaluation} />
              )
            )}

            {/* Close Button (only shown when not loading) */}
            {!isLoading && (
              <p className="closeBtn" onClick={handleCloseModal}>
                x
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationDetail;
