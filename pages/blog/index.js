import getPosts from 'lib/get-posts';
import Layout from 'components/Layout';
import Link from 'next/link';
import Router from 'next/router';
import Spacer from 'components/Spacer';

const Blog = ({ posts }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <ul className="card-border min-width-150-px">
            {posts.map(({ meta }, index) => {
              return (
                <li key={index}>
                  <Link href={`blog/${meta.slug}`}>
                    <a>{meta.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Spacer y={1}></Spacer>
          <button
            className="margin-top-sm  align-start button black outline-btn"
            onClick={() => Router.push('/')}
          >
            Back
          </button>
        </div>
      </Layout>
      <style jsx>{``}</style>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
