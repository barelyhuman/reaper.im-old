import Layout from "../../components/Layout"
import Router from 'next/router';

export default ()=>{
  return <Layout>

  <div className="container">

    <div className="min-width-150-px card-border">
      <ul>
        <li>
          Rust
        </li>
        <li>
          Go
        </li>
      </ul>
    </div>

    <button className="button margin-top-sm align-start back-button" onClick={()=>Router.back()}>
      Back
    </button>

  </div>

</Layout>
}
