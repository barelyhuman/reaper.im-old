import Layout from '../components/Layout';
import Head from 'next/head';

function Index(){
  return <Layout>
  <Head>
    <title>
      Siddharth Gelera | Full Stack Developer
    </title>
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
  <div className="container">
    <div className="margin-md flex just-center flex-col align-center">
      <img src="/logo.png" height={100} width={100} alt="logo"/>
      <a href="/" className="action-link">
        <span className="dark-gray font-size-50 text-center flex just-center">
          Siddharth Gelera
        </span>
      </a>
      <div className="social-links flex just-center">
        <a href="https://dev.to/reapr">
          <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Siddharth Gelera's DEV Profile"
            height="30" width="30" />
        </a>
        <a href="https://gitlab.com/alienblogger">
          <img src="https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg"
            alt="Siddharth Gelera's Gitlab Profile" height="30" width="30" />
        </a>
        <a href="https://github.com/barelyhuman">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Siddharth Gelera's GitHub Profile" height="30" width="30" />
        </a>
      </div>
      <div className="tagline">
        <small className="font-size-15">Minimalist | Designer | Developer </small>
      </div>
    </div>
    <div className="flex flex-wrap just-center align-center">
      <a className="margin-sm button black" href="/hire">
        Hire
      </a>
    </div>
    <div className="flex flex-wrap just-center align-center">
      <a className="margin-sm button black outline-btn" href="/work">
        Work
      </a>
      <a className="margin-sm button black outline-btn" href="/skills">
        Skills
      </a>
      <a className="margin-sm button black outline-btn" href="/learning">
        Learning
      </a>
      <a className="margin-sm button black outline-btn" href="https://blog.siddharthgelera.com">
        Blog
      </a>
    </div>
    <div className="margin-sm">
      <a className="margin-sm action-link" href="/about">
        About
      </a>
    </div>
  </div>
</Layout>
}

export default Index;
