import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import Router from 'next/router'
import HLink from 'components/hlink'
import Link from 'next/link'

const AutomationCollection = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Automation | Reaper</title>
        <meta property='og:title' content='automation@reaper' />
        <meta
          property='og:description'
          content='Various scripts and write ups to copy for automation'
        />
      </Head>
      <Layout>
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
          <Link

            href='/collections'
          >
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
  const collections = require('static-db/automation-collection.json')
  return {
    props: {
      collections
    }
  }
}

export default AutomationCollection
