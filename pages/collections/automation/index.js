import Head from 'components/head';
import Layout from 'components/Layout';
import Spacer from 'components/Spacer';
import Link from 'next/link';
import Router from 'next/router';

const AutomationCollection = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Collections | Reaper</title>
      </Head>
      <Layout>
        <div className="container">
          <ul className="card-border min-width-150-px">
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
              );
            })}
          </ul>
          <Spacer y={1} />
          <button
            className="margin-top-sm  align-start button black outline-btn"
            onClick={() => Router.push('/')}
          >
            Back
          </button>
          <Spacer y={2} />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const collections = require('static-db/automation-collection.json');
  return {
    props: {
      collections,
    },
  };
}

export default AutomationCollection;
