import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function ProductItem({prd}) {

  return (
    <Col>
      <Card className="border-0" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={prd.image ? prd.image : '/images/product-default.png'}
        />
        <Card.Body className="bg-light">
          <Card.Title>{prd.name}</Card.Title>
          <Card.Subtitle className="text-muted">
            {prd.category && prd.category.join(', ')} in{' '}
            {prd.destination && prd.destination.join(', ')}
          </Card.Subtitle>
          <Card.Text className="mt-3">
            {prd.description.split(' ').length < 26
              ? prd.description
              : prd.description.split(' ').splice(0, 25).join(' ')}
            ...
          </Card.Text>
          <Link href={`/products/${prd.slug}`}>
            <a className="btn btn-primary">READ MORE {'>'}</a>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
