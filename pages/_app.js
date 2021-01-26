import Head from 'components/head'
import GlobalSearch from 'components/global-search';
import feather from 'feather-icons'
import { useEffect } from 'react'
import 'prismjs/themes/prism.css'


function App ({ Component, pageProps }) {
  const { post } = pageProps

  useEffect(() => {
    feather.replace()
  }, [])

  return (
    <>
      <Head>
        <title>Reaper | Full Stack Developer</title>
        <meta property='og:site_name' content='Reaper | Full Stack Developer' />

        <meta
          property='og:title'
          content={
            post && post.meta
              ? post.meta.title
              : 'Reaper | Full Stack Developer'
          }
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@_barelyhuman' />
        <meta
          property='og:image'
          content='https://reaper.im/wallpapers/reaper-dark.png'
        />
      </Head>
      <GlobalSearch />
      <Component {...pageProps} />
    </>
  )
}

export default App
