import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTutors } from '../actions/search'
import SearchItem from './search/SearchItem'
import SearchModal from './search/SearchModal'

class Search extends Component {
	constructor(props) {
		super(props)

		let info = this.props.info

		this.state = {
			language: info.language,
			availability: info.availability,
			location: info.location,
			filter: info.filter
		}

		this.handleLanguageClick = (e) => {
			e.preventDefault()
			this.setState({ language: e.target.value }, () => this.props.getTutors(this.state))
		}

		this.handleAvailabilityClick = (e) => {
			e.preventDefault()
			let availability = this.state.availability

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

			this.setState({ availability: availability }, () => this.props.getTutors(this.state))
		}

		this.handleLocationChange = (e) => {
			this.setState({ location: e.target.value })
		}

		this.handleFilterClick = (e) => {
			e.preventDefault()
			this.setState({ filter: e.target.value }, () => this.props.getTutors(this.state))
		}

		this.handleSubmitClick = (e) => {
			e.preventDefault()
			this.props.getTutors(this.state)
		}
	}

	get tutors() {
		let output = []

		for (let i = 0; i < this.props.tutors.length; i = i + 2) {
			if (this.props.tutors.length - i >= 2) {
				output.push(
					<div key={i}>
						<div className="row">
							<div className="col-xs-5 col-xs-offset-1">
								<SearchItem tutor={this.props.tutors[i]} />
								<SearchModal tutor={this.props.tutors[i]} />
							</div>
							<div className="col-xs-5">
								<SearchItem tutor={this.props.tutors[i+1]} />
								<SearchModal tutor={this.props.tutors[i+1]} />
							</div>
						</div>
					</div>
				)
			} else {
				output.push(
					<div key={i}>
						<div className="row">
							<div className="col-xs-5 col-xs-offset-1">
								<SearchItem tutor={this.props.tutors[i]} />
								<SearchModal tutor={this.props.tutors[i]} />
							</div>
						</div>
					</div>
				)
			}
		}

		if (this.props.tutors.length)
			return output
		else
			return (
				<div className="empty"><h1>There is no tutor match your request</h1></div>
			)
	}

	render() {
		return (
			<div className="content tutor">
				<div className="container search-bar">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<form role="form">
								<div className="col-xs-2 language">
									<div className="dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
											<span className="placeholder" name="language">{this.props.info.language}</span>
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
											<span className="placeholder" name="availability">{this.props.info.availability}</span>
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
											<span className="placeholder" name="filter">{this.props.info.filter}</span>
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
				<div className="container result">
					<div className="row">
						<div className="col-xs-12">
							{this.tutors}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	info: PropTypes.shape({
		language: PropTypes.string.isRequired,
		availability: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		filter: PropTypes.string.isRequired
	}).isRequired,
	tutors: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.shape({
			picture: PropTypes.string,
			firstname: PropTypes.string,
			lastname: PropTypes.string,
			number: PropTypes.string,
			country: PropTypes.string,
			language: PropTypes.string,
			city: PropTypes.string,
			location: PropTypes.string,
			currency: PropTypes.string,
			price: PropTypes.number,
			availability: PropTypes.number,
			about: PropTypes.string
		}))
	]),
	getTutors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		info: state.search.info,
		tutors: state.search.tutors
	 }
}

const mapDispatchToProps = (dispatch) => {
	return { getTutors: bindActionCreators(getTutors, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)
