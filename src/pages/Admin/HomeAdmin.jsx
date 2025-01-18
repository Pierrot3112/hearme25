import React from 'react';
import data from './data.json';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HomeAdmin = () => {
    const chartData = data.data.chartData;
    const titles = data.data.title;
    const values = data.data.values;

    return (
        <>
            <section className="first-section-dashboard">
                <article className="chart">
                    <div className="courbe-stat">
                        <ResponsiveContainer width="95%" height={300}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="text-description">
                        <h1>
                            Nouveau Record
                        </h1>
                        <p>
                            Cette statistique sous forme de diagramme en ligne montre l'évolution de l'inscription des utilisateurs
                        </p>
                    </div>
                </article>
                <article className="data-stat">
                    <p className="title">
                        Totals des utilisateurs inscrits
                    </p>
                    <h2>
                        12.6 K
                    </h2>
                    <div className="user-certified">
                        <p>Utilisateur certifié</p>
                        <h3>6.2k</h3>
                    </div>
                </article>
            </section>

            <section className="second-section-dashboard">
                <div className="grid-container">
                    <div className="grid-item">
                        <p className="grid-title">{titles[1]}</p>
                        <h2 className="grid-value">{values[1]}</h2>
                    </div>
                    <div className="grid-item">
                        <p className="grid-title">{titles[2]}</p>
                        <h2 className="grid-value">{values[2]}</h2>
                    </div>
                    <div className="grid-item">
                        <p className="grid-title">{titles[3]}</p>
                        <h2 className="grid-value">{values[3]}</h2>
                    </div>
                    <div className="grid-item">
                        <p className="grid-title">{titles[4]}</p>
                        <h2 className="grid-value">{values[4]}</h2>
                    </div>
                    <div className="grid-item">
                        <p className="grid-title">{titles[5]}</p>
                        <h2 className="grid-value">{values[5]}</h2>
                    </div>
                    <div className="grid-item">
                        <p className="grid-title">{titles[6]}</p>
                        <h2 className="grid-value">{values[6]}</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeAdmin;
