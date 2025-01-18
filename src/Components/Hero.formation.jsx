import React from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/data.json';
import image from '../assets/images/fond.jfif';
import '../style/heroF.scss';

const HeroFormation = () => {
  return (
    <div className='hero-home'>
      <div className="video-home">
        <img src={image} style={{ height: "100%", width: "100%" }} alt="Background" />
      </div>
      <section className="section">
        <h1>
          {data.hero.home.title} <span>{data.header.logo}</span>
        </h1>
        <div className='description'>
          <p>{data.hero.home.description}</p>
        </div>
        <div className="btn-box">
          <Link to="/login">
            {data.hero.home.button}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroFormation;
