import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { SE } from 'country-flag-icons/react/3x2';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Link href="/">
          <a className="navbar-brand fw-bold text-primary fs-3">
            <SE
              title="Sweden"
              className="me-1 align-baseline"
              style={{
                height: '20px',
              }}
            />
            MICE in Sweden
          </a>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link href="/">
              <a className="nav-link text-dark fw-bold">Home</a>
            </Link>
            <Link href="/destinations">
              <a className="nav-link text-dark fw-bold">Destinations</a>
            </Link>
            <Link href="/themes">
              <a className="nav-link text-dark fw-bold">Themes</a>
            </Link>
            <Link href="/products">
              <a className="nav-link text-dark fw-bold">Products</a>
            </Link>
            <Link href="/placeholder">
              <a className="nav-link text-dark fw-bold">Placeholder</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
