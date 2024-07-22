import React, { useState } from 'react';
import { Carousel, Button, Card, Row, Col } from 'react-bootstrap';
import { escapeGames } from '../../data';
import { Game } from '../../types';
import EscapeGameDetailsComponent from '../EscapeGame/EscapeGameDetailsComponent';
import './HomeComponent.css';

const HomeComponent: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [showDetails, setShowDetails] = useState(false);

    const chunkArray = (arr: Game[], size: number): Game[][] =>
        arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [arr];

    const productChunks = chunkArray(escapeGames, 4);

    const handleShowDetails = (game: Game) => {
        setSelectedGame(game);
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        setSelectedGame(null);
    };

    return (
        <div className="home-container mt-5">
            <header>
                <Carousel>
                    {escapeGames.map((game: Game, index: number) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 carousel-img"
                                alt={`${game.title} slide`}
                                src={game.image}
                            />
                            <Carousel.Caption>
                                <h3>{game.title}</h3>
                                <p>{game.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </header>

            <section className="escape-section">
                <h2>La Maison Horifique</h2>
                <p>
                    Venez découvrir notre incroyable escape game ! Vous aurez 60 minutes pour résoudre des énigmes et trouver des indices afin de vous échapper de la pièce.
                    Idéal pour les familles, les amis ou les collègues de travail.
                </p>
                <div className="how-it-works">
                    <h3>Comment ça marche :</h3>
                    <ul>
                        <li>Réservez votre session en ligne ou par téléphone.</li>
                        <li>Rendez-vous sur place 15 minutes avant l'heure de votre session pour les instructions.</li>
                        <li>Travaillez en équipe pour résoudre les énigmes et trouver la sortie.</li>
                        <li>Profitez de 60 minutes d'adrénaline et de plaisir.</li>
                    </ul>
                </div>
            </section>

            <section id="products" className="products-section">
                <h2>Nos Escapes Games</h2>
                <Carousel>
                    {productChunks.map((productChunk: Game[], index: number) => (
                        <Carousel.Item key={index}>
                            <Row>
                                {productChunk.map((product: Game, idx: number) => (
                                    <Col key={idx} sm={6} md={3}>
                                        <Card className="product-card">
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>{product.description}</Card.Text>
                                                <Card.Text><strong>{product.price} par personne</strong></Card.Text>
                                                <Button variant="danger" onClick={() => handleShowDetails(product)}>Voir les détails</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </section>

            <section className="company-section">
                <h2>Présentation de l'Entreprise</h2>
                <p>
                    Bienvenue chez La Maison Horifique, votre destination de choix pour des aventures palpitantes et des expériences uniques.
                    Nous sommes spécialisés dans la création d'escape games immersifs qui défient votre esprit et stimulent votre créativité.
                    Notre mission est de fournir des expériences inoubliables à tous nos visiteurs.
                </p>
                <p>
                    Fondée en 2021, notre entreprise a rapidement gagné une réputation pour l'excellence de ses jeux et la qualité de son service clientèle.
                    Venez nous rejoindre et découvrez pourquoi nous sommes le premier choix pour les escape games dans la région.
                </p>
            </section>

            <section className="contact-section">
                <h2>Informations de Contact</h2>
                <p>
                    Vous avez des questions ou souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter.
                    Nous sommes là pour vous aider et répondre à toutes vos questions.
                </p>
                <ul>
                    <li><strong>Adresse :</strong> 123 Rue de l'Adventure, 75000 Paris, France</li>
                    <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
                    <li><strong>Email :</strong> contact@lamaisonhorifique.com</li>
                    <li><strong>Heures d'ouverture :</strong> Mardi - Samedi : 9h00 - 18h00</li>
                </ul>
            </section>

            {selectedGame && (
                <EscapeGameDetailsComponent
                    show={showDetails}
                    game={selectedGame}
                    onHide={handleCloseDetails}
                />
            )}
        </div>
    );
}

export default HomeComponent;
