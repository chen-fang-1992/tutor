import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.handleEmail = () => {
			this.setState({
				email: e.target.value
			});
		}

		this.handlePassword = () => {
			this.setState({
				password: e.target.value
			});
		}

		this.handleSubmit = () => {
		}
	}

	render() {
		return (
			<div className="content other">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<form action="/user/login" method="POST" role="form">
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
