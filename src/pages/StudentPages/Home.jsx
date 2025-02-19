import React from 'react';
import { EastOutlined } from "@mui/icons-material"; // MUI Icons
import Header from './UserComponents/Header';
import FormationCard from '../../Components/FormationCard';
import './UserStyle/d.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header/>
            <hr />
            <section className='contentC'>
                <div className="content-header">
                    <h3>Allons apprendre  <EastOutlined /></h3>
                    <Link to="/user/courses" className="btn btn-primary dn">Commencer</Link>
                </div>
                <FormationCard />
            </section>
        </div>
    );
};

export default Home;