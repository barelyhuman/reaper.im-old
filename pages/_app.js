import Head from 'lib/components/head'
import Nprogress from 'lib/components/nprogress'
import 'toastify-js/src/toastify.css'

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
