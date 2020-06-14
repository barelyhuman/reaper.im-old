import Layout from '../../components/Layout';
import Router from 'next/router'

function Work(){
  return <Layout>
  <div className="container">
    <ul className="card-border min-width-150-px">
    <li>
        <a target="_blank" href="https://github.com/barelyhuman/route/">
          Route - File Tree based API Routes for NodeJs
        </a>
      </li>
    <li>
        <a target="_blank" href="https://tillwhen.barelyhuman.dev/">
          TillWhen - Just a time tracker
        </a>
      </li>

    <li>
        <a target="_blank" href="https://mnmlcss.js.org/">
          Mnml.css - Minimal CSS Resets
        </a>
      </li>
      <li>
        <a target="_blank" href="https://monotes.barelyhuman.dev/home">
          Monotes - Markdown Editor
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
        <a target="_blank" href="https://orion.barelyhuman.dev">
          Orion - Music Player UI
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
        <a target="_blank" href="https://github.com/barelyhuman/sautocomplete-angularjs">
          sAutoComplete - AngularJS1.6 Directive for Autocomplete
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/barelyhuman/archlinux.sh">
          archlinux.sh - Script for setup for archlinux
        </a>
      </li>
    </ul>

    <button className="margin-top-sm  align-start button back-button" onClick={()=>Router.back()}>
      Back
    </button>
  </div>
  </Layout>
}


export default Work;
