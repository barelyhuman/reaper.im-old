import Layout from '../components/Layout'
import Spacer from '../components/Spacer'

function Index () {
  return (
    <>
      <Layout>
        <div className='container'>
          <div className='margin-md flex just-center flex-col align-center'>
            <img
              src='/logo.svg'
              className='neon-black'
              height={100}
              alt='logo'
            />
            <Spacer y={2} />
            <a href='/' className='action-link'>
              <span className='dark-gray neon-black font-size-50 text-center flex just-center'>
                Reaper
              </span>
            </a>
            <Spacer y={1} />
            <div className='tagline'>
              <small className='font-size-15'>
                Minimalist | Designer | Developer{' '}
              </small>
            </div>
          </div>
          <br />
          <div className='flex flex-wrap just-center align-center'>
            <a className='margin-sm button black' href='/contact'>
              Contact
            </a>
          </div>
          <div className='flex flex-wrap just-center align-center'>
            <a className='margin-sm button black outline-btn' href='/work'>
              Work
            </a>
            <a className='margin-sm button black outline-btn' href='/skills'>
              Skills
            </a>
            <a className='margin-sm button black outline-btn' href='/blog'>
              Blog
            </a>
            <a
              className='margin-sm button black outline-btn'
              href='/collections'
            >
              Collections
            </a>
            <a className='margin-sm button black outline-btn' href='/walls'>
              Wallpapers
            </a>
          </div>
          <Spacer y={1} />
          <div className='margin-sm'>
            <a className='margin-sm action-link' href='/about'>
              About
            </a>
          </div>
          <Spacer y={1} />
          <div className='social-links flex just-center'>
            <a href='https://github.com/barelyhuman'>
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='GitHub Profile'
                height='30'
                width='30'
              />
            </a>
          </div>
          <Spacer y={10} />
          <div className='action-link'>
            <p>⌘/ctrl + k - power menu</p>
          </div>
        </div>
      </Layout>
      <style jsx>
        {`
          .neon-black {
            filter: drop-shadow(0px 0px 1px #121212);
          }
        `}
      </style>
    </>
  )
}

export default Index
