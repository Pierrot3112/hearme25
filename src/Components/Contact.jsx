import React, { useState } from 'react';
import SendMessage from "../assets/images/send_message.png";
import "../style/global.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        object: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({
        name: false,
        email: false,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Met à jour les valeurs des champs
        setFormData({
          ...formData,
          [name]: value,
        });
    
        // Réinitialise l'erreur si le champ n'est plus vide
        if (value.trim() !== "") {
          setErrors({
            ...errors,
            [name]: false,
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Valide les champs requis
        const newErrors = {
          name: formData.name.trim() === "",
          email: formData.email.trim() === "",
        };
    
        setErrors(newErrors);
    
        // Affiche un message dans la console si tout est bon
        if (!newErrors.name && !newErrors.email) {
          console.log("Formulaire envoyé :", formData);
          alert("Formulaire envoyé avec succès !");
          setFormData({ name: "", email: "", object: "", message: "" }); // Réinitialise le formulaire
        }
      };
    
    return (
        <div>
            <section className="contact-container">
                <div className="contact-form">
                    <h3>Contactez-nous</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nom complet*"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={errors.name ? "error-input" : ""}
                        />
                        {errors.name && (
                            <span className="error-message">Ce champ est obligatoire</span>
                        )}
                        </div>
        
                        <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Adresse email*"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={errors.email ? "error-input" : ""}
                        />
                        {errors.email && (
                            <span className="error-message">Ce champ est obligatoire</span>
                        )}
                        </div>
        
                        <div className="form-group">
                        <input
                            type="text"
                            name="object"
                            id="object"
                            placeholder="Objet"
                            value={formData.object}
                            onChange={handleInputChange}
                        />
                        </div>
        
                        <div className="form-group">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        </div>
        
                        <div className="form-group">
                        <button type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
                <div className="contact-image">
                    <img src={SendMessage} alt="SendMessage" />
                </div>
            </section>
        </div>
    );
};

export default Contact;