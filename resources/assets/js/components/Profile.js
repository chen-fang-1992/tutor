import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			nameError: '',
			number: '',
			country: '',
			city: '',
			location: '',
			currency: '',
			rate: '',
			about: ''
		};
		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleCountry = this.handleCountry.bind(this);
		this.handleCity = this.handleCity.bind(this);
		this.handleLocation = this.handleLocation.bind(this);
		this.handleCurrency = this.handleCurrency.bind(this);
		this.handleRate = this.handleRate.bind(this);
		this.handleAbout = this.handleAbout.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFirstName(e) {
		var firstName = e.target.value;
		var fullName = firstName + ' ' + this.state.lastName;
		var nameError = '';
		if (fullName.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) == -1) {
			nameError = 'Please input correct name';
		} else {
			nameError = '';
		}
		this.setState({
			firstName: firstName,
			nameError: nameError
		});
	}

	handleLastName(e) {
		var lastName = e.target.value;
		var fullName = this.state.firstName + ' ' + lastName;
		var nameError = '';
		if (fullName.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) == -1) {
			nameError = 'Please input correct Email';
		} else {
			nameError = '';
		}
		this.setState({
			lastName: lastName,
			nameError: nameError
		});
	}

	handleNumber(e) {
		this.setState({
			number: e.target.value
		});
	}

	handleCountry(e) {
		this.setState({
			country: e.target.value
		});
	}

	handleCity(e) {
		this.setState({
			city: e.target.value
		});
	}

	handleLocation(e) {
		this.setState({
			location: e.target.value
		});
	}

	handleCurrency(e) {
		this.setState({
			currency: e.target.value
		});
	}

	handleRate(e) {
		this.setState({
			rate: e.target.value
		});
	}

	handleAbout(e) {
		this.setState({
			about: e.target.value
		});
	}

	handleSubmit(e) {
		if (this.state.nameError) {
			alert(this.state.nameError);
			e.preventDefault();
		}
	}

	render() {
		return (
			<div className="content background">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Create Your Tutor Profile</h1>
							<form action="/user/profile" method="post" role="form">
								<h1>Personal Info</h1>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="firstName">First Name</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.firstName} onChange={this.handleFirstName} name="firstname" />
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="lastName">Last Name</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.lastName} onChange={this.handleLastName} name="lastname" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="number">Whatsapp Number including country code and + sign</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.number} onChange={this.handleNumber} name="number" />
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="country">Country of origin</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.country} onChange={this.handleCountry} name="country" />
										</div>
									</div>
								</div>
								<h1>Location And Rate</h1>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="city">In which city can you teach?</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.city} onChange={this.handleCity} name="city" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label htmlFor="location">Choose where exactly you want to be shown on the TUTOR Map:</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.location} onChange={this.handleLocation} name="location" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="currency">Currency</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.currency} onChange={this.handleCurrency} name="currency" />
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="rate">Per hour Tutoring rates</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.rate} onChange={this.handleRate} name="rate" />
										</div>
									</div>
								</div>
								<h1>About Me</h1>
								<div className="row">
									<div className="col-xs-12">
										<div className="form-group">
											<textarea className="form-control" value={this.state.about} onChange={this.handleAbout} name="about" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<div className="form-group">
											<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>SUBMIT YOUR PROFILE NOW</button>
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

if (document.getElementById('profile')) {
	ReactDOM.render(<Profile />, document.getElementById('profile'));
}