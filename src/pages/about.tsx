import Head from 'next/head';
import React from 'react';

// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon-kow.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap" rel="stylesheet" />
    </Head>
  );
}

export default pages;