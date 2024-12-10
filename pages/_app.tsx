// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head> 
        <title>Portfolio - 2025</title> 
        <meta name="description" content="Your app description" /> 
    </Head>
    <Component {...pageProps} />
    </>
 );
};

export default MyApp;