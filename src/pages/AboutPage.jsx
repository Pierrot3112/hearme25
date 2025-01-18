import React from "react";
import Header from "../Components/Header";
import HeroAbout from "../Components/Hero.about";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import "../style/global.scss";
import Contact from "../Components/Contact";

const AboutPage = () => {
  
  return (
    <>
      <Header />
      <HeroAbout />
      <Features />
      <div className="about">
        <section className="about-container">
          <div className="c"></div>
          <div className="desc">
            <h2>Qui sommes-nous?</h2>
            <span>Voici l'équipe de HearMe</span>
            <p>
               I have been using Glish for a few months 
                now and I have to say that it is the best 
                platform for learning English. The quizzes 
                are fun and engaging and the 
                pronunciation practice has helped me a 
                lot.I have been using Glish for a few 
                months now and I have to say that it is the 
                best platform for learning English. The 
                quizzes are fun and engaging and the 
                pronunciation practice has helped me a 
                lot.I have been using Glish for a few 
                months now and I have to say that it is the 
                best platform for learning English. The 
                quizzes are fun and engaging and the 
                pronunciation practice has helped me a 
            </p>
          </div>
        </section>

        <Contact id="contact"/>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
