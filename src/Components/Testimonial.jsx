import React, { useState, useEffect } from 'react';
import data from '../utils/data.json'
import '../style/home.scss';

const Temoignages = () => {
  const temoignagesData = data.testimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  // Gestion automatique du slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        console.log(((((prevIndex)/2) + 1) % temoignagesData.length)*2);
        return ((((prevIndex)/2) + 1) % temoignagesData.length)*2
      });
    }, 5000); 
    return () => clearInterval(interval);
  }, [temoignagesData.length]);


  return (
    <div className="temoignages">
      <h2>Témoignages</h2>
      <p>Comment pensent les gens ?</p>
      <br />
      <div className="testimonial-slider">
        {temoignagesData.map((temoignage, index) => (
          <div
            key={temoignage.id}
            className={`testimonial ${index === activeIndex/2 ? 'active' : ''}`}
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
            className={`dot ${index === activeIndex/2 ? 'active' : ''}`}
            onClick={() => setActiveIndex(index*2)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Temoignages;
