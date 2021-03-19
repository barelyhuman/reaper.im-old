import Head from 'components/head'
import HLink from 'components/hlink'
import Router from 'next/router'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import Link from 'next/link'

const ChecklistsCollection = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Checklists | Reaper</title>
        <meta property='og:title' content='libraries@reaper' />
        <meta
          property='og:description'
          content='Various checklists to go through before certain actions'
        />
      </Head>
      <Layout title='Checklists'>
        <div className='container'>
          <ul className='card-border min-width-150-px'>
            {collections.map((collItem) => {
              return (
                <>
                  <li>
                    <HLink link={collItem.link}>
                      <a>
                        <p>
                          {collItem.title}
                          <br />
                          <small>{collItem.description}</small>
                        </p>
                      </a>
                    </HLink>
                  </li>
                  <Spacer y={1} />
                </>
              )
            })}
          </ul>
          <Spacer y={1} />
          <Link href="/collections">
          <a
            className="margin-top-sm align-start button black outline-btn"
            href="/collections"
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
  const collections = require('static-db/checklists-collection.json')
  return {
    props: {
      collections
    }
  }
}

export default ChecklistsCollection
