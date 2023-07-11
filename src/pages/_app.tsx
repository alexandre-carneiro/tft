import React from 'react';
import Head from 'next/head';
import '@/styles/global.scss' 
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/_next/static/css/global.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
