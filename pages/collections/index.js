import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import Link from 'next/link'
import Router from 'next/router'

const Collections = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Collections | Reaper</title>
        <meta property='og:title' content='collections@reaper' />
        <meta
          property='og:description'
          content='List of things I need and/or use'
        />
      </Head>
      <Layout title="Collections">
        <div className='container'>
          <ul className='card-border min-width-150-px'>
            {collections.map((collItem) => {
              return (
                <>
                  <li>
                    <Link href={collItem.link}>
                      <a>
                        <p>
                          {collItem.title}
                          <br />
                          <small>{collItem.description}</small>
                        </p>
                      </a>
                    </Link>
                  </li>
                  <Spacer y={1} />
                </>
              )
            })}
          </ul>
          <Spacer y={1} />
          <button
            className='margin-top-sm  align-start button black outline-btn'
            onClick={() => Router.push('/')}
          >
            Back
          </button>
          <Spacer y={2} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const collections = require('static-db/collections.json')
  return {
    props: {
      collections
    }
  }
}

export default Collections
