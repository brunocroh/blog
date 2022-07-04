import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Main from '@layouts/Main';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bruno Pinheiro</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic" rel="stylesheet" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
