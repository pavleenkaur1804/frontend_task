import RootLayout from '../components/RootLayout'; // Adjust the path as needed
import Head from 'next/document';

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
