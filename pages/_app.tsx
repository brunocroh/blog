import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Main from '@layouts/Main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bruno Pinheiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
