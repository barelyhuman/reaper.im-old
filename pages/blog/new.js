import Input from 'components/input'
import Layout from 'components/Layout'
import Textarea from 'components/textarea'
import { Col, Spacer, Row } from '@barelyreaper/rlayouts'
import { useState } from 'react'
import Button from 'components/button'

import withAuthenticationCheck from 'components/hoc/with-authentication-check'
import axios from 'axios'
import { useRouter } from 'next/router'

function NewBlogPost ({ ...props }) {
  const [postTitle, setPostTitle] = useState('')
  const [postDate, setPostDate] = useState(new Date())
  const [postContent, setPostContent] = useState('')
  const router = useRouter()

  const handleCreatePost = async () => {
    const response = await axios.post('/api/blog', {
      title: postTitle,
      date: postDate,
      body: postContent
    })
    if (response) {
      // Todo: toast on completion
      router.push('/')
    }
  }

  return (
    <>
      <Layout>
        <div className='container'>
          <div class='w-100'>
            <Col>
              <h1 style={{ fontSize: 36 }}>New Post</h1>
              <Spacer y={2} />
              <Input
                style={{ fontSize: '20px', lineHeight: '36px', height: 'auto' }}
                placeholder='Post Title'
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <Spacer y={1} />
              <Input
                style={{ fontSize: '20px', lineHeight: '36px', height: 'auto' }}
                type='date'
                value={postDate}
                onChange={(e) => setPostDate(e.target.value)}
              />
              <Spacer y={1} />
            </Col>
          </div>
          <Textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder='Post content (Markdown Supported)'
            style={{
              minHeight: '45vh',
              width: '50vw',
              fontSize: '16px',
              lineHeight: '30px',
              fontFamily: 'Helvetica Neue, Helvetica, Arial,sans-serif'
            }}
          />
          <Spacer y={2} />
          <div className='w-100'>
            <Row justify='flex-end'>
              <Button onClick={handleCreatePost}>Create Post</Button>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default withAuthenticationCheck(NewBlogPost)
