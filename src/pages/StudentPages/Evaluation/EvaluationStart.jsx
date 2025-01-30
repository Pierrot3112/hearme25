import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResultReport from "./ResultReport";
import CircularProgressBar from "./CircularProgressBar";
import data from "../data.json";
import ProgressBar from "./ProgessBar";

const EvaluationStart = ({ evaluation, onFinish }) => {
  const questions = data.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes en secondes
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleQuizFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex]);

  const handleQuizFinish = () => {
    setFinished(true);
    toast.success("🎉 Quiz terminé ! Consultez vos résultats.", {
      position: "top-center",
      autoClose: 3000,
    });
    if (onFinish) onFinish();
  };

  const handleOptionClick = (option) => setSelectedOption(option);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      handleQuizFinish();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="quiz-container">
      <ToastContainer />
      {!finished ? (
        <>
          <ProgressBar progress={progress} completed={currentQuestionIndex + 1} total={questions.length} />
          <div className="question-container">
            <h2>Question {currentQuestionIndex + 1} sur {questions.length}</h2>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedOption === option ? "selected" : ""}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="navigation-buttons">
              <button className="prev-button" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                Précédent
              </button>
              <button
                className="next-button"
                onClick={handleNext}
                disabled={!selectedOption}
              >
                {currentQuestionIndex === questions.length - 1 ? "Valider tous les tests" : "Suivant"}
              </button>
            </div>
            <div className="timer-container">
              <CircularProgressBar timeLeft={timeLeft} totalTime={25 * 60} />
              <p>Temps restant : {formatTime(timeLeft)}</p>
            </div>
          </div>
        </>
      ) : (
        <ResultReport score={score} totalQuestions={questions.length} evaluation={evaluation} />
      )}
    </div>
  );
};

export default EvaluationStart;
