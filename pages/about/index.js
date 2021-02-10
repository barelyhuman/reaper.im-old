import Router from 'next/router';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';

export default () => {
  const dateDiff = Math.abs(new Date(new Date(2017, 8, 1)) - new Date());
  const dateInDays = dateDiff / (1000 * 60 * 60 * 24);
  const yearDiffNow = (dateInDays / 365).toFixed(1);

  return (
    <Layout title="About">
      <div className="container">
        <div className="min-width-150-px card-border padding-25-px max-width-500-px line-height-20-px">
          <strong>Shorter Version</strong>
          <p>
            Introvert with a god complex who is also a Full-Stack Developer /
            Principal Engineer. A less wittier version of Dr. Greg House (House
            MD) basically (One line description)
          </p>
          <Spacer y={2}></Spacer>
          <strong>Added context</strong>
          <p>
            A self taught developer that went from frontend to fullstack and
            tech architect in a span of 1 year and then just kept trying to
            improve. He started somewhere around Sept 2017. About {yearDiffNow}{' '}
            years now.
            <Spacer y={2}></Spacer>
            The alter ego is <a href="https://barelyhuman.dev">BarelyHuman</a>,
            and takes care of building tools and other libraries to simplify
            work across projects
            <Spacer y={2}></Spacer>
            If you wish to consult or talk to about anything, feel free to hit me up.
            <Spacer y={2}></Spacer>
            <a href="/contact">Wish to contact?</a>
          </p>
        </div>
        <Spacer y={1} />
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
