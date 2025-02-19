import React, { useState } from 'react';
import data from '../data.json';
import ExportToExcel from '../util/ExportToExcel';

const Certification = () => {
    const certifications = data?.certifications || [];
    const itemsPerPage = 10; // Nombre d'éléments par page
    const [currentPage, setCurrentPage] = useState(1);
    const [pageRange, setPageRange] = useState([1, 2, 3]);
    const [hoveredRow, setHoveredRow] = useState(null); // État pour la ligne survolée

    // Calculer les données affichées pour la page actuelle
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCertification= certifications.slice(indexOfFirstItem, indexOfLastItem);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(certifications.length / itemsPerPage);

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
              <th>Titre du certificat</th>
              <th>Date</th>
              <th>Certifiés</th>
              <th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {currentCertification.map((ertification, index) => (
              <tr
                key={ertification.id}
                className={`evaluation-row ${index % 2 === 0 ? "even" : "odd"} ${
                  hoveredRow === ertification.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredRow(ertification.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td>{ertification.id}</td>
                <td className="blue-text">{ertification.title}</td>
                <td className="dark-gray-text">{ertification.date}</td>
                <td className="dark-gray-text">{ertification.certified}</td>
                <td className="blue-text">{ertification.level}</td>
  
                {/* Boîte d'actions visible uniquement lorsqu'une ligne est survolée */}
                {hoveredRow === ertification.id && (
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
          <ExportToExcel data={certifications} fileName="ListeCertificatsAjoutés" />
        </div>
      </div>
    );
};

export default Certification;