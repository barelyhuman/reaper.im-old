import Layout from '../../components/Layout';
import Router from 'next/router';
import Spacer from '../../components/Spacer';

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="min-width-150-px card-border">
          <ul>
            <li>Rust</li>
            <li>Go</li>
          </ul>
        </div>
        <Spacer y={1}></Spacer>
        <button
          className="button margin-top-sm align-start black outline-btn"
          onClick={() => Router.push('/')}
        >
          Back
        </button>
      </div>
    </Layout>
  );
};
