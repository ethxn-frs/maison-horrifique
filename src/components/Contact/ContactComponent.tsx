import React, { useState } from 'react';
import './ContactComponent.css';

function ContactComponent() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        tel: '',
        email: '',
        sujet: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
        alert("Formulaire sous correctement")
    };

    const handleReset = () => {
        setFormData({
            nom: '',
            prenom: '',
            tel: '',
            email: '',
            sujet: '',
            message: ''
        });
    };

    return (
        <div className="contact-container mt-5 mb-4">
            <h2>Contactez-nous</h2>
            <form className="contact-form align-items-center" onSubmit={handleSubmit}>
                <div className='d-flex justify-content-around col-10'>
                    <div className="form-group col-4">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
                    </div>
                </div>
                <div className='d-flex justify-content-around col-10'>
                    <div className="form-group col-4">
                        <label htmlFor="tel">Numéro de téléphone</label>
                        <input type="tel" id="tel" name="tel" value={formData.tel} onChange={handleChange} required />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="email">Adresse Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group col-5">
                    <label htmlFor="sujet">Sujet</label>
                    <input type="text" id="sujet" name="sujet" value={formData.sujet} onChange={handleChange} required />
                </div>
                <div className="form-group col-7">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required></textarea>
                </div>
                <div className="form-buttons">
                    <button type="button" className="btn btn-secondary mx-2" onClick={handleReset}>Annuler</button>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
            </form>
        </div>
    );
}

export default ContactComponent;