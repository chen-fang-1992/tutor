import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class HomeSearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			language: 'English',
			availability: 'When?',
			location: '',
			filter: 'Price',
			redirect: false
		}

		this.handleLanguageClick = (e) => {
			e.preventDefault()
			this.setState({ language: e.target.value })
		}

		this.handleAvailabilityClick = (e) => {
			e.preventDefault()
			var availability = this.state.availability

			if (e.target.value === 'Mornings') {
				if (availability.indexOf('M') === 0) {
					availability = availability.replace('M', '')
					availability = availability.replace(' ','')
				} else {
					if (availability === 'When?') {
						availability = 'M'
					} else {
						availability = 'M ' + availability
					}
				}
			}

			if (e.target.value === 'Afternoons') {
				if (availability.indexOf('A') > -1) {
					availability = availability.replace('A', '')
					availability = availability.replace(' ','')
				} else {
					if (availability === 'When?') {
						availability = 'A'
					} else {
						if (availability.indexOf('M') === 0) {
							if (availability.length > 1) {
								availability = availability.replace(' ', ' A ')
							} else {
								availability += ' A'
							}
						} else {
							availability = 'A ' + availability
						}
					}
				}
			}

			if (e.target.value === 'Evenings') {
				if (availability.indexOf('E') > -1) {
					if (availability.indexOf('E') === 0) {
						availability = availability.replace('E', '')
						availability = availability.replace(' ', '')
					} else {
						availability = availability.replace(' E', '')
					}
				} else {
					if (availability === 'When?') {
						availability = 'E'
					} else {
						if ((availability.indexOf('M') === 0 || availability.indexOf('A') === 0)) {
							if (availability.length > 1) {
								if (availability.indexOf('A') !== 2) {
									availability = availability.replace(' ', ' E ')
								} else {
									if (availability === 'M A W') {
										availability = 'M A E W'
									} else {
										availability += ' E'
									}
								}
							} else {
								availability += ' E'
							}
						} else {
							availability = 'E ' + availability
						}
					}
				}
			}

			if (e.target.value === 'Weekends') {
				if (availability.indexOf('W') > -1 && availability.indexOf('e') === -1) {
					if (availability.indexOf('W') === 0) {
						availability = availability.replace('W', '')
					} else {
						availability = availability.replace(' W', '')
					}
				} else {
					if (availability === 'When?') {
						availability = 'W'
					} else {
						availability += ' W'
					}
				}
			}

			if (availability.length === 0)
				availability = 'When?'

			this.setState({ availability: availability })
		}

		this.handleLocationChange = (e) => {
			this.setState({ location: e.target.value })
		}

		this.handleFilterClick = (e) => {
			e.preventDefault()
			this.setState({ filter: e.target.value })
		}

		this.handleSubmitClick = (e) => {
			e.preventDefault()
			this.setState({ redirect: true })
		}
	}

	render() {
		let { redirect } = this.state

		if (redirect === true)
			return (<Redirect to={{
				pathname: '/tutor',
				state: {
					language: this.state.language,
					availability: this.state.availability,
					location: this.state.location,
					filter: this.state.filter
				}
			}} />)

		return (
			<div className="container search-bar">
				<div className="row">
					<h1>Find A Native Language Tutor Near You</h1>
					<div className="col-xs-10 col-xs-offset-1">
						<form role="form">
							<div className="col-xs-2 language">
								<div className="dropdown">
									<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
										<span className="placeholder" name="language">{this.state.language}</span>
										<i className="fa fa-angle-down" aria-hidden="true"></i>
									</button>
									<ul className="dropdown-menu" role="menu">
										<li value="0"><button className="btn btn-link" onClick={this.handleLanguageClick} value="English">English</button></li>
										<li value="1"><button className="btn btn-link" onClick={this.handleLanguageClick} value="Chinese">Chinese</button></li>
										<li value="2"><button className="btn btn-link" onClick={this.handleLanguageClick} value="French">French</button></li>
										<li value="3"><button className="btn btn-link" onClick={this.handleLanguageClick} value="Germany">Germany</button></li>
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
										<li value="0"><button className="btn btn-link" onClick={this.handleAvailabilityClick} value="Mornings">Mornings</button></li>
										<li value="1"><button className="btn btn-link" onClick={this.handleAvailabilityClick} value="Afternoons">Afternoons</button></li>
										<li value="2"><button className="btn btn-link" onClick={this.handleAvailabilityClick} value="Evenings">Evenings</button></li>
										<li value="3"><button className="btn btn-link" onClick={this.handleAvailabilityClick} value="Weekends">Weekends</button></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-4 location">
								<div className="form-group">
									<input id="location" type="text" className="form-control" value={this.state.location} onChange={this.handleLocationChange} placeholder="Enter a location" name="location" />
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
										<li value="0"><button className="btn btn-link" onClick={this.handleFilterClick} value="Price">Price</button></li>
										<li value="1"><button className="btn btn-link" onClick={this.handleFilterClick} value="Rating">Rating</button></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-2 search">
								<button type="submit" className="btn btn-primary" onClick={this.handleSubmitClick}><i className="fa fa-search" aria-hidden="true"></i> Search</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default HomeSearchBar
