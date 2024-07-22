import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/Navbar/NavbarComponent';
import HomeComponent from './components/Home/HomeComponent';
import ReservationComponent from './components/Reservation/ReservationComponent';
import ContactComponent from './components/Contact/ContactComponent';
import FooterComponent from './components/Footer/FooterComponent';
import { escapeGames } from './data';
import './App.css';
import EscapeGamesListComponent from './components/EscapeGame/EscapeGameListComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/reservation" element={<ReservationComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/details" element={<EscapeGamesListComponent escapeGames={escapeGames} />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
