import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import formatDate from 'lib/format-date'
import getPosts from 'lib/get-posts'
import Link from 'next/link'
import EmailFooter from 'components/email-footer'

const PostContent = ({ post, previousPost, nextPost }) => {
  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <title>{post.meta.title} | Reaper</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap'
        />
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
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <Spacer y={2} />
            <EmailFooter />
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
            :root {
              --base-font-size: 1rem;
              --h6-size: calc(var(--base-font-size) * 1.25);
              --h5-size: calc(var(--h6-size) * 1.25);
              --h4-size: calc(var(--h5-size) * 1.25);
              --h3-size: calc(var(--h4-size) * 1.25);
              --h2-size: calc(var(--h3-size) * 1.25);
              --h1-size: calc(var(--h2-size) * 1.25);
            }

            .post-container {
              font-family: 'Quicksand', sans-serif;
              max-width: calc(100% - 40px) !important;
              word-break: break-word;
            }

            .article {
              font-size: var(--base-font-size);
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
              line-height: calc(var(--base-font-size * 1.5));
              font-size: var(--base-font-size);
            }

            .article ul li {
              color: #000;
            }

            .article ul li a {
              text-decoration: underline;
              color: #555;
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
              font-size: var(--h1-size);
              line-height: calc(var(--h1-size) * 1.5);
            }

            h2 {
              text-align: left;
              font-size: var(--h2-size);
              line-height: calc(var(--h2-size) * 1.5);
            }

            h3 {
              text-align: left;
              font-size: var(--h3-size);
              line-height: calc(var(--h3-size) * 1.5);
            }

            h4 {
              text-align: left;
              font-size: var(--h4-size);
              line-height: calc(var(--h4-size) * 1.5);
            }

            h5 {
              text-align: left;
              font-size: var(--h5-size);
              line-height: calc(var(--h5-size) * 1.5);
            }

            h6 {
              text-align: left;
              font-size: var(--h6-size);
              line-height: calc(var(--h6-size) * 1.5);
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
