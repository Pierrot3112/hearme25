import React from 'react';

import './ct.scss';

import logo from '../../../assets/images/lgl.png'
import logo_orange from '../../../assets/images/orange_logoo.webp'
import logo_undp from '../../../assets/images/UNDP.png'

const Certificat = () => {
    return (
        <secction className="mt-5">
            <h1>
                Pourquoi devriez-vous obtenir une certification?
            </h1>
            <div className="container">
                <div className="certificat">
                    <div className="ct">
                        <div className="lg">
                            <div className="l-g">
                                <div className="dashed">
                                    <img src={logo} alt="logo" height={'50px'} />
                                </div>
                            </div>
                        </div>
                        <h2>CERTIFICAT PROFESSIONNEL</h2>
                        <h1 className='mb-3'>Agri-Business</h1>
                        <div className="ct-uv">
                            <h3>ISSUE DE L'</h3>
                            <h1>Université d'Antananarivo</h1>
                            <p>Ce cours est dédié aux passionnés et débuttants dans le domaine de la marketing digitale. Avec des modules de formations complets.</p>
                            <p className="mt-3">Obtenu le 13 Mai 2024</p>
                        </div>
                        <div className="ct-foot">
                            <div className="fondateur">
                                <img src={logo} alt="signature" height={'20px'} />
                                <p>Fondateur Hearme</p>
                            </div>
                            <div className="partenaire">
                                <img src={logo_orange} alt="logo partenaire" height={'50px'}/>
                                <img src={logo_undp} alt="logo partenaire" height={'50px'}/>
                                <img src={logo_orange} alt="logo partenaire" height={'50px'}/>
                            </div>
                            <div className="id">
                                <p>ID: 1215141819171613</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desc-ct">
                    <ul>
                        <li className="mb-3">
                            Nos certifications sont à la fois partageables et reconnues au sein de l'industries.
                        </li>
                        <li className="mb-3">
                            Envoyer un signal clair aux employeurs concernant votre expertise.
                        </li>
                        <li className="mb-3">
                            Il n'y a auccun coût supplémentaire associé à votre certification Hearme.
                        </li>
                    </ul>
                </div>
            </div>
        </secction>
    );
};

export default Certificat;