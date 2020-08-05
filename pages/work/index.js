import Router from 'next/router';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';

function Work() {
  return (
    <Layout>
      <div className="container">
        <ul className="card-border min-width-150-px">
          <li>
            <a target="_blank" href="https://mark.reaper.im">
              Mark - Markdown Editor
            </a>
          </li>
          <li>
            <a target="_blank" href="https://colors.reaper.im">
              Colors - Random Color Generator
            </a>
          </li>
          <li>
            <a target="_blank" href="https://pending.reaper.im">
              Pending - Kanban Board
            </a>
          </li>
          <li>
            <a target="_blank" href="http://snips.reaper.im/">
              Snips - React Component Snippets
            </a>
          </li>
          <li>
            <a target="_blank" href="https://hen.reaper.im">
              Hen - UI Component Playground
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/barelyhuman/ftrouter/">
              ftrouter - File Tree based API Routes for NodeJs
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mailer.reaper.im">
              Mailer - Nodemailer as a service
            </a>
          </li>
          <li>
            <a target="_blank" href="https://tillwhen.barelyhuman.dev/">
              TillWhen - Project based Time tracker
            </a>
          </li>

          <li>
            <a target="_blank" href="https://mnmlcss.js.org/">
              Mnml.css - Minimal CSS Resets
            </a>
          </li>
          <li>
            <a target="_blank" href="https://hireme.barelyhuman.dev/">
              HireMe - Job Network
            </a>
          </li>
          <li>
            <a target="_blank" href="https://corona.siddharthgelera.com">
              Covid - 19 Tracker
            </a>
          </li>
          <li>
            <a target="_blank" href="https://music.reaper.im">
              Music - Minimal Music Player
            </a>
          </li>
          <li>
            <a target="_blank" href="https://washed.siddharthgelera.com">
              Washed - Microservice for a filter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://rmnd-r.siddharthgelera.com">
              rmnd-r - Minimal Tasks List
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/barelyhuman/aForEach">
              aForEach - Asynchronous ForEach Util for JS
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/barelyhuman/sautocomplete-angularjs"
            >
              sAutoComplete - AngularJS1.6 Directive for Autocomplete
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/barelyhuman/archlinux.sh"
            >
              archlinux.sh - Script for setup for archlinux
            </a>
          </li>
        </ul>
        <Spacer y={1}></Spacer>
        <button
          className="margin-top-sm  align-start button black outline-btn"
          onClick={() => Router.push('/')}
        >
          Back
        </button>
        <Spacer y={2}></Spacer>
      </div>
    </Layout>
  );
}

export default Work;
