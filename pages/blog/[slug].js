import getPosts from 'lib/get-posts';
import Link from 'next/link';
import Spacer from 'components/Spacer';
import marked from 'marked';
import formatDate from 'lib/format-date';
import Layout from 'components/Layout';

const PostContent = ({ post, previousPost, nextPost }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <Spacer y={2} />
          <p className="align-start time-stamp">
            <small>{formatDate(post.meta.date)}</small>
          </p>
          <Spacer y={1}></Spacer>
          <div className="card-border post-container min-width-150 padding-25-px line-height-20-px">
            <h1>{post.meta.title}</h1>
            <Spacer y={1} />
            <article
              className="article"
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            ></article>
          </div>
          <Spacer y={1}></Spacer>
          <div className="flex just-space-between">
            {previousPost ? (
              <Link href={`/blog/${previousPost.meta.slug}`}>
                <a href="" className="action-link">
                  Prev Post
                </a>
              </Link>
            ) : null}
            <Spacer x={5} inline></Spacer>
            <Link href="/blog">
              <a href="" className="action-link">
                All Posts
              </a>
            </Link>
            <Spacer x={5} inline></Spacer>
            {nextPost ? (
              <Link href={`/blog/${nextPost.meta.slug}`}>
                <a href="" className="action-link">
                  Next Post
                </a>
              </Link>
            ) : null}
          </div>
          <Spacer y={10}></Spacer>
        </div>
        <style jsx global>
          {`
            .post-container {
              max-width: 700px !important;
            }

            .article {
              font-size: 16px;
              line-height: 24px;
              font-family: 'Exo 2', sans-serif;

              max-width: 100%;

              white-space: break-spaces;
              overflow-wrap: break-word;
            }

            .article > p {
              color: #333;
            }

            .article pre {
              color: #000;
              border: 1px solid #333;
              border-radius: 4px;
              color: #000;
              padding: 10px;
              overflow: auto;
            }

            .article ul {
              text-align: left;
              padding: 0;
              padding-left: 20px;
              list-style-type: disc;
            }

            .article ul li,
            .article ul li a {
              line-height: 14px;
              font-size: 14px;
            }

            .article ul li {
              color: #333;
            }

            .article ul li a {
              text-decoration: underline;
              color: #999;
            }

            .article ul li a:hover {
              color: black;
              cursor: pointer;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #444;
            }

            .time-stamp {
              color: #666;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  let index;
  const records = {
    post: [],
    previousPost: [],
    nextPost: [],
  };
  records.post = posts.find(({ meta }, _index) => {
    if (meta.slug === params.slug) {
      index = _index;
      return true;
    }
    return false;
  });

  if (typeof index !== 'undefined') {
    records.previousPost = posts[index - 1] || null;
    records.nextPost = posts[index + 1] || null;
  }

  return { props: records };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ meta }) => {
      return {
        params: {
          slug: meta.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostContent;
