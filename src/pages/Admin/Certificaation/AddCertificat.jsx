import axios from 'axios';
import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/lgl.png';

const AddCertificat = () => {
    const [data, setData] = useState({ category: [], levels: [], abonments: [] });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAbonment, setSelectedAbonment] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/data.json") // Vérifie si le fichier est bien accessible
            .then((response) => {
                console.log("Données reçues :", response.data);
                setData(response.data || { category: [], levels: [], abonments: [] });
            })
            .catch((error) => console.error("Erreur de chargement :", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className='addCertificat-container'>
            <div className="title">
                <h3>Ajouter un nouveau certificat</h3>
            </div>
            <article className="formulaire">
                <form action="">
                    <div className="form-group">
                        <div className="first-group">
                            <input type="text" placeholder='Titre du certificat' />
                            <textarea placeholder='Description' />
                        </div>

                        {loading ? (
                            <p>Chargement des options...</p>
                        ) : (
                            <div className="second-group">
                                <select value={selectedAbonment} onChange={(e) => setSelectedAbonment(e.target.value)}>
                                    <option value="">Type d'abonnement</option>
                                    {data.abonments?.length > 0 ? (
                                        data.abonments.map((option) => (
                                            <option key={option.id} value={option.type}>{option.type}</option>
                                        ))
                                    ) : (
                                        <option disabled>Aucune option disponible</option>
                                    )}
                                </select>   

                                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">Catégorie</option>
                                    {data.category?.length > 0 ? (
                                        data.category.map((option) => (
                                            <option key={option.id} value={option.nom}>{option.nom}</option>
                                        ))
                                    ) : (
                                        <option disabled>Aucune option disponible</option>
                                    )}
                                </select> 

                                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                                    <option value="">Niveau</option>
                                    {data.levels?.length > 0 ? (
                                        data.levels.map((option) => (
                                            <option key={option.id} value={option.name}>{option.name}</option>
                                        ))
                                    ) : (
                                        <option disabled>Aucune option disponible</option>
                                    )}
                                </select>                    
                            </div>
                        )}
                    </div>

                    <div className="btn-submit">
                        <input type="submit" value="Enregistrer" />
                    </div>
                </form>
            </article>
            <article className="certificat">
                <div className="certificat-container">
                    <div className="logo">
                       <h1>FORMATION CERTIFIÉE</h1>
                        <div className="transparent">
                            <div className="dark-bg">
                                <div className="dashed">
                                    <img src={logo} height={"40px"} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="certfifcat-description">
                        <h1>Hear<span>Me</span></h1>
                        <section className="text-desc">
                            <div className="box-body">
                                <p>Vous certifie,</p>
                                <h4>Exemple de nom complet</h4>
                                <p>
                                    Et d'avoir fini et accompli <br />
                                    La formation d'Agribusiness
                                </p>
                            </div>
                           <div className="footer-certificat">
                                <div className="about-hearme">
                                    <span className="name">
                                        Radolaza Léonardis
                                    </span>
                                    <p>Directeur et Fondateur HearMe</p>
                                    <p className='p-date'>Obtenu le ..................</p>
                                </div>
                                <div className="id-certificat">
                                    <h5>012444 23255 -av225--4568s: ID</h5>
                                    <p>Partageable et vérifiables sur toutes plateforme</p>
                                </div>
                           </div>
                        </section>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default AddCertificat;
