import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';

export default () => {
  return (
    <Layout title="Learning">
      <div className="container">
        <div className="min-width-150-px card-border">
          <ul>
            <li>Rust</li>
            <li>C / Portable C - Refreshing Skills</li>
            <li>Kernel Design</li>
            <li>Compiler and Text Editor Tokenization and AST Parsing</li>
          </ul>
        </div>
        <Spacer y={1} />
        <Link href="/collections">
          <a
            className="margin-top-sm align-start button black outline-btn"
            href="/collections"
          >
            Back
          </a>
        </Link>
      </div>
    </Layout>
  );
};
