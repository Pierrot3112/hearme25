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
import ProtectedRoute from './Components/ProtectedRoute';


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

        
        <Route path="/user/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/user/evaluation/:id" element={<ProtectedRoute><CommencerInterfaceTest /></ProtectedRoute>} />
        <Route path="/user/profile" element={<ProtectedRoute><ProfileDetails /></ProtectedRoute>} />
        <Route path="/user/history" element={<ProtectedRoute><Abonnement /></ProtectedRoute>} />
        <Route path="/user/abonment" element={<ProtectedRoute><Abonnement /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;



