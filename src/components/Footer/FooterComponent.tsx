import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './FooterComponent.css';

function FooterComponent() {
    return (
        <footer className="footer mt-5">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contactez-nous</h3>
                    <form className="footer-form">
                        <input type="text" name="name" placeholder="Votre nom" required />
                        <input type="email" name="email" placeholder="Votre email" required />
                        <textarea name="message" rows={4} placeholder="Votre message" required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="footer-section">
                    <h3>Détails</h3>
                    <ul>
                        <li><button className="link-button" onClick={() => alert('Carrières')}>Carrières</button></li>
                        <li><button className="link-button" onClick={() => alert('Notre café')}>Notre café</button></li>
                        <li><button className="link-button" onClick={() => alert('Actualités')}>Actualités</button></li>
                        <li><button className="link-button" onClick={() => alert('Foodservice')}>Foodservice</button></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Réseaux sociaux</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.pinterest.com"><FontAwesomeIcon icon={faPinterest} /></a>
                        <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
            <div className="legal">
                <p>&copy; 2024 La Maison Horifique. Tous droits réservés.</p>
                <p>
                    <button className="link-button" onClick={() => alert("Conditions d'utilisation")}>Conditions d'utilisation</button> |
                    <button className="link-button" onClick={() => alert("Politique de confidentialité")}>Politique de confidentialité</button> |
                    <button className="link-button" onClick={() => alert("Accessibilité")}>Accessibilité</button> |
                    <button className="link-button" onClick={() => alert("Transparence en matière de chaînes d'approvisionnement")}>Transparence en matière de chaînes d'approvisionnement</button>
                </p>
            </div>
        </footer>
    );
}

export default FooterComponent;
