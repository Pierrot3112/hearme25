import React, { useEffect, useState } from "react";
import data from "./data.json";
import ExportToExcel from "./util/ExportToExcel";
import { getUsers,deleteUsers } from "../../Auth/services/userService";

const UsersTable = () => {
  const [users,setUser] = useState([]);
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
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      if (response) {

        setUser(response);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteUsers(id)
      const updatedUsers = users.filter(user => user.id !== id);
      setUser(updatedUsers);
    }
    catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur :", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
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
              <td className="blue-text">{user.first_name} {user.last_name}</td>
              <td className="dark-gray-text">
                {new Intl.DateTimeFormat("fr-FR", {year: "numeric",month: "long",day: "numeric"}).format(new Date(user.date_joined))}
              </td>
              <td className="dark-gray-text">{user.point}</td>
              <td className="blue-text">{user.nom_niveau}</td>
              <td>
                {/* Boîte d'actions visible uniquement lorsqu'une ligne est survolée */}
                {hoveredRow === user.id && (
                  <div className="action-buttons">
                    <button className="delete" onClick={() => handleDelete(user.id)}>🗑️</button>
                    <button className="link" onClick={() => handleLink(user.id)}>🔗</button>
                  </div>
                )}
              </td>
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
