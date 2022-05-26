import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <Container fluid className="bg-secondary">
      <Row className="text-dark pt-3">
        <Col xs={5} className="m-3">
          <h6>MICE in Sweden</h6>
          <p>
            <small>
              Find and book the best MICE (Meetings, Incentives, Conferencing,
              Exhibitions) facilities in Sweden: conference venues, hotels,
              activities, etc.
            </small>
          </p>
        </Col>
        <Col className="m-3">
          <h6>Important Links</h6>
          <small>
            <Link href="/about">
              <a className="text-dark text-decoration-none">About us</a>
            </Link>
          </small>
          <br />
          <small>
            <Link href="https://www.linkedin.com/">
              <a className="text-dark text-decoration-none">Linkedin</a>
            </Link>
          </small>
        </Col>
        <Col className="m-3">
          <h6>Destinations</h6>
          <small>
            <Link href="/">
              <a className="text-dark text-decoration-none">Stockholm</a>
            </Link>
          </small>
          <br />
          <small>
            <Link href="/">
              <a className="text-dark text-decoration-none">Göteborg</a>
            </Link>
          </small>
          <br />
          <small>
            <Link href="/">
              <a className="text-dark text-decoration-none">Malmö</a>
            </Link>
          </small>
          <br />
          <small>
            <Link href="/">
              <a className="text-dark text-decoration-none">Northern Sweden</a>
            </Link>
          </small>
          <br />
          <small>
            <Link href="/">
              <a className="text-dark text-decoration-none">Central Sweden</a>
            </Link>
          </small>
          <br />
          <small>
            <Link href="/">
              <a className="text-dark text-decoration-none">Southern Sweden</a>
            </Link>
          </small>
        </Col>
      </Row>
      <hr />
      <Row className="p-3 bg-secondary">
        <Col>
          <p className="text-center">
            <small className="text-dark">
              &copy; 2022 Copyright: <strong>MICESweden.com</strong>
            </small>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
