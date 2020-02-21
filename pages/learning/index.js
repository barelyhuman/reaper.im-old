import Layout from "../../components/Layout"
import Router from 'next/router';

export default ()=>{
  return <Layout>

  <div class="container">

    <div class="min-width-150-px card-border">
      <ul>
        <li>
          Rust
        </li>
        <li>
          Go
        </li>
      </ul>
    </div>

    <button class="button margin-top-sm align-start back-button" onClick={()=>Router.back()}>
      Back
    </button>

  </div>

</Layout>
}