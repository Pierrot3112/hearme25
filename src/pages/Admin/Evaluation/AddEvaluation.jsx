import React, { useState } from 'react';
import { Add } from '@mui/icons-material'


const AddEvaluation = () => {
     const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        description: '',
        quizzCount: '',
        level: '',
        question: '',
        responseOne: '',
        responseTwo: '',
        responseThree: '',
        responseFour: '',
        responseCorrect: '',
        quizzPresentation: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formValues);
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          console.log("Fichier sélectionné :", file.name);
        }
      };

    return (
        <section className='addEvaluation-container'>
            <div className="title">
                <h2>Ajouter une nouvelle evaluation</h2>
            </div>
            <form action="" method="post" className='form-container'>
                <div className="evaluation-description">
                    <div className="form-group">
                        <div className="first-group">
                            <input
                                type="text"
                                name="title"
                                placeholder="Titres"
                                value={formValues.title}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formValues.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="second-group">
                            <input
                                type="text"
                                name="author"
                                placeholder="Auteur"
                                value={formValues.author}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="quizzCount"
                                placeholder="Nombre de quizz d'évaluation"
                                value={formValues.quizzCount}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="level"
                                placeholder="Niveau de l'évaluation"
                                value={formValues.level}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="third-group">
                            <label htmlFor="video" className="upload-icon">
                                <div>
                                <Add className="icon" />
                                <p className="upload-text">Ajouter icone de l'évaluation</p>
                                </div>
                            </label>
                            <input
                                type="file"
                                name="icone"
                                id="icone"
                                onChange={handleFileChange}
                                style={{ display: 'none' }} 
                            />
                        </div>
                    </div>
                </div>
                <div className="quizz-container">
                    <h3>Saisir le quizz {formValues.quizzCount}</h3>
                    <div className="quizz-descriptions">
                        <div className="first-description">
                            <input 
                                type="text" 
                                name="question" 
                                id="question" 
                                placeholder="Question"
                                value={formValues.question}
                                onChange={handleInputChange}
                            />
                            <input 
                                type="text" 
                                name="responseOne" 
                                id="responseOne" 
                                placeholder="Réponse 1"
                                value={formValues.responseOne}
                                onChange={handleInputChange}
                            />
                            <input 
                                type="text" 
                                name="responseTwo" 
                                id="responseTwo" 
                                placeholder="Réponse 2"
                                value={formValues.responseTwo}
                                onChange={handleInputChange}
                            />
                            <input 
                                type="text" 
                                name="responseThree" 
                                id="responseThree" 
                                placeholder="Réponse 3"
                                value={formValues.responseThree}
                                onChange={handleInputChange} 
                            />
                            <input 
                                type="text" 
                                name="responseFour" 
                                id="responseFour" 
                                placeholder="Réponse 4"
                                value={formValues.responseFour}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="second-description">
                            <label htmlFor="image" className="upload-icon">
                                <div>
                                <Add className="icon" />
                                <p className="upload-text">Ajouter une image de quizz</p>
                                </div>
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleFileChange}
                                style={{ display: 'none' }} 
                            />
                            <div className="response-correct">
                                <select name="" id="">
                                    <option value="">Réponses Correctes</option>
                                    <option value="responseOne">Réponse 1</option>
                                    <option value="responseTwo">Réponse 2</option>
                                    <option value="responseThree">Réponse 3</option>
                                    <option value="responseFour">Réponse 4</option>
                                </select>
                            </div>
                            <div className="presentation-quizz">
                                <select name="" id="">
                                    <option value={formValues.responseOne}></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttton-submit">
                    <input type="submit" value="Enregistrer" />
                </div>
            </form>
        </section>
    );
};

export default AddEvaluation;