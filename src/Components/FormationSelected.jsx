import React from 'react'; 

import Video from '../assets/video/backHomee.mp4'
import Img from '../assets/images/user.jpg'

import Head from '../pages/StudentPages/Head';
import '../style/formation.scss'

import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const FormationSelected = () => {
    return (
        <div className='cours-selected'>
            <Head />
            <div className="detail-courses">
                <h1>Formation {'>>'} Agri-business</h1>
                <p className='level-modul'>Module 1: Initiation à l'agri-business</p>
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
                                <img src={Img} alt="teacher" className='teacher-image'/>
                                <p>Mr Jeff</p>
                            </div>
                            <p>1/75</p>
                        </div>
                        <p>Deserunt tenetur distinctio nihil, voluptates fugiat consequuntur! Rerum, obcaecati omnis atque possimus consequuntur dolores odit, quasi, sed unde vitae quia eum exercitationem.
                            Repellendus modi earum in, eum voluptatem mollitia nesciunt, voluptatum deserunt nobis necessitatibus aperiam sed ipsum eaque consequatur 
                        </p>
                        <button className="btn">Vidéo suivante</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormationSelected;