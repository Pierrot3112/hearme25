import React from 'react';
import Header from '../Components/Header';
// import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function ContactPage() {
  return (
    <div>
      <Header />
      <div className='contact-page-container'>
        <div className="head-mask"></div>
        <div className="contact-content">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
