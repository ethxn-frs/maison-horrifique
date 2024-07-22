import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EscapeGameDetailsComponent.css';
import { EscapeGameDetailsProps } from '../../types';

const EscapeGameDetailsComponent: React.FC<EscapeGameDetailsProps> = ({ show, game, onHide }) => {
    const navigate = useNavigate();

    const handleReserve = () => {
        navigate('/reservation', { state: { selectedGame: game.title } });
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{game.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={game.image} alt={game.title} className="img-fluid" />
                <p>{game.details}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Fermer</Button>
                <Button variant="primary" onClick={handleReserve}>Réserver</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EscapeGameDetailsComponent;
