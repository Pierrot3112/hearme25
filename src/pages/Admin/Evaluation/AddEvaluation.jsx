import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axiosInstance from '../../../Auth/services/axiosInstance';

const AddEvaluation = () => {
  const defaultForm = {
    titre: '',
    auteur: '',
    description: '',
    formation: '',
    level: '',
    icon: null,
  }
  const defaultQuizz = [{ question: '', responses: [''], image: null, correctAnswer: null },]
  // ─── État Évaluation ─────────────────────────────────────────────────────────
  const [formValues, setFormValues] = useState(defaultForm);
  const [formations, setFormations] = useState([]);

  // ─── État Quizz & Pagination ────────────────────────────────────────────────
  const [quizz, setQuizz] = useState(defaultQuizz);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ─── Récupérer la liste des formations ───────────────────────────────────────
  useEffect(() => {
    const getFormations = async () => {
      try {
        const { data } = await axiosInstance.get('/courses/formation/');
        setFormations(data);
      } catch (err) {
        console.error('Erreur fetch formations:', err.response?.data || err.message);
      }
    };
    getFormations();
  }, []);

  // ─── Handlers Évaluation ─────────────────────────────────────────────────────
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChangeIcon = (e) => {
    const file = e.target.files[0];
    setFormValues((prev) => ({ ...prev, icon: file }));
  };

  // ─── Handlers Quizz ───────────────────────────────────────────────────────────
  const handleQuestionChange = (e) => {
    const copy = [...quizz];
    copy[currentIndex].question = e.target.value;
    setQuizz(copy);
  };

  const handleResponseChange = (rIdx, e) => {
    const copy = [...quizz];
    copy[currentIndex].responses[rIdx] = e.target.value;
    setQuizz(copy);
  };

  const addResponse = () => {
    const copy = [...quizz];
    copy[currentIndex].responses.push('');
    setQuizz(copy);
  };

  const removeResponse = (rIdx) => {
    const copy = [...quizz];
    copy[currentIndex].responses.splice(rIdx, 1);
    setQuizz(copy);
  };

  const handleFileChangeQuiz = (e) => {
    const copy = [...quizz];
    copy[currentIndex].image = e.target.files[0];
    setQuizz(copy);
  };

  const handleCorrectChange = (e) => {
    const idx = parseInt(e.target.value, 10);
    const copy = [...quizz];
    copy[currentIndex].correctAnswer = isNaN(idx) ? null : idx;
    setQuizz(copy);
  };

  const goToPrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const goToNext = () => {
    if (currentIndex < quizz.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // créer un nouveau quiz quand on est au dernier
      setQuizz((prev) => [
        ...prev,
        { question: '', responses: [''], image: null, correctAnswer: null },
      ]);
      setCurrentIndex((i) => i + 1);
    }
  };

  // ─── Soumission du formulaire ────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // champs évaluation
    formData.append('titre', formValues.titre);
    formData.append('auteur', formValues.auteur);
    formData.append('description', formValues.description);
    formData.append('level', formValues.level);
    formData.append('formation', formValues.formation);
    if (formValues.icon) formData.append('icon', formValues.icon);

    // champs quiz imbriqués
    quizz.forEach((quizItem, qIdx) => {
      formData.append(`quiz[${qIdx}][question]`, quizItem.question);
      quizItem.responses.forEach((resp, rIdx) => {
        formData.append(`quiz[${qIdx}][responses][${rIdx}]`, resp);
      });
      formData.append(
        `quiz[${qIdx}][correctAnswer]`,
        quizItem.correctAnswer ?? ''
      );
      if (quizItem.image) {
        formData.append(`quiz_image_${qIdx}`, quizItem.image);
      }
    });
    
    try {
      const res = await axiosInstance.post('/evaluations/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormValues(defaultForm)
      setQuizz(defaultQuizz)
      setCurrentIndex(0)
      console.log('Suc', res.data);
    } catch (err) {
      console.error('Erreur soumissio', err.response?.data || err.message);
    }
  };

  const currentQuiz = quizz[currentIndex];

  return (
    <section className="addEvaluation-container">
      <h2>Ajouter une nouvelle évaluation</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Évaluation */}
        <div className="evaluation-description">
            <div className="form-group">
                {/* Colonne gauche */}
                <div className="first-group">
                    <input
                        type="text"
                        name="titre"
                        placeholder="Titres"
                        value={formValues.titre}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formValues.description}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Colonne droite */}
                <div className="second-group">
                <input
                    type="text"
                    name="auteur"
                    placeholder="Auteur"
                    value={formValues.auteur}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="level"
                    placeholder="Niveau de l’évaluation"
                    value={formValues.level}
                    onChange={handleInputChange}
                />
                <div className="formation-choix">
                    <select
                    name="formation"
                    value={formValues.formation}
                    onChange={handleInputChange}
                    >
                    <option value="">choisir la formation</option>
                    {formations.map((f) => (
                        <option key={f.id} value={f.id}>
                        {f.nom}
                        </option>
                    ))}
                    </select>
                </div>
            </div>

            {/* Colonne icône */}
            <div className="third-group">
                <label htmlFor="icon" className="upload-icon">
                    <AddIcon className="icon" />
                    <span className="upload-text">Ajouter icone de l’évaluation</span>
                </label>
                <input
                    type="file"
                    name="icon"
                    id="icon"
                    onChange={handleFileChangeIcon}
                    style={{ display: 'none' }}
                />
            </div>
        </div>
        </div>


        {/* Quizz : un seul à la fois */}
        <div className="quizz-container">
          <h3>Quiz n°{currentIndex + 1}</h3>
          <div className="left-panel">
            <input
                type="text"
                placeholder="Question"
                value={currentQuiz.question}
                onChange={handleQuestionChange}
            />

            {currentQuiz.responses.map((resp, rIdx) => (
                <div key={rIdx} className="response-line">
                <input
                    type="text"
                    placeholder={`Réponse ${rIdx + 1}`}
                    value={resp}
                    onChange={(e) => handleResponseChange(rIdx, e)}
                />
                <button
                    type="button"
                    onClick={() => removeResponse(rIdx)}
                >
                    <RemoveIcon fontSize="small" />
                </button>
                </div>
            ))}

            <button className="add-response-btn" type="button" onClick={addResponse}>
                <AddIcon fontSize="small" /> Ajouter une réponse
            </button>

            <select
                value={currentQuiz.correctAnswer ?? ''}
                onChange={handleCorrectChange}
            >
                <option value="">— Réponse correcte —</option>
                {currentQuiz.responses.map((_, rIdx) => (
                <option key={rIdx} value={rIdx}>
                    Réponse {rIdx + 1}
                </option>
                ))}
            </select>
          </div>
          <div className="right-panel">
            <label htmlFor={`quiz-image-${currentIndex}`} className="upload-icon">
                <AddIcon className="icon" /> Ajouter image quiz
            </label>
            <input
                id={`quiz-image-${currentIndex}`}
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChangeQuiz}
            />

            <div className="presentation-quizz pagination">
                <button
                    type="button"
                    onClick={goToPrev}
                    disabled={currentIndex === 0}
                    className="page-button"
                >
                    {'<<'}
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    className="page-button"
                >
                    {'>>'}
                </button>
            </div>
          </div>
        </div>

        <div className="button-submit">
          <input type="submit" value="Enregistrer" />
        </div>
      </form>
    </section>
  );
};

export default AddEvaluation;
