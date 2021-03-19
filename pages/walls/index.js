import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import getWallpapers from 'lib/get-wallpapers'
import Link from 'next/link'
import Router from 'next/router'

const Blog = ({ walls }) => {
  return (
    <>
      <Head>
        <title>Wallpapers | Reaper</title>
      </Head>
      <Layout title='Wallpapers'>
        <div className='container'>
          <ul className='card-border min-width-150-px'>
            {walls.map(({ name, link }, index) => {
              return (
                <li key={index}>
                  <a
                    className='flex flex-col just-center align-center'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`/wallpapers/${link}`}
                  >
                    <img src={`/wallpapers/${link}`} />
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
          <Spacer y={1} />
          <Link href='/'>
            <a
              className='button margin-top-sm align-start black outline-btn'
              href='/'
            >
              Back
            </a>
          </Link>
          <Spacer y={2} />
        </div>
      </Layout>
      <style jsx>{`
        img {
          max-width: 100%;
          object-fit: contain;
        }
      `}
      </style>
    </>
  )
}

export async function getStaticProps () {
  const walls = await getWallpapers()
  return {
    props: {
      walls
    }
  }
}

export default Blog
