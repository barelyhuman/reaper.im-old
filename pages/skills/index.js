import Router from 'next/router'
import Layout from '../../components/Layout'
import Spacer from '../../components/Spacer'

function Skills () {
  return (
    <Layout title="Skills">
      <div className='container'>
        <div className='flex just-space-between min-width-150-px card-border'>
          <ul>
            <li>Linux</li>
            <li>React</li>
            <li>Git</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Adobe Illustrator</li>
            <li>Python</li>
            <li>Webpack</li>
            <li>Flutter</li>
            <li>Go Lang</li>
            <li>Hasura-Graphql</li>
          </ul>
          <ul>
            <li>Vue.js</li>
            <li>RiotJS</li>
            <li>React Native</li>
            <li>Angular.js</li>
            <li>Angular 2+</li>
            <li>Loopback - Node</li>
            <li>HTML/CSS/JS</li>
            <li>Ruby (Basics)</li>
            <li>Docker</li>
            <li>Graphql</li>
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

export default Skills
