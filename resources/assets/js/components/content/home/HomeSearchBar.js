import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HomeSearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			language: 'English',
			availability: 'When?',
			location: '',
			filter: 'Price'
		};

		this.handleLanguage = (e) => {
			this.setState({language: e.target.value});
			e.preventDefault();
		}

		this.handleAvailability = (e) => {
			this.setState({availability: e.target.value});
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
			if (this.state.availability == 'When?')
				this.setState({availability: 'anytime'});
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
		);
	}
}

if (document.getElementById('home-search-bar')) {
	ReactDOM.render(<HomeSearchBar />, document.getElementById('home-search-bar'));
}
