import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import getPosts from 'lib/get-posts'
import Link from 'next/link'
import Router from 'next/router'
import Padding from 'components/padding'
import { shortFormatDate } from 'lib/format-date'
import useAuthenticated from 'hooks/use-authenticated'
import Button from 'components/button'
import { Row } from '@barelyreaper/rlayouts'

const Blog = ({ posts }) => {
  const [isLoggedIn] = useAuthenticated()

  return (
    <>
      <Head>
        <title>Blog | Reaper</title>
      </Head>
      <Layout title='Blog'>
        <Padding y={3}>
          <div className='container'>
            {isLoggedIn ? (
              <>
                <div className='w-100'>
                  <Row justify='flex-end'>
                    <Link href='/blog/new'>
                      <Button> Create Post </Button>
                    </Link>
                  </Row>
                </div>
              </>
            ) : null}
            <ul className='card-border min-width-150-px'>
              {posts.map(({ meta }, index) => {
                return (
                  <li key={index}>
                    <Link href={`blog/${meta.slug}`}>
                      <a>
                        {shortFormatDate(meta.date)} - {meta.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Spacer y={1} />
            <Link href="/">
          <a
            className="button margin-top-sm align-start black outline-btn"
            href="/"
          >
            Back
          </a>
        </Link>
            <Spacer y={2} />
          </div>
        </Padding>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default Blog
