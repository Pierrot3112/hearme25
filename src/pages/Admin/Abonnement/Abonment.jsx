import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.json';
import ExportToExcel from '../util/ExportToExcel';
import './Abonment.scss';

const Abonment = () => {
    const abonments = data?.abonment || [];
    const [currentPage, setCurrentPage] = useState(1);
      const [hoveredRow, setHoveredRow] = useState(null);
    const studentsPerPage = 5;

    // Pagination : Calcul des index
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = abonments.slice(indexOfFirstStudent, indexOfLastStudent);

    // Changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="abonment container mt-3">
            <div className="table-responsive">
                <table className="abonment-tale">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom d'abonnée</th>
                            <th>Date</th>
                            <th>Jour restant</th>
                            <th>Type d'abonnement</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {currentStudents.map((etudiant, index) => (
                        <tr
                        key={etudiant.id}
                        className={`user-row ${index % 2 === 0 ? "even" : "odd"} ${
                            hoveredRow === etudiant.id ? "hovered" : ""
                        }`}
                        onMouseEnter={() => setHoveredRow(etudiant.id)}
                        onMouseLeave={() => setHoveredRow(null)}
                        >
                            <td>{etudiant.id}</td>
                            <td className="blue-text">{etudiant.nom}</td>
                            <td className="dark-gray-text">{etudiant.date_paiement}</td>
                            <td className="dark-gray-text">{etudiant.duree}</td>
                            <td className='blue-text'>{etudiant.type_abonnement}</td>

                            {hoveredRow === etudiant.id &&(
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
            </div>
            
            {/* Pagination et exportation */}
            <div className="d-flex justify-content-between align-items-center mt-5">
                {/* Bouton d'exportation */}
                <div className="export-file">
                    <ExportToExcel data={abonments} fileName="ListeEtudiantTerminerAbonnement" />
                </div>

                {/* Pagination */}
                <nav>
                    <ul className="pagination mb-100">
                        {Array.from({ length: Math.ceil(data.length / studentsPerPage) }, (_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => paginate(i + 1)}>
                                    {i + 1}tete
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Abonment;
