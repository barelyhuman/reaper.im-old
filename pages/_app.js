import Head from "next/head";

function App({ Component, pageProps }) {
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
