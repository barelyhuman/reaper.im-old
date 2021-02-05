import Padding from 'components/padding'
import Router from 'next/router'
import Layout from '../../components/Layout'
import Spacer from '../../components/Spacer'

function Work () {
  return (
    <Layout title='Checklists'>
      <div className='container'>
        <Spacer y={4} />
        <p>
          <strong>Not Built yet.....</strong>{' '}
        </p>
        <Spacer y={1} />
        <button
          className='margin-top-sm  align-start button black outline-btn'
          onClick={() => Router.push('/')}
        >
          Back
        </button>
        <Spacer y={2} />
      </div>
    </Layout>
  )
}

export default Work
