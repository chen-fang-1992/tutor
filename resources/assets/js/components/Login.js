import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLogin } from '../actions'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			emailError: 'Please fill in email',
			password: '',
			passwordError: 'Please fill in password'
		}

		this.handleEmailChange = (e) => {
			let email = e.target.value
			let emailError = ''

			if (email === null)
				emailError = 'Please fill in email'

			this.setState({
				email: email,
				emailError: emailError
			})
		}

		this.handlePasswordChange = (e) => {
			let password = e.target.value
			let passwordError = ''

			if (password === null)
				passwordError = 'Please fill in password'

			this.setState({
				password: password,
				passwordError: passwordError
			})
		}

		this.handleSubmitClick = (e) => {
			e.preventDefault()

			if (this.state.emailError)
				alert(this.state.emailError)
			else if (this.state.passwordError)
				alert(this.state.passwordError)
			else if (this.props.auth)
				alert('You have already logged in')
			else
				this.props.fetchLogin(this.state.email, this.state.password)
		}
	}

	render() {
		if (this.props.auth === true)
			return (<Redirect to='/user/profile' />)

		return (
			<div className="content user">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Log In Your Tutor Profile</h1>
							<form role="form" noValidate>
								<div className="row">
									<div className="col-xs-12">
										<label htmlFor="email">Email</label>
										<div className="form-group">
											<input id="email" type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} name="email" required />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label htmlFor="password">Password</label>
										<div className="form-group">
											<input id="password" type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} name="password" required />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<div className="form-group">
											<button className="btn btn-primary submit" onClick={this.handleSubmitClick}>LOG IN YOUR PROFILE</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Login.propTypes = {
	auth: PropTypes.bool.isRequired,
	fetchLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { auth: state.auth.auth }
}

const mapDispatchToProps = (dispatch) => {
	return { fetchLogin: bindActionCreators(fetchLogin, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
