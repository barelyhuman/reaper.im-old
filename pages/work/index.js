import Padding from 'components/padding';
import Router from 'next/router';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';

function Work() {
  return (
    <Layout title="Work">
      <div className="container">
        <Spacer y={4} />
        <ul className="card-border min-width-150-px">
          <li className="text-center">
            <span className="dot success inline" />{' '}
            <strong>Active Development</strong>
            <Spacer x={2} inline />
            <span className="dot warn inline" /> <strong>Maintenance</strong>
          </li>
          <Spacer y={2} />
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/barelyhuman/rlayouts"
            >
              <span className="dot success inline" />
              <Spacer x={1} inline />
              rLayouts - Layout Helper Components for React
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/barelyhuman/commitlog"
            >
              <span className="dot success inline" />
              <Spacer x={1} inline />
              Commitlog - Generate Changelogs from Commits
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/barelyhuman/spotify-lite-go/releases"
            >
              <span className="dot success inline" />
              <Spacer x={1} inline />
              Spotify Lite Go - Spotify Desktop Remote App written in Go Lang
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/barelyhuman/background-timer"
            >
              Background Timer - React Hook for background timers (OTP,etc)
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://mark.reaper.im"
            >
              <span className="dot warn inline" />
              <Spacer x={1} inline />
              Mark - Markdown Editor
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://colors.reaper.im"
            >
              <span className="dot warn inline" />
              <Spacer x={1} inline />
              Colors - Random Color Generator
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://pending.reaper.im"
            >
              Pending - Kanban Board
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://snips.reaper.im/"
            >
              <span className="dot warn inline" />
              <Spacer x={1} inline />
              Snips - React Component Snippets
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://hen.reaper.im"
            >
              Hen - UI Component Playground
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/barelyhuman/ftrouter/"
            >
              ftrouter - File Tree based API Routes for NodeJs
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://mailer.reaper.im"
            >
              <span className="dot warn inline" />
              <Spacer x={1} inline />
              Mailer - Nodemailer as a service
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://tillwhen.barelyhuman.dev/"
            >
              <span className="dot success inline" />
              <Spacer x={1} inline />
              TillWhen - Project based Time tracker
            </a>
          </li>

          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://mnmlcss.js.org/"
            >
              Mnml.css - Minimal CSS Resets
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://hireme.barelyhuman.dev/"
            >
              HireMe - Job Network
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://corona.siddharthgelera.com"
            >
              Covid - 19 Tracker
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://music.reaper.im"
            >
              <span className="dot warn inline" />
              <Spacer x={1} inline />
              Music - Minimal Music Player
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://washed.siddharthgelera.com"
            >
              Washed - Microservice for a filter
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://rmnd-r.siddharthgelera.com"
            >
              rmnd-r - Minimal Tasks List
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/barelyhuman/aForEach"
            >
              aForEach - Asynchronous ForEach Util for JS
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/barelyhuman/sautocomplete-angularjs"
            >
              sAutoComplete - AngularJS1.6 Directive for Autocomplete
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/barelyhuman/archlinux.sh"
            >
              archlinux.sh - Script for setup for archlinux
            </a>
          </li>
        </ul>
        <Spacer y={1} />
        <button
          className="margin-top-sm  align-start button black outline-btn"
          onClick={() => Router.push('/')}
        >
          Back
        </button>
        <Spacer y={2} />
      </div>
    </Layout>
  );
}

export default Work;
