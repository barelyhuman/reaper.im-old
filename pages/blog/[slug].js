import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import formatDate from 'lib/format-date'
import getPosts from 'lib/get-posts'
import marked from 'marked'
import Link from 'next/link'

const PostContent = ({ post, previousPost, nextPost }) => {
  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <title>{post.meta.title} | Reaper</title>
      </Head>
      <Layout>
        <div className='container'>
          <Spacer y={2} />
          <p className='align-start time-stamp'>
            <small>{formatDate(post.meta.date)}</small>
          </p>
          <Spacer y={1} />
          <div className='post-container min-width-150 padding-25-px line-height-20-px'>
            <h1>{post.meta.title.trim()}</h1>
            <Spacer y={10} />
            <article
              className='article'
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />
          </div>
          <Spacer y={1} />
          <div className='flex just-space-between'>
            {previousPost ? (
              <Link href={`/blog/${previousPost.meta.slug}`}>
                <a href='' className='action-link'>
                  Older Post
                </a>
              </Link>
            ) : (
              <div />
            )}
            <Spacer x={5} inline />
            <Link href='/blog'>
              <a href='' className='action-link'>
                All Posts
              </a>
            </Link>
            <Spacer x={5} inline />
            {nextPost ? (
              <Link href={`/blog/${nextPost.meta.slug}`}>
                <a href='' className='action-link'>
                  Newer Post
                </a>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <Spacer y={10} />
        </div>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

            .post-container {
              font-family: 'Quicksand', sans-serif;
              max-width: calc(100% - 40px) !important;
            }

            .article {
              font-size: 1rem;
              line-height: calc(1rem * 1.5);
              max-width: 100%;
              white-space: break-spaces;
              overflow-wrap: break-word;
            }

            .article > p {
              color: #000;
            }

            .article pre {
              color: #000;
              border: 1px solid #000;
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
              color: #000;
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
              font-weight: 700;
            }

            h1 {
              text-align: center;
              font-size: 2.8rem;
              line-height: calc(2.8rem * 1.5);
            }

            h2 {
              text-align: left;
              font-size: 2rem;
              line-height: calc(2rem * 1.5);
            }

            h3 {
              text-align: left;
              font-size: 1.8rem;
              line-height: calc(1.8rem * 1.5);
            }

            .time-stamp {
              color: #666;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const posts = await getPosts()
  let index
  const records = {
    post: [],
    previousPost: [],
    nextPost: []
  }
  records.post = posts.find(({ meta }, _index) => {
    if (meta.slug === params.slug) {
      index = _index
      return true
    }
    return false
  })

  if (typeof index !== 'undefined') {
    records.previousPost = posts[index + 1] || null
    records.nextPost = posts[index - 1] || null
  }

  return { props: records }
}

export async function getStaticPaths () {
  const posts = await getPosts()

  return {
    paths: posts.map(({ meta }) => {
      return {
        params: {
          slug: meta.slug
        }
      }
    }),
    fallback: false
  }
}

export default PostContent
