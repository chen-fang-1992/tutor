import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			nameError: '',
			number: '',
			country: '',
			language: '',
			city: '',
			location: '',
			currency: '',
			price: '',
			mornings: false,
			afternoons: false,
			evenings: false,
			weekends: false,
			availability: 0,
			about: ''
		};

		this.handleFirstName = (e) => {
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

		this.handleLastName = (e) => {
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

		this.handleNumber = (e) => {
			this.setState({number: e.target.value});
		}

		this.handleCountry = (e) => {
			this.setState({country: e.target.value});
		}

		this.handleLanguage = (e) => {
			this.setState({language: e.target.value});
			e.preventDefault();
		}

		this.handleCity = (e) => {
			this.setState({city: e.target.value});
		}

		this.handleLocation = (e) => {
			this.setState({location: e.target.value});
		}

		this.handleCurrency = (e) => {
			this.setState({currency: e.target.value});
		}

		this.handlePrice = (e) => {
			this.setState({price: e.target.value});
		}

		this.handleAbout = (e) => {
			this.setState({about: e.target.value});
		}

		this.handleMornings = (e) => {
			var mornings = (e.target.value == 'false');
			this.setState({mornings: mornings});
		}

		this.handleAfternoons = (e) => {
			var afternoons = (e.target.value == 'false');
			this.setState({afternoons: afternoons});
		}

		this.handleEvenings = (e) => {
			var evenings = (e.target.value == 'false');
			this.setState({evenings: evenings});
		}

		this.handleWeekends = (e) => {
			var weekends = (e.target.value == 'false');
			this.setState({weekends: weekends});
		}

		this.handleSubmit = (e) => {
			if (this.state.nameError) {
				alert(this.state.nameError);
				e.preventDefault();
			}

			var availability = 0;
			if (this.state.mornings)
				availability += 1;
			if (this.state.afternoons)
				availability += 10;
			if (this.state.evenings)
				availability += 100;
			if (this.state.weekends)
				availability += 1000;
			this.setState({availability: availability});
		}
	}

	componentDidMount () {
		axios.get("/user/profile/detail").then(response => {
			this.setState({
				firstName: response.data.firstname ? response.data.firstname : '',
				lastName: response.data.lastname ? response.data.lastname : '',
				number: response.data.number ? response.data.number : '',
				country: response.data.country ? response.data.country : '',
				language: response.data.language ? response.data.language : 'English',
				city: response.data.city ? response.data.city : '',
				location: response.data.location ? response.data.location : '',
				currency: response.data.currency ? response.data.currency : '',
				price: response.data.price ? response.data.price : '',
				mornings: response.data.availability ? response.data.availability % 10 == 1 : false,
				afternoons: response.data.availability ? response.data.availability  % 100 >= 10 : false,
				evenings: response.data.availability ? response.data.availability % 1000 >= 100 : false,
				weekends: response.data.availability ? response.data.availability % 10000 >= 1000 : false,
				about: response.data.about ? response.data.about : ''
			});
		});
	}

	render() {
		return (
			<div className="content other">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Create Your Tutor Profile</h1>
							<form action="/user/profile" method="POST" role="form">
								<h1><i className="fa fa-user-circle" aria-hidden="true"></i> Personal Info</h1>
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
								<h1><i className="fa fa-map" aria-hidden="true"></i> Location And Rate</h1>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="language">Which language can you teach?</label>
										<div className="dropdown">
											<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
												<span className="placeholder" name="language">{this.state.language}</span>
												<i className="fa fa-angle-down" aria-hidden="true"></i>
											</button>
											<ul className="dropdown-menu" role="menu">
												<li value="0"><button className="btn btn-link" onClick={this.handleLanguage} value="English">English</button></li>
												<li value="1"><button className="btn btn-link" onClick={this.handleLanguage} value="Chinese">Chinese</button></li>
												<li value="2"><button className="btn btn-link" onClick={this.handleLanguage} value="French">French</button></li>
												<li value="3"><button className="btn btn-link" onClick={this.handleLanguage} value="Germany">Germany</button></li>
											</ul>
										</div>
									</div>
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
										<label htmlFor="price">Per hour Tutoring rates</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.price} onChange={this.handlePrice} name="price" />
										</div>
									</div>
								</div>
								<h1><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Availability</h1>
								<div className="row">
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.mornings} onChange={this.handleMornings} value={this.state.mornings} /><span> Mornings</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.afternoons} onChange={this.handleAfternoons} value={this.state.afternoons} /><span> Afternoons</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.evenings} onChange={this.handleEvenings} value={this.state.evenings} /><span> Evenings</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.weekends} onChange={this.handleWeekends} value={this.state.weekends} /><span> Weekends</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="hidden" className="form-control" value={this.state.availability} name="availability" />
											<input type="hidden" className="form-control" value={this.state.language} name="language" />
										</div>
									</div>
								</div>
								<h1><i className="fa fa-info-circle" aria-hidden="true"></i> About Me</h1>
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
