import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRegister } from '../actions/auth'
import Alert from './Alert'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			nameError: 'Please input correct name',
			email: '',
			emailError: 'Please input correct email',
			password: '',
			passwordConfirmation: '',
			passwordError: 'Please input password',
			accept: false,
			acceptError: 'Please accept'
		}

		this.handleNameChange = (e) => {
			let name = e.target.value
			let nameError = ''

			if (name.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) === -1)
				nameError = 'Please input correct name'

			this.setState({
				name: name,
				nameError: nameError
			})
		}

		this.handleEmailChange = (e) => {
			let email = e.target.value
			let emailError = ''

			if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) === -1)
				emailError = 'Please input correct email'

			this.setState({
				email: email,
				emailError: emailError
			})
		}

		this.handlePasswordChange = (e) => {
			let password = e.target.value
			let passwordError = ''

			if (password.length < 6)
				passwordError = 'The password has to be six letter at least'
			else if (this.state.passwordConfirmation !== password)
				passwordError = 'The password does not match the re-typed password'

			this.setState({
				password: password,
				passwordError: passwordError
			})
		}

		this.handlePasswordConfirmationChange = (e) => {
			let passwordConfirmation = e.target.value
			let passwordError = ''

			if (passwordConfirmation.length < 6)
				passwordError = 'The password has to be six letter at least'
			else if (this.state.password !== passwordConfirmation)
				passwordError = 'The password does not match the re-typed password'

			this.setState({
				passwordConfirmation: passwordConfirmation,
				passwordError: passwordError
			})
		}

		this.handleAcceptChange = (e) => {
			let accept = (e.target.value === 'false')
			let acceptError = ''

			if (!accept)
				acceptError = 'Please accept'

			this.setState({
				accept: accept,
				acceptError: acceptError
			})
		}

		this.handleSubmitClick = (e) => {
			e.preventDefault()

			if (this.state.nameError)
				alert(this.state.nameError)
			else if (this.state.emailError)
				alert(this.state.emailError)
			else if (this.state.passwordError)
				alert(this.state.passwordError)
			else if (!this.state.accept)
				alert(this.state.acceptError)
			else
				this.props.fetchRegister(this.state.name, this.state.email, this.state.password)
		}
	}

	render() {
		if (this.props.auth === true)
			return (<Redirect to='/user/profile' />)

		return (
			<div className="content user">
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<h1>Become A Part Time Private Tutor Now</h1>
							<p>Do you want to become a private language tutor in your city and be paid to discuss with people in your native language? No qualifications nor certifications are needed as long as you are a native speaker in the language you feel confident to share and teach!</p>
							<p>Please fill up this form and we will get back to you through WhatsApp within 7 working days to get you started with TUTOR:</p>
							<div className="col-xs-8">
								<form role="form" noValidate>
									<label htmlFor="name">What’s your name?</label>
									<div className="form-group">
										<input id="name" type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} name="name" required />
									</div>
									<label htmlFor="email">What’s your email?</label>
									<div className="form-group">
										<input id="email" type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} name="email" required />
									</div>
									<label htmlFor="password">Password</label>
									<div className="form-group">
										<input id="password" type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} name="password" required />
									</div>
									<label htmlFor="confirmPassword">Confirm password</label>
									<div className="form-group">
										<input type="password" className="form-control" value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmationChange} name="password_confirmation" required />
									</div>
									<div className="form-group input-checkbox">
										<input type="checkbox" checked={this.state.accept} onChange={this.handleAcceptChange} value={this.state.accept} /><span> I accept the Terms and Conditions</span>
									</div>
									<Alert />
									<div className="form-group">
										<button type="submit" className="btn btn-primary submit" onClick={this.handleSubmitClick}>SUBMIT YOUR PROFILE NOW</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Register.propTypes = {
	auth: PropTypes.bool.isRequired,
	fetchRegister: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { auth: state.auth.auth }
}

const mapDispatchToProps = (dispatch) => {
	return { fetchRegister: bindActionCreators(fetchRegister, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register)
