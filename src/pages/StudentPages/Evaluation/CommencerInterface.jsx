import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CounterChargement from "./CounterChargement"; // Importer le composant CountdownCircle
import EvaluationStart from "./EvaluationStart"; // Importer le nouveau composant NextInterface
import logo from "../../../assets/images/lgl.png";

const CommencerInterface = ({ evaluation }) => {
  const [currentStep, setCurrentStep] = useState("start"); // État pour gérer les étapes

  const handleStartClick = () => {
    setCurrentStep("countdown"); // Passer à l'étape du compteur
  };

  const handleCountdownFinish = () => {
    setCurrentStep("nextInterface"); // Passer à la nouvelle interface après le compteur
  };

  return (
    <div className="start-interface-container">
      {currentStep === "start" && evaluation && (
        <section>
          <div className="fq-rg">
            <div className="space"></div>
            <div className="btn-fq-rg">
              <button>
                <HelpOutlineIcon />
                Réglages
              </button>
              <button>
                FAQ
                <InfoOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="container">
            <div className="lg">
              <img src={logo} alt="logo" />
            </div>
            <h2>{evaluation.title}</h2>
            <p className="t-d">
              Découvrez votre niveau de compétence et recevez des
              recommandations d'apprentissage personnalisées.
            </p>
            <div className="q-d">
              <p>
                <ContentCopyIcon style={{ fontSize: "16px" }} /> 25 questions.
              </p>
              <p>
                <AccessTimeIcon style={{ fontSize: "16px" }} /> 25 minutes
              </p>
            </div>
            <div className="btn-start">
              <button onClick={handleStartClick}>Commencer</button>
            </div>
            <p className="mt-3">
              En moyenne, les utilisateurs terminent le test en 12 minutes
            </p>
          </div>
        </section>
      )}
   {currentStep === "countdown" && (
        <CounterChargement onFinish={handleCountdownFinish} />
      )}
      {currentStep === "nextInterface" && <EvaluationStart evaluation={evaluation} />}
    </div>
  );
};

export default CommencerInterface;
