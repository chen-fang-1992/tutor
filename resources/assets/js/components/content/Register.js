import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			nameError: 'Please input correct name',
			email: '',
			emailError: 'Please input correct email',
			password: '',
			confirmPassword: '',
			passwordError: 'Please input password',
			accept: false,
			acceptError: 'Please accept'
		};

		this.handleName = (e) => {
			var name = e.target.value;
			var nameError = '';

			if (name.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) == -1) {
				nameError = 'Please input correct name';
			}

			this.setState({
				name: name,
				nameError: nameError
			});
		}

		this.handleEmail = (e) => {
			var email = e.target.value;
			var emailError = '';

			if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) {
				emailError = 'Please input correct email';
			}

			this.setState({
				email: email,
				emailError: emailError
			});
		}

		this.handlePassword = (e) => {
			var password = e.target.value;
			var passwordError = '';

			if (password.length < 6) {
				passwordError = 'The password has to be six letter at least';
			} else if (this.state.confirmPassword != password) {
				passwordError = 'The password does not match the re-typed password';
			}

			this.setState({
				password: password,
				passwordError: passwordError
			});
		}

		this.handleConfirmPassword = (e) => {
			var confirmPassword = e.target.value;
			var passwordError = '';

			if (confirmPassword.length < 6) {
				passwordError = 'The password has to be six letter at least';
			} else if (this.state.password != confirmPassword) {
				passwordError = 'The password does not match the re-typed password';
			}

			this.setState({
				confirmPassword: confirmPassword,
				passwordError: passwordError
			});
		}

		this.handleAccept = (e) => {
			var accept = (e.target.value == 'false');
			var acceptError = '';

			if (!accept) {
				acceptError = 'Please accept';
			}

			this.setState({
				accept: accept,
				acceptError: acceptError
			});
		}

		this.handleSubmit = (e) => {
			if (this.state.nameError) {
				alert(this.state.nameError);
				e.preventDefault();
			} else if (this.state.emailError) {
				alert(this.state.emailError);
				e.preventDefault();
			} else if (this.state.passwordError) {
				alert(this.state.passwordError);
				e.preventDefault();
			} else if (!this.state.accept) {
				alert(this.state.acceptError);
				e.preventDefault();
			}
		}
	}

	render() {
		return (
			<div className="content user">
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<h1>Become A Part Time Private Tutor Now</h1>
							<p>Do you want to become a private language tutor in your city and be paid to discuss with people in your native language? No qualifications nor certifications are needed as long as you are a native speaker in the language you feel confident to share and teach!</p>
							<p>Please fill up this form and we will get back to you through WhatsApp within 7 working days to get you started with TUTOR:</p>
							<div className="col-xs-8">
								<form action="/user/register" method="POST" role="form" novalidate>
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
										<input type="password" className="form-control" value={this.state.confirmPassword} onChange={this.handleConfirmPassword} name="password_confirmation" required/>
									</div>
									<div className="form-group">
										<input type="checkbox" checked={this.state.accept} onChange={this.handleAccept} value={this.state.accept} /><span> I accept the Terms and Conditions</span>
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>SUBMIT YOUR PROFILE NOW</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('register')) {
	ReactDOM.render(<Register />, document.getElementById('register'));
}
