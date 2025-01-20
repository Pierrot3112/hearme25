import React from 'react';
import HomeAdmin from './HomeAdmin';
import Category from './Category';
import Formation from './AllCourses';
import Evaluation from './Evaluation';
import Certification from './Certification';
import Abonment from './Abonment';
import Compte from './Compte';
import HeaderAdmin from './HeaderAdmin';
import UsersTable from './UsersTable';
import AjouterFormation from './AjoutFormation';
import AllCourses from './AllCourses';

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
        case "certification":
            content = <Certification />;
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