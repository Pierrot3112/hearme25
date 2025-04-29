import React, { useEffect, useState } from 'react';
import ChargementEvDemar from './ChargementEvDemar'; 
import CommencerInterface from './CommencerInterface';
import { Agriculture, Campaign, Brush, Devices } from "@mui/icons-material"; // Updated icon for Marketing
import { useNavigate, useParams } from "react-router-dom";
import '../UserStyle/d.scss';
import { evaluationDetail,evaluationGetQuizz } from '../../../api/evaluation';


const CommencerInterfaceTest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showTestContent, setShowTestContent] = useState(false);
    const [evaluation,setEvaluation] = useState(null);
    const [quiz,setQuiz] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();
    const handleCloseModal = () => {
      navigate(`/user/evaluation`);
    }
    const getQuiz = async ()=>{
      const response = await evaluationDetail(id)
      const responseQuiz = await evaluationGetQuizz(id)
      setQuiz(responseQuiz)
      setEvaluation(response)
    }
    useEffect(()=>{
      setIsLoading(true);
      getQuiz()


      setTimeout(() => {
          setIsLoading(false); 
          setShowTestContent(true);
      }, 3000);
    },[]);

    return (
      <div className="modal" >
        <div className="modal-content">
        
          {isLoading ? (
              <ChargementEvDemar />
          ) : (
              showTestContent && (
              <CommencerInterface evaluation={evaluation} quiz={quiz} />
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
