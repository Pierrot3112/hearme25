import React from "react";
import img_url from "../../../assets/images/user.jpg";
import poste_icon from "../../../assets/images/user.jpg";
import level_icon from "../../../assets/images/user.jpg";
import point_icon from "../../../assets/images/user.jpg";

const Abonnement = ({ isVisible, onClose }) => {
  const second_row = [
    { id: 0, title: "Poste", value: "Graphiste textile", icon: poste_icon },
    { id: 1, title: "Niveau", value: "Débutant", icon: level_icon },
    { id: 2, title: "Point Obtenu", value: "400 PX", icon: point_icon },
  ];

  if (!isVisible) return null;

  return (
    <div>
    <div className="close">X</div>
    <div className="row paiement-container">
        <div className="col paiement-img-container">
            <img src={img_url} alt="" className='paiement-img'/>
        </div>

        <div className="col paiement-form-container">
            <h6 className='paiement-title'>PAIEMENT</h6>
            <form action="">
                <div className='radio-container'>
                    <div className="radio-group">
                        <input type="radio" id="gratuit" name="plan" className='inp-radio' />
                        <label htmlFor="gratuit" className="custom-radio">
                            <span className="circle"></span>
                            <span className="text">
                                GRATUIT<br />
                                <small>Essai 7 jours</small>
                            </span>
                        </label>

                        <input type="radio" id="basic" name="plan" className='inp-radio' />
                        <label htmlFor="basic" className="custom-radio">
                            <span className="circle"></span>
                            <span className="text">
                                BASIC<br />
                                <small>25$/mois</small>
                            </span>
                        </label>

                        <input type="radio" id="populaire" name="plan" className='inp-radio' />
                        <label htmlFor="populaire" className="custom-radio">
                            <span className="circle"></span>
                            <span className="text">
                                POPULAIRE<br />
                                <small>35$/mois</small>
                            </span>
                        </label>

                        <input type="radio" id="premium" name="plan" className='inp-radio' />
                        <label htmlFor="premium" className="custom-radio">
                            <span className="circle"></span>
                            <span className="text">
                                PREMIUM<br />
                                <small>55$/mois</small>
                            </span>
                        </label>
                    </div>
                </div>

                <div className='select-container'>
                    <div className="custom_select">
                        <select>
                            <option value="visa">VISA</option>
                            <option value="mastercard">MasterCard</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                </div>

                <div className='input-container'>
                    <div className="form-group">
                        <input type="text" id="name" className="form-control" placeholder="Entrez votre nom" required />
                        <label htmlFor="name">Nom</label>
                    </div>

                    <div className="form-group">
                        <input type="text" id="card-number" className="form-control" placeholder="XXXX - XXXX - XXXX - XXXX" required />
                        <label htmlFor="card-number">Carte</label>
                    </div>

                    <div className="form-group">
                        <input type="text" id="expiration-date" className="form-control" placeholder="MM / AA" required />
                        <label htmlFor="expiration-date">Expire</label>
                    </div>

                    <div className="form-group">
                        <input type="text" id="cvv" className="form-control" placeholder="123" required />
                        <label htmlFor="cvv">CVV</label>
                    </div>

                    <div className="form-group">
                        <input type="text" id="address" className="form-control" placeholder="Entrez votre adresse" required />
                        <label htmlFor="address">Adresse</label>
                    </div>
                </div>

                <div className="btn-container">
                    <input type="submit" value="PAYER MAINTENANT" className="btn btn-submit" />
                </div>

            </form>
        </div>
    </div>
</div>
  );
};

export default Abonnement;
