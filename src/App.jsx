import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Formations from './pages/Formation'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/StudentPages/Dashboard';
import ProfileDetails from './pages/StudentPages/UserComponents/ProfileDetails';
import Abonnement from './pages/StudentPages/UserComponents/Abonnement';
import AboutPage from './pages/AboutPage';
import Admin from './pages/Admin/Admin';
import CommencerInterfaceTest from './pages/StudentPages/Evaluation/CommencerInterfaceTest';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/formation" element={<Formations />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/*" element={<Dashboard />} />
        <Route path="/user/evaluation/:id" element={<CommencerInterfaceTest />} />
        <Route path="/user/profile" element={<ProfileDetails />} />
        <Route path="/user/history" element={<Abonnement />} />
        <Route path="/user/abonment" element={<Abonnement />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;



