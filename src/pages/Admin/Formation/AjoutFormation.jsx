import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import '../Admin.scss';
import axiosInstance from '../../../Auth/services/axiosInstance';

const AjouterFormation = () => {
  const [video, setVideo] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    author: '',
    description: '',
    moduleCount: '',
    level: '',
  });
  const [uploadProgress, setUploadProgress] = useState(0); 
  const [uploadSpeed, setUploadSpeed] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append('nom', formValues.name);
    formData.append('description', formValues.description);
    formData.append('niveau', 1);
    formData.append('auteur', formValues.author);
    video.forEach((file, index) => {
      formData.append(`video[${index}]`, file);
    });

    try {
      const startTime = Date.now();
      const response = await axiosInstance.post('/courses/formation/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.round((loaded * 100) / total);
          setUploadProgress(percentage);

          const elapsedTime = (Date.now() - startTime) / 1000; 
          const speed = (loaded / elapsedTime / 1024).toFixed(2);
          setUploadSpeed(speed);
        },
      });
      setFormValues({
        name: '',
        author: '',
        description: '',
        moduleCount: '',
        level: '',
      })
      setVideo([])
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la formation:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideo((prevVideo) => [...prevVideo, file]);
  };

  return (
    <div className="ajouter-formation">
      <h1>Ajouter une nouvelle formation</h1>
      <form onSubmit={(e) => e.preventDefault()}>
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
              accept="video/*"
            />
          </div>
        </div>
      </form>
      <div className="grid-container">
        {video.map((_, index) => (
          <video controls key={index} className="grid-item">
            <source src={URL.createObjectURL(video[index])} type={video[index].type} />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">
        Enregistrer
      </button>

      {/* Dialog pour la progression */}
      {uploadProgress > 0 && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"></div>
                <h5 className="modal-title">Upload en cours</h5>
              <div className="modal-body">
                <p>Progression : {uploadProgress}%</p>
                <p>Débit d'envoi : {uploadSpeed} Ko/s</p>
                <p>
                  Taille totale :{' '}
                  {(video.reduce((total, file) => total + file.size, 0) / (1024 * 1024)).toFixed(2)} Mo
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress}%` }}
                    aria-valuenow={uploadProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {uploadProgress}%
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {uploadProgress < 100 ? (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      setUploadProgress(0);
                      setUploadSpeed(0);
                      if (axiosInstance.cancelToken) {
                        axiosInstance.cancelToken.source().cancel('Upload annulé par l\'utilisateur.');
                      }
                    }}
                  >
                    Annuler
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setUploadProgress(0)}
                  >
                    Terminer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AjouterFormation;