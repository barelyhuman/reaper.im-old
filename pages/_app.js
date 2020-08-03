import Head from 'components/head';
import feather from 'feather-icons';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Head>
        <title>Reaper | Full Stack Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
