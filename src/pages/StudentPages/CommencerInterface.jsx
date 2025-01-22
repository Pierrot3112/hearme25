import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CommencerInterface = () => {
  return (
    <div className="start-interface-container">
       <div className="fq-rg">
          <div className="space"></div>
          <div className="btn-fq-rg">
            <button>
              <HelpOutlineIcon />
              Regalges
            </button>
            <button>
              Faq
              <InfoOutlinedIcon />
            </button>
          </div>
       </div>
    </div>
  );
};

export default CommencerInterface;
