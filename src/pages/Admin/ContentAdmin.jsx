import React from 'react';
import HomeAdmin from './HomeAdmin';
import Category from './Category';
import Formation from './Formation/AllCourses';
import Evaluation from './Evaluation/Evaluation';
import Certification from './Certificaation/Certification';
import Abonment from './Abonnement/Abonment';
import Compte from './Compte/Compte';
import HeaderAdmin from './HeaderAdmin';
import UsersTable from './UsersTable';
import AjouterFormation from './Formation/AjoutFormation';
import AllCourses from './Formation/AllCourses';
import AddEvaluation from './Evaluation/AddEvaluation';
import AddCertificat from './Certificaation/AddCertificat';
import InfoAbonment from './Abonnement/InfoAbonment';

const ContentAdmin = ({ activeMenu }) => {
    let content;

    switch (activeMenu) {
        case "home":
            content = <HomeAdmin />;
            break;
        case "user":
            content = <UsersTable />;
            break;
        case "categorie":
            content = <Category />;
            break;
        case "addCourse":
            content = <AjouterFormation />;
            break;
        case "allCourses":
            content = <AllCourses />;
            break;
        case "evaluation":
            content = <Evaluation />;
            break;
        case "addEvaluation":
            content = <AddEvaluation />;
            break;
        case "addCertificat":
            content = <AddCertificat />;
            break;
        case "allCertificat":
            content = <Certification />;
            break;
        case "infoAbonment":
            content = <InfoAbonment />;
            break;
        case "abonnement":
            content = <Abonment />;
            break;
        case "account":
            content = <Compte />;
            break;
    }
    return (
        <>
            <HeaderAdmin />
            <div className='admin-content'>
                {content}
            </div>
        </>
    );
};

export default ContentAdmin;