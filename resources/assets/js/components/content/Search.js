import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchItem from './search/SearchItem';
import SearchModal from './search/SearchModal';

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			language: 'English',
			availability: 'When?',
			location: '',
			filter: 'Price',
			tutors: JSON.parse(this.props.tutors),

			mornings: '',
			afternoons: '',
			evenings: '',
			weekends: ''
		};

		this.handleLanguage = (e) => {
			e.preventDefault();
			this.setState({language: e.target.value});

			axios.get('/tutor/detail', {
				params: {
					language: e.target.value,
					availability: this.state.availability,
					location: this.state.location,
					filter: this.state.filter
				}
			}).then(response => {
				this.setState({
					tutors: response.data
				});
			});
		}

		this.handleAvailability = (e) => {
			e.preventDefault();
			var availability = this.state.availability;

			if (e.target.value == 'Mornings') {
				if (availability.indexOf('M') == 0) {
					availability = availability.replace('M', '');
					availability = availability.replace(' ','');
				} else {
					if (availability == 'When?') {
						availability = 'M';
					} else {
						availability = 'M ' + availability;
					}
				}
			}

			if (e.target.value == 'Afternoons') {
				if (availability.indexOf('A') > -1) {
					availability = availability.replace('A', '');
					availability = availability.replace(' ','');
				} else {
					if (availability == 'When?') {
						availability = 'A';
					} else {
						if (availability.indexOf('M') == 0) {
							if (availability.length > 1) {
								availability = availability.replace(' ', ' A ');
							} else {
								availability += ' A';
							}
						} else {
							availability = 'A ' + availability;
						}
					}
				}
			}

			if (e.target.value == 'Evenings') {
				if (availability.indexOf('E') > -1) {
					if (availability.indexOf('E') == 0) {
						availability = availability.replace('E', '');
						availability = availability.replace(' ', '');
					} else {
						availability = availability.replace(' E', '');
					}
				} else {
					if (availability == 'When?') {
						availability = 'E';
					} else {
						if ((availability.indexOf('M') == 0 || availability.indexOf('A') == 0)) {
							if (availability.length > 1) {
								if (availability.indexOf('A') != 2) {
									availability = availability.replace(' ', ' E ');
								} else {
									if (availability == 'M A W') {
										availability = 'M A E W';
									} else {
										availability += ' E';
									}
								}
							} else {
								availability += ' E';
							}
						} else {
							availability = 'E ' + availability;
						}
					}
				}
			}

			if (e.target.value == 'Weekends') {
				if (availability.indexOf('W') > -1 && availability.indexOf('e') == -1) {
					if (availability.indexOf('W') == 0) {
						availability = availability.replace('W', '');
					} else {
						availability = availability.replace(' W', '');
					}
				} else {
					if (availability == 'When?') {
						availability = 'W';
					} else {
						availability += ' W';
					}
				}
			}

			if (availability.length == 0)
				availability = 'When?';

			this.setState({availability: availability});

			axios.get('/tutor/detail', {
				params: {
					language: this.state.language,
					availability: availability,
					location: this.state.location,
					filter: this.state.filter
				}
			}).then(response => {
				this.setState({
					tutors: response.data
				});
			});
		}

		this.handleLocation = (e) => {
			this.setState({location: e.target.value});
		}

		this.handleFilter = (e) => {
			e.preventDefault();
			this.setState({filter: e.target.value});

			axios.get('/tutor/detail', {
				params: {
					language: this.state.language,
					availability: this.state.availability,
					location: this.state.location,
					filter: e.target.value
				}
			}).then(response => {
				this.setState({
					tutors: response.data
				});
			});
		}

		this.handleSubmit = (e) => {
		}
	}

	get tutors() {
		var output = [];

		for (var i = 0; i < this.state.tutors.length; i = i + 2) {
			if (this.state.tutors.length - i >= 2) {
				output.push(
					<div key={i}>
						<div className="row">
							<div className="col-xs-5 col-xs-offset-1">
								<SearchItem tutor={this.state.tutors[i]} />
								<SearchModal tutor={this.state.tutors[i]} />
							</div>
							<div className="col-xs-5">
								<SearchItem tutor={this.state.tutors[i+1]} />
								<SearchModal tutor={this.state.tutors[i+1]} />
							</div>
						</div>
					</div>
				);
			} else {
				output.push(
					<div key={i}>
						<div className="row">
							<div className="col-xs-5 col-xs-offset-1">
								<SearchItem tutor={this.state.tutors[i]} />
								<SearchModal tutor={this.state.tutors[i]} />
							</div>
						</div>
					</div>
				);
			}
		}

		return output;
	}

	render() {
		return (
			<div className="content tutor">
				<div className="container search-bar">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<form action="/tutor" method="GET" role="form">
								<div className="col-xs-2 language">
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
								<div className="col-xs-2 availability">
									<div className="dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
											<span className="placeholder" name="availability">{this.state.availability}</span>
											<i className="fa fa-angle-down" aria-hidden="true"></i>
										</button>
										<ul className="dropdown-menu" role="menu">
											<li value="0"><button className="btn btn-link" onClick={this.handleAvailability} value="Mornings">Mornings</button></li>
											<li value="1"><button className="btn btn-link" onClick={this.handleAvailability} value="Afternoons">Afternoons</button></li>
											<li value="2"><button className="btn btn-link" onClick={this.handleAvailability} value="Evenings">Evenings</button></li>
											<li value="3"><button className="btn btn-link" onClick={this.handleAvailability} value="Weekends">Weekends</button></li>
										</ul>
									</div>
								</div>
								<div className="col-xs-4 location">
										<div className="form-group">
											<input id="location" type="text" className="form-control" value={this.state.location} onChange={this.handleLocation} placeholder="Enter a location" name="location" />
											<i className="fa fa-map-pin" aria-hidden="true"></i>
										</div>
								</div>
								<div className="col-xs-2 filter">
									<div className="dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
											<span className="placeholder" name="filter">{this.state.filter}</span>
											<i className="fa fa-angle-down" aria-hidden="true"></i>
										</button>
										<ul className="dropdown-menu" role="menu">
											<li value="0"><button className="btn btn-link" onClick={this.handleFilter} value="Price">Price</button></li>
											<li value="1"><button className="btn btn-link" onClick={this.handleFilter} value="Rating">Rating</button></li>
										</ul>
									</div>
								</div>
								<div className="col-xs-2 search">
									<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}><i className="fa fa-search" aria-hidden="true"></i> Search</button>
									<input type="hidden" className="form-control" value={this.state.language} name="language" />
									<input type="hidden" className="form-control" value={this.state.availability} name="availability" />
									<input type="hidden" className="form-control" value={this.state.filter} name="filter" />
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="container result">
					<div className="row">
						<div className="col-xs-12">
							{this.tutors}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('search')) {
	ReactDOM.render(<Search />, document.getElementById('search'));
}
