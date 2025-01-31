import React, { useEffect, useState } from 'react';
import ChargementEvDemar from './ChargementEvDemar'; 
import CommencerInterface from './CommencerInterface';
import { Agriculture, Campaign, Brush, Devices } from "@mui/icons-material"; // Updated icon for Marketing
import { useNavigate, useParams } from "react-router-dom";
import '../UserStyle/d.scss';


const evaluations = [
    {
      id: 1,
      title: "Agri-business",
      description:
        "Ce cours est dédié aux passionnés et débutants dans le domaine de l’agri-business. Avec des modules de formations complètes.",
      status: "Gratuit",
      icon: <Agriculture /> // Agri-business icon
    }
  ];
  
const CommencerInterfaceTest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showTestContent, setShowTestContent] = useState(false);
    const [evaluation,setEvaluation] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const handleCloseModal = () => {
      navigate(`/user/evaluation`);
    }
    useEffect(()=>{
      setEvaluation(evaluations[0])
      setIsLoading(true);

      setTimeout(() => {
          setIsLoading(false); 
          setShowTestContent(true);
      }, 3000);
    },[]);

    return (
      <div className="modal">
        <div className="modal-content">
        
          {isLoading ? (
              <ChargementEvDemar />
          ) : (
              showTestContent && (
              <CommencerInterface evaluation={evaluation} />
              )
          )}
          {!isLoading && (
            <p className="closeBtn" onClick={handleCloseModal}>
              x
            </p>
          )}
        </div>
      </div>
    );
};

export default CommencerInterfaceTest;
