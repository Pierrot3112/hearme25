import React, { useState } from "react";
import data from "./data.json";
import ExportToExcel from "./util/ExportToExcel";

const UsersTable = () => {
  const users = data?.users || [];
  const itemsPerPage = 10; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 2, 3]);
  const [hoveredRow, setHoveredRow] = useState(null); // État pour la ligne survolée

  // Calculer les données affichées pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(users.length / itemsPerPage);

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
    <div className="users-table-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom Complet</th>
            <th>Date</th>
            <th>Points</th>
            <th>Niveau</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr
              key={user.id}
              className={`user-row ${index % 2 === 0 ? "even" : "odd"} ${
                hoveredRow === user.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredRow(user.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td>{user.id}</td>
              <td className="blue-text">{user.name}</td>
              <td className="dark-gray-text">{user.date}</td>
              <td className="dark-gray-text">{user.points}</td>
              <td className="blue-text">{user.level}</td>

              {/* Boîte d'actions visible uniquement lorsqu'une ligne est survolée */}
              {hoveredRow === user.id && (
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
        <ExportToExcel data={users} fileName="ListeEtudiantInscrit" />
      </div>
    </div>
  );
};

export default UsersTable;
