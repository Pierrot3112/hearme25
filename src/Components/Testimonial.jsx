import React, { useState, useEffect } from 'react';
import data from '../utils/data.json'
import '../style/home.scss';

const Temoignages = () => {
  const temoignagesData = data.testimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  // Gestion automatique du slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % temoignagesData.length);
    }, 5000); // Changer de témoignage toutes les 5 secondes
    return () => clearInterval(interval);
  }, [temoignagesData.length]);

  // Debugging : affichage des données dans la console
  console.log('Active index:', activeIndex);
  console.log('Témoignages Data:', temoignagesData);

  return (
    <div className="temoignages">
      <h2>Témoignages</h2>
      <p>Comment pensent les gens ?</p>
      <br />
      <div className="testimonial-slider">
        {temoignagesData.map((temoignage, index) => (
          <div
            key={temoignage.id}
            className={`testimonial ${index === activeIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <div className="image-testimonial">
              <img
                src={temoignage.photo}
                alt={temoignage.name}
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            </div>
            <div className="description-testimonial">
              <div className="testimonial-icon  left">
                <span className="quotes">“</span>
              </div>
              <p>{temoignage.text}</p>
              <div className="testimonial-icon right">
                <span className="quotes">”</span>
              </div>
              <div className="testimonial-footer">
                <strong>{temoignage.name}</strong>
                <span>{temoignage.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {temoignagesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Temoignages;
