import React, { useEffect, useState } from "react";
import data from "../data.json";
import ExportToExcel from "../util/ExportToExcel"; 
import '../Admin.scss';
import {getAllFormtion} from "../../../api/formation";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const itemsPerPage = 10; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 2, 3]);
  const [hoveredRow, setHoveredRow] = useState(null);

  

  // Calculer les données affichées pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourse = courses.slice(indexOfFirstItem, indexOfLastItem);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(courses.length / itemsPerPage);

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
    setPageRange(
      Array.from({ length: 3 }, (_, i) => startPage + i).filter(
        (page) => page <= totalPages
      )
    );
  };

  const fetchformation = async () => {
      try {
        const response = await getAllFormtion()
        console.log(response)
        setCourses(response)
      }
      catch (error) {
        console.error("error", error);
      }
    }

  useEffect(()=>{
    fetchformation()
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
            <th>Nom</th>
            <th>Date</th>
            <th>Vue</th>
            <th>Auteur</th>
          </tr>
        </thead>
        <tbody>
          {currentCourse.map((course, index) => (
            <tr
              key={course.id}
              className={`user-row ${index % 2 === 0 ? "even" : "odd"} ${
                hoveredRow === course.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredRow(course.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td>{course.id}</td>
              <td className="blue-text">{course.nom}</td>
              <td className="dark-gray-text">{course.date_creation}</td>
              <td className="dark-gray-text">{course.nb_utilisateur}</td>
              <td className="dark-gray-text">{course.auteur}</td>
              <td className="blue-text">
                {course.author}
                {hoveredRow === course.id && (
                  <div className="action-buttons">
                    <button className="edit">✏️</button>
                    <button className="delete">🗑️</button>
                    <button className="link">🔗</button>
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
        {/* Utilisation du composant réutilisable */}
        <ExportToExcel data={courses} fileName="Liste_Cours" />
      </div>
    </div>
  );
};

export default AllCourses;
