import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export default class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			emailError: 'Please fill in email',
			password: '',
			passwordError: 'Please fill in password',
			redirect: false,
			profile: ''
		}

		this.handleEmail = (e) => {
			var email = e.target.value
			var emailError = ''

			if (email === null) {
				emailError = 'Please fill in email'
			}

			this.setState({
				email: email,
				emailError: emailError
			})
		}

		this.handlePassword = (e) => {
			var password = e.target.value
			var passwordError = ''

			if (password === null) {
				passwordError = 'Please fill in password'
			}

			this.setState({
				password: password,
				passwordError: passwordError
			})
		}

		this.handleSubmit = (e) => {
			e.preventDefault()

			if (this.state.emailError) {
				alert(this.state.emailError)
			} else if (this.state.passwordError) {
				alert(this.state.passwordError)
			} else {
				axios.post('/user/login', {
					email: this.state.email,
					password: this.state.password
				}).then(response => {
					if (response.data !== 'fail') {
						console.log('success')
						this.setState({
							redirect: true
						})
					}
				})
			}
		}
	}

	render() {
		const { redirect, profile } = this.state

		if (redirect) {
			return (
				<Redirect to="/user/profile"/>
			)
		}

		return (
			<div className="content user">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Log In Your Tutor Profile</h1>
							<form action="/user/login" method="POST" role="form" noValidate>
								<div className="row">
									<div className="col-xs-12">
										<label htmlFor="email">Email</label>
										<div className="form-group">
											<input id="email" type="text" className="form-control" value={this.state.email} onChange={this.handleEmail} name="email" required/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label htmlFor="password">Password</label>
										<div className="form-group">
											<input id="password" type="password" className="form-control" value={this.state.password} onChange={this.handlePassword} name="password" required/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<div className="form-group">
											<button className="btn btn-primary submit" onClick={this.handleSubmit}>LOG IN YOUR PROFILE</button>
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
