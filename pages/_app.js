import Head from 'components/head';
import GlobalSearch from 'components/global-search';
import feather from 'feather-icons';
import { useEffect } from 'react';
import 'prismjs/themes/prism.css';
import 'styles/autocomplete.css';
import useAuthenticated from 'hooks/use-authenticated';
import Spacer from 'components/Spacer';
import { Row } from '@barelyreaper/rlayouts';
import Button from 'components/button';
import axios from 'axios';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const [isLoggedIn, revalidate] = useAuthenticated();
  const router = useRouter();
  const { post } = pageProps;

  useEffect(() => {
    feather.replace();
  }, []);

  const handleLogout = async () => {
    const response = await axios.post('/api/auth/logout');
    if (response.data.success) {
      router.push('/');
      revalidate();
    }
  };

  return (
    <>
      <Head>
        <title>Reaper | Full Stack Developer</title>
        <meta property="og:site_name" content="Reaper | Full Stack Developer" />

        <meta
          property="og:title"
          content={
            post && post.meta
              ? post.meta.title
              : 'Reaper | Full Stack Developer'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_barelyhuman" />
        <meta
          property="og:image"
          content="https://reaper.im/wallpapers/reaper-dark.png"
        />
      </Head>
      <GlobalSearch />
      {isLoggedIn ? (
        <>
          <Spacer y={2}></Spacer>
          <Row justify="end">
            <Button secondary onClick={handleLogout}>
              Logout
            </Button>
            <Spacer x={1} inline></Spacer>
          </Row>
        </>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}

export default App;
