import React, { Component } from 'react'

// Register via action creator - ajax post request - update state

class RegisterFrom extends Component {
	render() {
		return (
			<div className="col s6">
				<h2>Register</h2>
				<form method="post" action="/register">
					<div className="col s12">
						<label htmlFor="name">Name</label>
						<input
							className="validate"
							id="name"
							type="text"
							name="name"
							placeholder="Name"
						/>
					</div>
					<div className="col s12">
						<label htmlFor="username">Username</label>
						<input
							className="validate"
							id="username"
							type="text"
							name="username"
							placeholder="Username"
						/>
					</div>
					<div className="col s12">
						<label htmlFor="email">Email</label>
						<input
							className="validate"
							id="email"
							type="email"
							name="email"
							placeholder="Email"
						/>
					</div>
					<div className="col s12">
						<label htmlFor="password">Password</label>
						<input
							className="validate"
							id="password"
							type="password"
							name="password"
							placeholder="Password"
						/>
					</div>
					<div className="col s12">
						<label htmlFor="password2">Confirm Password</label>
						<input
							className="validate"
							id="password2"
							type="password"
							name="password2"
							placeholder="Confirm"
						/>
					</div>
					<button className="btn waves-effect waves-light" type="submit">
						Register
					</button>
				</form>
			</div>
		)
	}
}

export default RegisterFrom
