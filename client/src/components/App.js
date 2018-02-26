import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import * as actions from '../actions'
import Header from './Header'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
export const history = createHistory()

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>New Survey</h2>
const Landing = () => (
	<div className="row">
		<RegisterForm />
		<LoginForm />
	</div>
)

class App extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}
	render() {
		return (
			<div className="container">
				<Router history={history}>
					<div>
						<Header />
						<Route path="/" component={Landing} exact />
						<Route path="/surveys" component={Dashboard} exact />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</Router>
			</div>
		)
	}
}

export default connect(null, actions)(App)
