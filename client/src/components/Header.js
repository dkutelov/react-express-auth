import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { history } from './App.js'

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Still deciding'
			case false:
				return (
					<div>
						<li>
							<a href="auth/google">Login with Google</a>
						</li>
						<li>
							<a href="auth/facebook">Login with Facebook</a>
						</li>
					</div>
				)
			default:
				return (
					<li
						onClick={() => {
							this.props.logoutUser()
							history.push('/')
						}}>
						Logout
					</li>
				)
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">Emaily</a>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, actions)(Header)
