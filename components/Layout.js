import Head from 'next/head';
import {useRouter} from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Showcase from '@/components/Showcase'
import Container from 'react-bootstrap/Container';

export default function Layout({ title, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <Container className="my-5">{children}</Container>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'MICE in Sweden',
  description:
    'Find and book the best MICE (Meetings, Incentives, Conferencing, Exhibitions) facilities in Sweden: conference venues, hotels, activities, etc.',
};
