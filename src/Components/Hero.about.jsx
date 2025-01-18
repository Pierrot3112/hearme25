import React from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/data.json';
import image from '../assets/images/fond.jfif';
import '../style/heroF.scss';

const HeroAbout = () => {
    return (
        <div className='hero-home'>
            <div className="video-home">
                <img src={image} style={{ height: "100%", width: "100%" }} alt="Background" />
            </div>
            <section className="section">
                <h1>
                    {data.hero.about.title}
                </h1>
                <div className='description'>
                    <p>{data.hero.about.description}</p>
                </div>
                <div className="btn-box">
                    <a href="/contact">
                        {data.hero.about.button}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HeroAbout;