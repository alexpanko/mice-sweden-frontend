import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { HiPresentationChartBar } from 'react-icons/hi';
import { BiRestaurant } from 'react-icons/bi';

import Link from 'next/link';
import Layout from '@/components/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { API_URL } from '@/config/index';

// Bootstrap CSS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function ProductPage({ prd }) {
  const deleteProduct = (e) => {
    console.log(object);
  };

  return (
    <Layout>
      <Row>
        <Col className="text-end">
          <Link href={`/products/edit/${prd.id}`}>
            <a className="text-decoration-none link-primary me-2">
              <FaPencilAlt /> Edit Prodcut
            </a>
          </Link>
          <a
            href="#"
            onClick={deleteProduct}
            className="text-decoration-none link-primary me-2"
          >
            <FaTimes /> Delete Event
          </a>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Image
            className="img-fluid"
            style={{ objectFit: 'cover', width: '100%', height: '600px' }}
            src={prd.image}
            alt={prd.name}
          />
        </Col>
      </Row>
      <Row className="mx-sm-5 px-sm-5">
        <Col>
          <h2 className="mt-5 fw-bold">{prd.name}</h2>
          <p className="fw-bold">{prd.headline}</p>
          <Button className="px-5 btn-lg">BOOK A MEETING</Button>
          <h4 className="fw-bold mt-5">Description</h4>
          <p>{prd.description}</p>
          <h4 className="fw-bold mt-4">Facilities</h4>
          <hr />
          <Row>
            <Col>
              <CardGroup>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Title>
                      <MdHotel className="display-4" />
                    </Card.Title>
                    <Card.Text>Hotel rooms: {prd.hotelrooms}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Title>
                      <HiPresentationChartBar className="display-4" />
                    </Card.Title>
                    <Card.Text>Meeting rooms: {prd.meetingrooms}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Title>
                      <BsPeopleFill className="display-4" />
                    </Card.Title>
                    <Card.Text>
                      Max participants: {prd.maxparticipants}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Title>
                      <BiRestaurant className="display-4" />
                    </Card.Title>
                    <Card.Text>
                      Restaurant capacity: {prd.restaurantcapacity}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <hr />
          <h4 className="fw-bold mt-4">Location</h4>
          <h2>placeholder for map</h2>
          <p>Address: {prd.address}</p>
        </Col>
      </Row>
      <Row
        xs={1}
        sm={1}
        md={2}
        lg={3}
        xl={3}
        xxl={3}
        className="g-2 my-3 d-flex justify-content-center"
      >
        {prd.images.map((img, index) => (
          <Col key={index}>
            <Card
              xs={1}
              sm={1}
              md={2}
              lg={3}
              xl={3}
              xxl={4}
              className="border-0"
            >
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="my-5 pb-5 mx-sm-5 px-sm-5">
        <Col>
          <Button className="px-5 btn-lg me-3">BOOK A MEETING</Button>
          <Link href="/products">
            <a className="text-decoration-none btn btn-secondary btn-lg px-5">
              VIEW ALL PRODUCTS
            </a>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  const paths = products.map((prd) => ({
    params: { slug: prd.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/products/${slug}`);
  const products = await res.json();

  return {
    props: {
      prd: products[0],
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/products/${slug}`);
//   const products = await res.json();

//   return {
//     props: {
//       prd: products[0],
//     },
//   };
// }
