import React from 'react';
import orangeLogo from '../assets/images/orange_logoo.webp'
import undpLogo from '../assets/images/UNDP.png';
import partnerLogo from '../assets/images/UNDP.png';
import '../style/home.scss';

const Partenaires = () => {
  return (
    <div className="partenaires">
      <img src={orangeLogo} alt="Orange Digital Center" />
      <img src={undpLogo} alt="UNDP" />
      <img src={partnerLogo} alt="AMI Logo" />
    </div>
  );
};

export default Partenaires;
