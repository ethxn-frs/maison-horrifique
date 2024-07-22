import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="horror-navbar">
      <Container>
        <Navbar.Brand href="/">La Maison Horrifique</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/details">Détails</Nav.Link>
            <Nav.Link href="/reservation">Réservation</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
