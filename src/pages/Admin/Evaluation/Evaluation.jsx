import React, { useEffect, useState } from 'react';
import ExportToExcel from '../util/ExportToExcel';
import axiosInstance from '../../../Auth/services/axiosInstance';


const Evaluation = () => {
    const [evaluations,setEvaluations] = useState([]);
    const itemsPerPage = 10; // Nombre d'éléments par page
    const [currentPage, setCurrentPage] = useState(1);
    const [pageRange, setPageRange] = useState([1, 2, 3]);
    const [hoveredRow, setHoveredRow] = useState(null); // État pour la ligne survolée

    // Calculer les données affichées pour la page actuelle
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEvaluation= evaluations.slice(indexOfFirstItem, indexOfLastItem);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(evaluations.length / itemsPerPage);

    // Gérer le changement de page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        updatePageRange(pageNumber);
    };

    // Gérer le changement vers la page suivante
    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        updatePageRange(currentPage + 1);
        }
    };

    // Gérer le changement vers la page précédente
    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        updatePageRange(currentPage - 1);
        }
    };

    // Mettre à jour les numéros de page affichés
    const updatePageRange = (newPage) => {
        const startPage = Math.floor((newPage - 1) / 3) * 3 + 1;
        const endPage = Math.min(startPage + 2, totalPages);
        setPageRange([startPage, startPage + 1, startPage + 2].filter(page => page <= totalPages));
    };
    const getAllEvaluation = async ()=>{
      try {
        const response = await axiosInstance.get('/evaluations/')
        setEvaluations(response.data)
      }
      catch (error) {
        console.error("error", error);
      }
    }
    useEffect(()=>{
      getAllEvaluation()
    },[])

    // Affichage des pages dans la pagination (3 pages max à la fois)
    const renderPageButtons = () => {
        return (
        <div className="pagination">
            <button
            className="page-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            >
            {"<<"}
            </button>
            {pageRange.map((page) => (
            <button
                key={page}
                className={`page-button ${currentPage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page)}
            >
                {page}
            </button>
            ))}
            <button
            className="page-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            >
            {">>"}
            </button>
        </div>
        );
    };

    return (
        <div className="evaluations-table-container">
        <table className="evaluations-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>titre</th>
              <th>auteur</th>
              <th>nom du formation</th>
            </tr>
          </thead>
          <tbody>
            {currentEvaluation.map((evaluation, index) => (
              <tr
                key={evaluation.id}
                className={`evaluation-row ${index % 2 === 0 ? "even" : "odd"} ${
                  hoveredRow === evaluation.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredRow(evaluation.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td>{evaluation.id}</td>
                <td className="blue-text">{evaluation.titre}</td>
                <td className="dark-gray-text">{evaluation.auteur}</td>
                <td className="dark-gray-text">{evaluation.nom_formation}</td>
  
                {/* Boîte d'actions visible uniquement lorsqu'une ligne est survolée */}
                {hoveredRow === evaluation.id && (
                  <div className="action-buttons">
                    <button className="edit">✏️</button>
                    <button className="delete">🗑️</button>
                    <button className="link">🔗</button>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
  
          
        {/* Contrôles de pagination */}
        {totalPages > 1 && renderPageButtons()}
  
        <div className="export-file">
          <ExportToExcel data={evaluations} fileName="ListeEvaluationAjoutés" />
        </div>
      </div>
    );
};

export default Evaluation;