import Layout from '../../components/Layout';
import Router from 'next/router'

function Work(){
  return <Layout>
  <div class="container">


    <ul class="card-border min-width-150-px">
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
      <li>
        <a target="_blank" href="https://github.com/barelyhuman/mnml-css">
          Mnml-CSS - Minimal CSS Boilerplate
        </a>
      </li>
    </ul>

    <button class="margin-top-sm  align-start button back-button" onClick={()=>Router.back()}>
      Back
    </button>
  </div>
  </Layout>
}


export default Work;