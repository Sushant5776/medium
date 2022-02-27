import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'

nprogress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
