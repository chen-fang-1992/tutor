import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HomeSearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			language: 'English',
			day: 'When?',
			location: '',
			filter: 'Price'
		};

		this.handleLanguage = (e) => {
			this.setState({language: e.target.value});
			e.preventDefault();
		}

		this.handleDay = (e) => {
			this.setState({day: e.target.value});
			e.preventDefault();
		}

		this.handleLocation = (e) => {
			this.setState({location: e.target.value});
		}

		this.handleFilter = (e) => {
			this.setState({filter: e.target.value});
			e.preventDefault();
		}

		this.handleSubmit = (e) => {
		}
	}

	render() {
		return (
			<div className="container search-bar">
				<div className="row">
					<h1>Find A Native Language Tutor Near You</h1>
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
							<div className="col-xs-2 day">
								<div className="dropdown">
									<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
										<span className="placeholder" name="day">{this.state.day}</span>
										<i className="fa fa-angle-down" aria-hidden="true"></i>
									</button>
									<ul className="dropdown-menu" role="menu">
										<li value="0"><button className="btn btn-link" onClick={this.handleDay} value="Monday">Monday</button></li>
										<li value="1"><button className="btn btn-link" onClick={this.handleDay} value="Tuesday">Tuesday</button></li>
										<li value="2"><button className="btn btn-link" onClick={this.handleDay} value="Wednesday">Wednesday</button></li>
										<li value="3"><button className="btn btn-link" onClick={this.handleDay} value="Thursday">Thursday</button></li>
										<li value="4"><button className="btn btn-link" onClick={this.handleDay} value="Friday">Friday</button></li>
										<li value="5"><button className="btn btn-link" onClick={this.handleDay} value="Saturday">Saturday</button></li>
										<li value="6"><button className="btn btn-link" onClick={this.handleDay} value="Sunday">Sunday</button></li>
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
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('home-search-bar')) {
	ReactDOM.render(<HomeSearchBar />, document.getElementById('home-search-bar'));
}
