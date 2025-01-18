import React from 'react';
import { EastOutlined } from "@mui/icons-material"; // MUI Icons
import Header from './Header';
import FormationCard from '../../Components/FormationCard';
import './d.scss'

const Home = () => {
    return (
        <div>
            <Header/>
            <hr />
            <section className='contentC'>
                <div className="content-header">
                    <h3>Allons apprendre  <EastOutlined /></h3>
                    <button className="btn btn-primary dn">Commencer</button>
                </div>
                <FormationCard />
            </section>
        </div>
    );
};

export default Home;