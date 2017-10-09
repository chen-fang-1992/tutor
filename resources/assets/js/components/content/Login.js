import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			emailError: 'Please fill in email',
			password: '',
			passwordError: 'Please fill in password'
		};

		this.handleEmail = (e) => {
			var email = e.target.value;
			var emailError = '';

			if (email == null) {
				emailError = 'Please fill in email';
			}

			this.setState({
				email: email,
				emailError: emailError
			});
		}

		this.handlePassword = (e) => {
			var password = e.target.value;
			var passwordError = '';

			if (password == null) {
				passwordError = 'Please fill in password';
			}

			this.setState({
				password: password,
				passwordError: passwordError
			});
		}

		this.handleSubmit = (e) => {
			if (this.state.emailError) {
				alert(this.state.emailError);
				e.preventDefault();
			} else if (this.state.passwordError) {
				alert(this.state.passwordError);
				e.preventDefault();
			}
		}
	}

	render() {
		return (
			<div className="content user">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
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
											<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Log In Your Profile</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('login')) {
	ReactDOM.render(<Login />, document.getElementById('login'));
}
