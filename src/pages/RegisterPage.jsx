import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from "/fond.jfif";
import "../style/register.scss";
import { registerUsers } from "../Auth/services/userService";

const RegisterPage = () => {
  const [username, setUsername] = useState(""); // Nom d'utilisateur
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
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
    }else if (!nom.trim()) {
      newErrors.nom = "Le nom est obligatoire";
    }else if (!prenom.trim()) {
      newErrors.prenom = "Le prenom est obligatoire";
    } else if (!password.trim()) {
      newErrors.password = "Le mot de passe est obligatoire";
    } else if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "La confirmation du mot de passe est obligatoire";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    return newErrors;
  };
  const register = async (data) => {
    try {
      const response = await registerUsers(data);
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const serverErrors = error.response.data;
        const newErrors = {};
        for (const key in serverErrors) {
          if (Object.hasOwn(serverErrors, key)) {
            newErrors[key] = serverErrors[key];
          }
        }
        setErrors(newErrors);
      }
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    register({
      "username":username,
      "email":email,
      "password":password,
      "first_name":nom,
      "last_name":prenom
    })
    
    
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
          <div className="form-group">
            <input
              type="text"
              placeholder="Entrez votre nom"
              className={`form-control ${errors.nom ? "error-border" : ""}`}
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            {errors.first_name && <span className="error-message">{errors.first_name}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Entrez votre prenom "
              className={`form-control ${errors.prenom ? "error-border" : ""}`}
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            {errors.last_name && <span className="error-message">{errors.last_name}</span>}
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
