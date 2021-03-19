import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import Router from 'next/router'
import HLink from 'components/hlink'
import Link from 'next/link'

const CodeCollection = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Code | Reaper</title>
        <meta property='og:title' content='code@reaper' />
        <meta property='og:description' content='Code Snippets I use' />
      </Head>
      <Layout>
        <div className='container'>
          <ul className='card-border min-width-150-px'>
            {collections.map((collItem) => {
              return (
                <>
                  <li>
                    <HLink link={collItem.link}>
                      <p>
                        {collItem.title}
                        <br />
                        <small>{collItem.description}</small>
                      </p>
                    </HLink>
                  </li>
                  <Spacer y={1} />
                </>
              )
            })}
          </ul>
          <Spacer y={1} />
          <Link href='/collections'>
            <a
              className='margin-top-sm align-start button black outline-btn'
              href='/collections'
            >
              Back
            </a>
          </Link>
          <Spacer y={2} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const collections = require('static-db/code-collection.json')
  return {
    props: {
      collections
    }
  }
}

export default CodeCollection
