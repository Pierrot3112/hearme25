import React from 'react'
import '../style/footer.scss'
import VideoPlayer from './VideoPlayer.demo';
import SocialMediaIcons from './SocialMediaIcons';



function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className='first-elements'>
          <h4>HEARME</h4>
          <div className='element-fo-first'>
            <div className="social-icons">
              <p>Unlock your potential with Glish, <br /> the ultimate English learning platform <br /> that adapts to your needs.</p>
              <SocialMediaIcons />
            </div>
            <div className="links">
              <h5>Liens utiles</h5>
              <ul>
                <li><a href="/#why">Pourquoi nous ?</a></li>
                <li><a href="/#testimonials">Témoignages</a></li>
                <li><a href="/#courses">Nos formations</a></li>
              </ul>
            </div>
            <div className="contact">
              <h5>Contactez-nous</h5>
              <div className="contact-elements">
                <p>Hearme Assistant Service</p>
                <p>+261 32 00 000 00</p>
                <p>hearme@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='second-elements'>
          <h4>Voir la démo</h4>
          <div className="video">
            <VideoPlayer />
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright 2024 - Developed by <a href="https://pierrot.vercel.app" style={{fontWeight: "bold", fontSize: "15px"}}>@pierrot</a> - Web Developer
      </p>
    </footer>
  );
}

export default Footer;
