import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import '../Admin.scss';

const AjouterFormation = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    author: '',
    description: '',
    moduleCount: '',
    level: '',
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
    <div className="ajouter-formation">
      <h1>Ajouter une nouvelle formation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="first-group">
            <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formValues.name}
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
                name="moduleCount"
                placeholder="Nombre de module en vidéo"
                value={formValues.moduleCount}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="level"
                placeholder="Niveau de la formation"
                value={formValues.level}
                onChange={handleInputChange}
            />
          </div>
            <div className="upload-video">
                <label htmlFor="video" className="upload-icon">
                  <div>
                    <Add className="icon" />
                    <p className="upload-text">Ajouter la formation en video</p>
                  </div>
                </label>
                <input
                    type="file"
                    name="video"
                    id="video"
                    onChange={handleFileChange}
                    style={{ display: 'none' }} 
                />
            </div>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      <div className="grid-container">
        {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="grid-item">
             
            </div>
        ))}
        </div>
    </div>
  );
};

export default AjouterFormation;
