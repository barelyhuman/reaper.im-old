import Head from 'components/head';
import Layout from 'components/Layout';
import Padding from 'components/padding';
import Spacer from 'components/Spacer';
import getPosts from 'lib/get-posts';
import { getPostsFromBMC } from 'lib/get-posts-from-bmc';
import Link from 'next/link';
import Router from 'next/router';

const Blog = ({ posts = [], localPosts = [] }) => {
  return (
    <>
      <Head>
        <title>Blog | Reaper</title>
      </Head>
      <Layout title="Blog">
        <Padding y={3}>
          <div className="container">
            <ul className="card-border min-width-150-px">
              <h2 className="post-separator">
                From{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://buymeacoffee.com/barelyhuman/posts"
                >
                  BuyMeACoffee
                </a>
              </h2>
              {posts.map(({ title, slug }, index) => {
                return (
                  <li key={index}>
                    <Link href={`blog/${slug}`}>
                      <a>{title}</a>
                    </Link>
                  </li>
                );
              })}
              <Spacer y={2} />
              <h2 className="post-separator">The Usuals </h2>
              {localPosts.map(({ meta }, index) => {
                return (
                  <li key={index}>
                    <Link href={`blog/${meta.slug}`}>
                      <a>{meta.title}</a>
                    </Link>
                  </li>
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
        </Padding>
      </Layout>
      <style jsx>
        {`
          .post-separator {
            padding-bottom: 16px;
            border-bottom: 1px solid #eee;
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const data = await getPostsFromBMC();
  const localPosts = await getPosts();
  return {
    props: {
      posts: data.posts,
      localPosts,
    },
  };
}

export default Blog;
