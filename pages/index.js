import Head from "next/head";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";

function Index() {
  return (
    <Layout>
      <Head>
        <title>Siddharth Gelera | Full Stack Developer</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="margin-md flex just-center flex-col align-center">
          <img src="/logo.png" height={100} alt="logo" />
          <Spacer y={2} />
          <a href="/" className="action-link">
            <span className="dark-gray font-size-50 text-center flex just-center">
              Siddharth Gelera
            </span>
          </a>
          <Spacer y={1} />
          <div className="tagline">
            <small className="font-size-15">
              Minimalist | Designer | Developer{" "}
            </small>
          </div>
        </div>
        <br></br>
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
          <a
            className="margin-sm button black outline-btn"
            href="https://blog.siddharthgelera.com"
          >
            Blog
          </a>
        </div>
        <Spacer y={1} />
        <div className="margin-sm">
          <a className="margin-sm action-link" href="/about">
            About
          </a>
        </div>
        <Spacer y={1} />
        <div className="social-links flex just-center">
          <a href="https://github.com/barelyhuman">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Profile"
              height="30"
              width="30"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
