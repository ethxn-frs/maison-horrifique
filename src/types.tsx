export interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
  price: string;
}

export interface EscapeGamesListProps {
  escapeGames: Game[];
}

export interface EscapeGameDetailsProps {
  show: boolean;
  game: Game;
  onHide: () => void;
}