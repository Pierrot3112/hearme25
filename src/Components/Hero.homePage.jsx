import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../utils/data.json';
import homeBack from '../assets/video/backHomee.mp4'
import '../style/home.scss';

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonCommencerClick = () => {
    console.log('clické');
    navigate('/login');
  };

  return (
    <div className='hero-home'>
      <div className="video-home">
        <video src={homeBack} style={{ height: "100%", width: "100%" }} autoPlay loop muted />
      </div>
      <section className="section">
        <h1>
          {data.hero.home.title} <span>{data.header.logo}</span>
        </h1>
        <div className='description'>
          <p> {data.hero.home.description} </p>
        </div>
        <div>
          <a href="/login" style={{textDecoration: "none"}} className="btn-box">{data.hero.home.button}</a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
