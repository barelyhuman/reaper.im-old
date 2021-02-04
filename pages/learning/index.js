import Router from 'next/router'
import Layout from '../../components/Layout'
import Spacer from '../../components/Spacer'

export default () => {
  return (
    <Layout title='Learning'>
      <div className='container'>
        <div className='min-width-150-px card-border'>
          <ul>
            <li>Rust</li>
            <li>C / Portable C - Refreshing Skills</li>
            <li>Kernel Design</li>
            <li>Compiler and Text Editor Tokenization and AST Parsing</li>
          </ul>
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
