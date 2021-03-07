import EmailFooter from 'components/email-footer'
import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import { UtterancesComments } from 'components/utterance-comments'
import { diffDuration, shortFormatDate } from 'lib/format-date'
import getPosts from 'lib/get-posts'
import Link from 'next/link'

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

      <div className='content'>
        <Spacer y={2} />
        <p className='align-start time-stamp'>
          <small>
            {shortFormatDate(post.meta.date) +
              ` (${diffDuration(post.meta.date) + ' ago'})`}
          </small>
        </p>
        <Spacer y={1} />
        <div className='post-container min-width-150 padding-25-px line-height-20-px'>
          <h1>{post.meta.title.trim()}</h1>
          <Spacer y={4} />
          <article dangerouslySetInnerHTML={{ __html: post.content }} />
          <Spacer y={2} />
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
        <UtterancesComments />
      </div>
      <style jsx global>
        {`
          // CSS Snippets borrowed from https://github.com/pacocoursey/bear-css/
          // as the repo has no licenses, all rights and credits belong to Paco Coursey and the following will be removed if asked.

          ::-webkit-scrollbar {
            display: none;
          }

          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
          }

          .content {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px 60px;
          }

          h1 {
            font-weight: 600;
            line-height: 50px;
            font-size: 36px;
          }

          h2 {
            font-size: 18px;
            font-weight: 600;
            font-size: 24px;
            line-height: 35px;
          }

          h3 {
            font-weight: 600;
            font-size: 24px;
            line-height: 35px;
          }

          h4,
          h5,
          h6 {
            font-size: 14px;
            font-weight: 600;
          }

          hr {
            padding: 10px;
            border: 0;
            border-top: 1px solid #ced4da;
          }

          .tag::before {
            content: '#';
            color: #dee2e6;
          }

          .tag {
            background-color: #868e96;
            color: #fbfbfb;
            border-radius: 50px;
            padding: 5px 9px;
            display: inline;
            font-size: 12px;
          }

          p {
            line-height: 1.8em;
            line-height: 30px;
            letter-spacing: 0.5px;
          }

          code::before,
          code::after {
            content: '\`';
            color: #ced4da;
            padding: 1px;
          }

          pre > code::before,
          pre > code::after {
            content: '';
            color: #ced4da;
            padding: 1px;
          }

          code {
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            padding: 3px;
            font-family: 'Consolas', monospace;
          }

          pre::before,
          pre::after {
            content: '\`\`\`';
            display: block;
            color: #ced4da;
            padding-bottom: 5px;
          }

          pre {
            color: #495057;
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            padding: 5px 10px;
            font-family: 'Consolas', monospace;
            line-height: 1.5em;
          }

          pre > code {
            background-color: transparent;
            border: 0;
            padding: 3px;
            white-space: pre-wrap !important;
          }

          blockquote {
            border-left: 2px solid #495057;
            padding-left: 10px;
          }

          u::before,
          u::after {
            content: ${'\\00a0\\00a0'};
            color: #adb5bd;
          }

          u {
            text-decoration-color: #adb5bd;
          }

          b::before,
          b::after {
            content: '*';
            color: #ced4da;
            font-weight: normal;
          }

          b {
            font-weight: 600;
          }

          i::before,
          i::after {
            content: '/';
            color: #ced4da;
          }

          a::before,
          a::after {
            content: ${'\\00a0\\00a0'};
            color: #adb5bd;
          }

          a {
            color: #495057;
            text-decoration: underline;
            transition: 0.3s;
          }

          a:hover {
            color: #adb5bd;
            transition: 0.3s;
          }

          s {
            color: #868e96;
            text-decoration-color: #868e96;
          }

          li {
            margin: 16px 0px;
          }

          .flex {
            display: flex;
          }

          .just-space-between {
            justify-content: space-between;
          }

          ul {
            padding-inline-start: 35px;
          }

          .checkbox-list {
            list-style-type: none;
          }

          img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
          }
        `}
      </style>
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
