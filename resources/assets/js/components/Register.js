import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Register extends Component {
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
			acceptError: 'Please accept',
			redirect: false,
			profile: ''
		}

		this.handleName = (e) => {
			let name = e.target.value
			let nameError = ''

			if (name.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) === -1)
				nameError = 'Please input correct name'

			this.setState({
				name: name,
				nameError: nameError
			})
		}

		this.handleEmail = (e) => {
			let email = e.target.value
			let emailError = ''

			if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) === -1)
				emailError = 'Please input correct email'

			this.setState({
				email: email,
				emailError: emailError
			})
		}

		this.handlePassword = (e) => {
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

		this.handlePasswordConfirmation = (e) => {
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

		this.handleAccept = (e) => {
			let accept = (e.target.value === 'false')
			let acceptError = ''

			if (!accept)
				acceptError = 'Please accept'

			this.setState({
				accept: accept,
				acceptError: acceptError
			})
		}

		this.handleSubmit = (e) => {
			e.preventDefault()

			if (this.state.nameError)
				alert(this.state.nameError)
			else if (this.state.emailError)
				alert(this.state.emailError)
			else if (this.state.passwordError)
				alert(this.state.passwordError)
			else if (!this.state.accept)
				alert(this.state.acceptError)
			else {
				axios.post('/user/register', {
					name: this.state.name,
					email: this.state.email,
					password: this.state.password
				}).then(response => {
					console.log(response.data)
					if (response.data !== 'fail')
						this.setState({
							redirect: true,
							profile: response.data
						})
					else
						this.setState({
							name: '',
							email: '',
							password: '',
							passwordConfirmation: ''
						})
				})
			}
		}
	}

	render() {
		const { redirect, profile } = this.state

		if (redirect)
			return (<Redirect to={{
				pathname: '/user/profile',
				state: { profile: this.state.profile }
			}} />)

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
										<input id="name" type="text" className="form-control" value={this.state.name} onChange={this.handleName} name="name" required/>
									</div>
									<label htmlFor="email">What’s your email?</label>
									<div className="form-group">
										<input id="email" type="email" className="form-control" value={this.state.email} onChange={this.handleEmail} name="email" required/>
									</div>
									<label htmlFor="password">Password</label>
									<div className="form-group">
										<input id="password" type="password" className="form-control" value={this.state.password} onChange={this.handlePassword} name="password" required/>
									</div>
									<label htmlFor="confirmPassword">Confirm password</label>
									<div className="form-group">
										<input type="password" className="form-control" value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmation} name="password_confirmation" required/>
									</div>
									<div className="form-group">
										<input type="checkbox" checked={this.state.accept} onChange={this.handleAccept} value={this.state.accept} /><span> I accept the Terms and Conditions</span>
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary submit" onClick={this.handleSubmit}>SUBMIT YOUR PROFILE NOW</button>
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
