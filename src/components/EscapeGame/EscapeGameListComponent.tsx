import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './EscapeGameListComponent.css';
import EscapeGameDetailsComponent from './EscapeGameDetailsComponent';
import { EscapeGamesListProps, Game } from '../../types';

const EscapeGamesListComponent: React.FC<EscapeGamesListProps> = ({ escapeGames }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = (game: Game) => {
    setSelectedGame(game);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedGame(null);
  };

  return (
    <div className="escape-games-list mt-5">
      <h2>Toutes nos Escapes Games 😈</h2>
      <Row>
        {escapeGames.map((game) => (
          <Col key={game.id} sm={6} md={4} lg={3} className='mt-4'>
            <Card className="game-card">
              <Card.Img variant="top" src={game.image} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Button variant="danger" onClick={() => handleShowDetails(game)}>Voir les détails</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedGame && (
        <EscapeGameDetailsComponent
          show={showDetails}
          game={selectedGame}
          onHide={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default EscapeGamesListComponent;
