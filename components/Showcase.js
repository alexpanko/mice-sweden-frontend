import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Showcase() {
  return (
    <Container
      fluid
      className="d-flex align-items-center"
      style={{
        height: '500px',
        width: '95%',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(/images/showcase.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      title="Credits: Henrik Trygg/imagebank.sweden.se"
    >
      <Container>
        <Row>
          <Col>
            <h1 className="text-white text-center">
              Find and book the best meeting facilities in Sweden
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
