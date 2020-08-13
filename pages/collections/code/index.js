import Head from 'components/head';
import Layout from 'components/Layout';
import Spacer from 'components/Spacer';
import Router from 'next/router';
import HLink from 'components/hlink';

const CodeCollection = ({ collections }) => {
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
              );
            })}
          </ul>
          <Spacer y={1} />
          <button
            className="margin-top-sm  align-start button black outline-btn"
            onClick={() => Router.push('/collections')}
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
  const collections = require('static-db/code-collection.json');
  return {
    props: {
      collections,
    },
  };
}

export default CodeCollection;
