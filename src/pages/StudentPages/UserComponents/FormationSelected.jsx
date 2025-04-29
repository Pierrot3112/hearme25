import React, { useState } from 'react'; 
import '../UserStyle/formation.scss';

const FormationSelected = ({ formation }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = formation.videos;

  const handleNextVideo = () => {
    if (videoIndex < videos.length - 1) {
      setVideoIndex(prev => prev + 1);
    }
  };

  return (
    <div className='cours-selected'>
      <div className="detail-courses">
        <h1>Formation {'>>'} {formation.nom}</h1>
        <p className='level-modul'>Module 1: {videos[videoIndex].titre}</p>
        <div className="content-course">
          <div className="video" style={{ position: "relative" }}>
            <video 
              src={videos[videoIndex].url} 
              controls 
              style={{ width: "100%", borderRadius: "10px",height: "100%" }} 
            />
          </div>
          <div className="description-cd">
            <div className="teacher">
              <div>
                <img 
                  src={formation.author} 
                  alt="teacher" 
                  className='teacher-image' 
                />
                <p>{formation.teacher || "Professeur"}</p>
              </div>
              <p>{videoIndex + 1}/{videos.length}</p>
            </div>
            <p>{formation.description}</p>
            <button 
              className="btn" 
              onClick={handleNextVideo}
              disabled={videoIndex === videos.length - 1}
            >
              {videoIndex < videos.length - 1 ? "Vidéo suivante" : "Dernière vidéo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationSelected;
