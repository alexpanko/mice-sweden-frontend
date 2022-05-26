import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <Container>
        <Row style={{ margin: '100px 0px 200px' }}>
          <Col className="text-center">
            <h1 className="display-2">
              <FaExclamationTriangle /> 404
            </h1>
            <h4 className="pt-3">Sorry, there is nothing here</h4>
            <Link href="/">Go Back Home</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
