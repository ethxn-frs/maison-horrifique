import { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { escapeGames } from '../../data';
import './ReservationComponent.css';

const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

function ReservationComponent() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        escapeGame: location.state?.selectedGame || '',
        numberOfPeople: 1,
        date: '',
        time: ''
    });

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (formData.escapeGame) {
            const selectedGame = escapeGames.find((game) => game.title === formData.escapeGame);
            if (selectedGame) {
                setTotalPrice(parseFloat(selectedGame.price.slice(1)) * formData.numberOfPeople);
            }
        }
    }, [formData.escapeGame, formData.numberOfPeople]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'escapeGame' || name === 'numberOfPeople') {
            const selectedGame = escapeGames.find((game) => game.title === (name === 'escapeGame' ? value : formData.escapeGame));
            const numberOfPeople = name === 'numberOfPeople' ? parseInt(value, 10) : parseInt(`${formData.numberOfPeople}`, 10);
            if (selectedGame && numberOfPeople > 0) {
                setTotalPrice(parseFloat(selectedGame.price.slice(1)) * numberOfPeople);
            }
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData, 'Prix total:', totalPrice);
    };



    return (
        <div className="reservation-container mt-5 mb-5">
            <h2>Réserver une Session</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Nom</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formPhone" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Numéro de téléphone</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formEscapeGame" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Escape Game</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            as="select"
                            name="escapeGame"
                            value={formData.escapeGame}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Sélectionnez un escape game</option>
                            {escapeGames.map((game) => (
                                <option key={game.id} value={game.title}>
                                    {game.title} - {game.price}
                                </option>
                            ))}
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group controlId="formNumberOfPeople" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Nombre de personnes</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            type="number"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formDate" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Date</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={getCurrentDate()}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formTime" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Heure</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            min="09:00"
                            max="18:00"
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formTotalPrice" className="align-items-center d-flex flex-column">
                    <Form.Label column sm={2}>Prix total</Form.Label>
                    <Col sm={5} md={5} lg={5}>
                        <Form.Control
                            type="text"
                            value={`$${totalPrice.toFixed(2)}`}
                            readOnly
                        />
                    </Col>
                </Form.Group>

                <div className="form-buttons justify-content-around">
                    <Button variant="secondary" type="button" onClick={() => setFormData({ name: '', phone: '', escapeGame: '', numberOfPeople: 1, date: '', time: '' })}>
                        Annuler
                    </Button>
                    <Button variant="primary" type="submit">
                        Réserver
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default ReservationComponent;
