import Button from 'components/button'
import Input from 'components/input'
import { Row, Col } from '@barelyreaper/rlayouts'
import { useEffect, useState } from 'react'
import Spacer from 'components/Spacer'
import axios from 'axios'
import { useRouter } from 'next/router'
import useAuthenticated from 'hooks/use-authenticated'

export default function Login () {
  const [otp, setOTP] = useState('')
  const router = useRouter()
  const [loggedIn] = useAuthenticated()

  useEffect(() => {
    if (loggedIn) {
      // Todo add toast
      console.log('Already logged in')
      router.push('/')
    }
  }, [loggedIn])

  const handleGenerateOTP = async () => {
    const response = await axios.post('/api/auth/otp')
    console.log(response.data)
  }

  const handleSubmitOTP = async () => {
    const response = await axios.post('/api/auth/login', {
      otp
    })
    router.push('/')
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <>
      <div className='login-container flex flex-center'>
        <Col align='center' justify='center'>
          <Row align='center' justify='center'>
            <Input
              value={otp}
              placeholder='OTP'
              onChange={(e) => setOTP(e.target.value)}
            />
          </Row>
          <Spacer y={1} />
          <Row align='center' justify='center'>
            <Button secondary onClick={handleGenerateOTP}>
              Generate OTP
            </Button>
            <Spacer x={1} inline />
            <Button onClick={handleSubmitOTP} disabled={!otp || otp.length < 6}>
              Submit OTP
            </Button>
          </Row>
        </Col>
      </div>

      <style jsx>
        {`
          .login-container {
            min-height: 100vh;
          }

          .flex {
            display: flex;
          }

          .flex-center {
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}
