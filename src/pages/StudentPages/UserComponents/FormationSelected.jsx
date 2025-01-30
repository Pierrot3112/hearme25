import React from 'react'; 
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Video from '../../../assets/video/backHomee.mp4';
import '../UserStyle/formation.scss';

const FormationSelected = ({ formation }) => {
  return (
    <div className='cours-selected'>
      <div className="detail-courses">
        <h1>Formation {'>>'} {formation.title}</h1>
        <p className='level-modul'>Module 1: Initiation à {formation.title}</p>
        <div className="content-course">
          <div className="video">
            <video src={Video} />
            <IconButton
              style={{
                position: "absolute",
                top: "50%",
                left: "32%",
                backgroundColor: "#43A8FF",
                color: "white",
              }}
            >
              <PlayArrowIcon fontSize='large' />
            </IconButton>
          </div>
          <div className="description-cd">
            <div className="teacher">
              <div>
                <img src={formation.author} alt="teacher" className='teacher-image'/>
                <p>{formation.teacher || "Professeur"}</p>
              </div>
              <p>1/75</p>
            </div>
            <p>{formation.description}</p>
            <button className="btn">Vidéo suivante</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationSelected;
