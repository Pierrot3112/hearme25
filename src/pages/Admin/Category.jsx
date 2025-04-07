import React, { useState,useEffect } from 'react';
import Img from '../../assets/images/person1.png';
import { getCategorie,createCategorie } from '../../api/cours'

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  // Pagination setup
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentCategory = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!categoryName.trim() || !categoryDescription.trim()) return;
    
    const response = await createCategorie({
        "nom": categoryName,
        "description": categoryDescription
    })
    
    setCategories([...categories, response]);
    setCategoryName('');
    setCategoryDescription('');
  };
  const fetchCategorie = async () => {
    try {
      const response = await getCategorie()
      setCategories(response)
    }
    catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    fetchCategorie();
  }, []);

  return (
    <div className="category-container">
      {/* Formulaire pour ajouter une catégorie */}
      <section className="category-form">
        <article className="form">
          <h2>Ajouter une nouvelle catégorie</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="categoryName"
                id="categoryName"
                placeholder="Nom"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <input
                type="text"
                name="categoryDescription"
                id="categoryDescription"
                placeholder="Description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
              />
            </div>
            <button type="submit">Enregistrer</button>
          </form>
        </article>
        <article className="img">
          <img src={Img} alt="Image" />
        </article>
      </section>

      {/* Liste des catégories */}
      <section className="category-list">
        <h2>Listes des catégories</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom de la catégorie</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentCategory.map((category, index) => (
              <tr key={category.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td>{category.id}</td>
                <td className="blue-text">{category.nom}</td>
                <td className="gray-text">{category.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        {categories.length > itemsPerPage && (
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              {"<<"}
            </button>
            <span>  {currentPage} / {totalPages} </span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              {">>"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Category;
