import React, { useState } from 'react';
import Img from '../../assets/images/person1.png';
import data from './data.json';

const Category = () => {
  const categories = data?.category || [];

  // Pagination setup (modifiez les valeurs selon vos besoins)
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentCategory = categories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="category-container">
      {/* Formulaire pour ajouter une catégorie */}
      <section className="category-form">
        <article className="form">
          <h2>Ajouter une nouvelle catégorie</h2>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                name="categoryName"
                id="categoryName"
                placeholder="Nom"
              />
              <input
                type="text"
                name="categoryDescription"
                id="categoryDescription"
                placeholder="Description"
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
              <tr
                key={category.id} // Utilisation de la clé correcte
                className={` ${index % 2 === 0 ? 'even' : 'odd'}`}
              >
                <td>{category.id}</td>
                <td className="blue-text">{category.nom}</td>
                <td className='gray-text'>{category.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Category;
