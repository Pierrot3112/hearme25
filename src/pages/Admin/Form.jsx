import React from 'react';

const Form = () => {
  return (
    <div className="form-container">
      <h2>Ajouter une nouvelle formation</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Auteur" />
          <textarea placeholder="Description"></textarea>
          <input type="text" placeholder="Nombre de modules" />
          <input type="text" placeholder="Niveau" />
          <button>Ajouter la formation en vidéo</button>
        </div>
        <button type="submit" className="save-btn">Enregistrer</button>
      </form>
    </div>
  );
};

export default Form;
