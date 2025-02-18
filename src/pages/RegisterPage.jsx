import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from "/fond.jfif";
import "../style/register.scss";

const RegisterPage = () => {
  const [username, setUsername] = useState(""); // Nom d'utilisateur
  const [email, setEmail] = useState(""); // Email
  const [password, setPassword] = useState(""); // Mot de passe
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmation mot de passe

  const [errors, setErrors] = useState({}); // Stocke les erreurs par champ
  const navigate = useNavigate();

  const validateFields = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Le nom d'utilisateur est obligatoire";
    } else if (!email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!password.trim()) {
      newErrors.password = "Le mot de passe est obligatoire";
    } else if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "La confirmation du mot de passe est obligatoire";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Réinitialise les erreurs

    const urlAPi = process.env.REACT_APP_API_URL || "http://localhost:8080";

    try {
      const response = await axios.post(`${urlAPi}/api/auth/signup`, {
        username,
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Erreur d'inscription :", error);
    }
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <img src={image} alt="background" />
        <div className="content">
          <h1>Rejoignez Une Communauté D'apprenants Inclusifs!</h1>
          <div className="text-none">
            <p>
              Commencez dès aujourd'hui à apprendre à votre rythme et dans votre langue. Chez Hearne, chaque cours est conçu pour être accessible et enrichissant.
            </p>
            <p>
              Inscrivez-vous en toute sécurité ! Vos informations restent confidentielles et protégées.
            </p>
          </div>
          <p>
            Avez-vous déjà un compte?
            <span>  </span>
            <a href="/login" className="login-link">
              Se connecter 
            </a>
            <span>  </span>
             ici
          </p>
        </div>
      </div>
      <div className="right-section">
        <h2>Inscription</h2>
        <div className="curved-line"></div>
        <br />
        <div className="underline"></div>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Nom d'utilisateur */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Entrez votre nom d'utilisateur"
              className={`form-control ${errors.username ? "error-border" : ""}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Entrez votre e-mail"
              className={`form-control ${errors.email ? "error-border" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Mot de passe */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Entrez un mot de passe"
              className={`form-control ${errors.password ? "error-border" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Confirmation mot de passe */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirmer votre mot de passe"
              className={`form-control ${errors.confirmPassword ? "error-border" : ""}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit">Créer mon compte</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
