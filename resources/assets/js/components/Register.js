import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			nameError: 'Please input correct Name',
			email: '',
			emailError: 'Please input correct Email',
			password: '',
			repassword: '',
			passwordError: 'Please input password',
			accept: false,
			acceptError: 'Please accept'
		};
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleRepassword = this.handleRepassword.bind(this);
		this.handleAccept = this.handleAccept.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleName(e) {
		var name = e.target.value;
		var nameError = '';
		if (name.search(/^\w+((-\w+)|(\.\w+))*/) == -1) {
			nameError = 'Please input correct Name';
		} else {
			nameError = '';
		}
		this.setState({
			name: name,
			nameError: nameError
		});
	}

	handleEmail(e) {
		var email = e.target.value;
		var emailError = '';
		if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) {
			emailError = 'Please input correct Email';
		} else {
			emailError = '';
		}
		this.setState({
			email: email,
			emailError: emailError
		});
	}

	handlePassword(e) {
		var password = e.target.value;
		var passwordError = '';
		if (this.state.repassword != password) {
			passwordError = 'The password did not match the re-typed password';
		}
		this.setState({
			password: password,
			passwordError: passwordError
		});
	}

	handleRepassword(e) {
		var repassword = e.target.value;
		var passwordError = '';
		if (this.state.password != repassword) {
			passwordError = 'The password did not match the re-typed password';
		}
		this.setState({
			repassword: repassword,
			passwordError: passwordError
		});
	}

	handleAccept(e) {
		var accept = (e.target.value == 'false');
		var acceptError = '';
		if (!accept) {
			acceptError = 'Please accept';
		} else {
			acceptError = '';
		}
		this.setState({
			accept: accept,
			acceptError: acceptError
		});
	}

	handleSubmit(e) {
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

	render() {
		return (
			<div className="content background">
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<h1>Become A Part Time Private Tutor Now</h1>
							<p>Do you want to become a private language tutor in your city and be paid to discuss with people in your native language? No qualifications nor certifications are needed as long as you are a native speaker in the language you feel confident to share and teach!</p>
							<p>Please fill up this form and we will get back to you through WhatsApp within 7 working days to get you started with TUTOR:</p>
							<div className="form col-xs-8">
								<form action="/user/profile" method="post" role="form">
									<label htmlFor="name">What’s your name?</label>
									<div className="form-group">
										<input type="text" className="form-control" value={this.state.name} onChange={this.handleName} name="name" />
									</div>
									<label htmlFor="email">What’s your email?</label>
									<div className="form-group">
										<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmail} name="email" />
									</div>
									<label htmlFor="password">Password</label>
									<div className="form-group">
										<input type="password" className="form-control" value={this.state.password} onChange={this.handlePassword} name="password" />
									</div>
									<label htmlFor="repassword">Repeat password</label>
									<div className="form-group">
										<input type="password" className="form-control" value={this.state.repassword} onChange={this.handleRepassword} />
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