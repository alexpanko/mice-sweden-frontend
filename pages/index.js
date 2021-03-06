// NextJS
import Link from 'next/link';

// Components
import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';

// Bootstrap CSS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// API
import { API_URL } from '@/config/index';

export default function HomePage({ products }) {
  return (
    <Layout>
      <Row>
        <Col>
          <h2 className='fw-bold'>
            Placeholder for filters
          </h2>
          {products.length === 0 && <h3>No MICE products to show</h3>}
        </Col>
      </Row>
      <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} className="g-3 my-3">
        {products.map((prd) => (
          <ProductItem key={prd.id} prd={prd} />
        ))}
      </Row>
      <Row>
        <Col>
          <Link href="/products">
            <a className="btn btn-secondary">VIEW ALL PRODUCTS {'>'}</a>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  return {
    props: { products: products.slice(0, 4) },
    revalidate: 1,
  };
}
