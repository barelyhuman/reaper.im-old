import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
	<title>Siddharth Gelera | Full Stack Developer</title>
	</Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
