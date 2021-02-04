import Router from 'next/router'
import Layout from '../../components/Layout'
import Spacer from '../../components/Spacer'

export default () => {
  return (
    <Layout title='About'>
      <div className='container'>
        <div className='min-width-150-px card-border padding-25-px max-width-500-px line-height-20-px'>
          <p>
            A Confident, Curious and Self Taught developer who prefers to keep
            things as simple as possible while keeping in mind the importance of
            quality and time.
            <br />
            <br />
            Started coding with my liking to the Frontend and grew into a Full
            Stack Developer with around 2 Years of professional experience and
            22 years worth of experience in communicating with people to get
            things done.
            <br />
            <br />
          </p>
        </div>
        <Spacer y={1} />
        <button
          className='button margin-top-sm align-start black outline-btn'
          onClick={() => Router.push('/')}
        >
          Back
        </button>
      </div>
    </Layout>
  )
}
