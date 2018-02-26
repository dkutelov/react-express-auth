import React, { Component } from 'react'

class LoginForm extends Component {
	render() {
		return (
			<div className="col s6">
				<h2>Login</h2>
				<form method="POST" action="/auth/email">
					<div className="col s12">
						<label htmlFor="login-username">Email:</label>
						<input type="email" id="login-username" name="email" />
					</div>
					<div className="col s12">
						<label htmlFor="login-password">Password:</label>
						<input type="text" id="login-password" name="password" />
					</div>
					<input
						className="btn waves-effect waves-light"
						type="submit"
						value="Login"
					/>
				</form>
			</div>
		)
	}
}

export default LoginForm
