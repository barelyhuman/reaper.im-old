import Layout from '../../components/Layout';
import Router from "next/router"

export default ()=>{

	return <Layout>
		<div className="container">
			<div className="min-width-150-px card-border padding-25-px max-width-500-px line-height-20-px">
				<p>
					You can drop an email at : <span className="accent">ahoy@barelyhuman.dev</span> to discuss any kind of
					projects or just have
					a casual conversation.
					<br />
				</p>

			</div>
			<button className="button margin-top-sm align-start back-button" onClick={()=>Router.back()}>
				Back
			</button>
		</div>
	</Layout>
}
