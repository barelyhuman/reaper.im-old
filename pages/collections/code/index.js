import Head from 'components/head';
import Layout from 'components/Layout';
import Spacer from 'components/Spacer';
import Link from 'next/link';
import Router from 'next/router';

const CodeCollection = ({ collections }) => {
  const HLink = ({ link, children }) => {
    const isHttps = link.indexOf('http') > -1 || link.indexOf('https') > -1;
    if (isHttps) {
      return <a href={link}>{children}</a>;
    }
    return (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    );
  };

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
  const collections = require('static-db/code-collection.json');
  return {
    props: {
      collections,
    },
  };
}

export default CodeCollection;
