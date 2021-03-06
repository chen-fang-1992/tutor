import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUpdateProfile, fetchUpdatePicture } from '../actions/auth'

class Profile extends Component {
	constructor(props) {
		super(props)

		let profile = this.props.profile

		this.state = {
			firstname: profile.firstname ? profile.firstname : '',
			lastname: profile.lastname ? profile.lastname : '',
			nameError: '',
			number: profile.number ? profile.number : '',
			country: profile.country ? profile.country : '',
			language: profile.language ? profile.language : 'English',
			city: profile.city ? profile.city : '',
			location: profile.location ? profile.location : '',
			availability: profile.availability ? profile.availability : 0,
			currency: profile.currency ? profile.currency : '',
			price: profile.price ? profile.price : 0,
			about: profile.about ? profile.about : '',
			picture: profile.picture ? profile.picture : '/img/default.png',
			mornings: profile.availability ? profile.availability % 2 === 1 : false,
			afternoons: profile.availability ? profile.availability  % 4 >= 2 : false,
			evenings: profile.availability ? profile.availability % 8 >= 4 : false,
			weekends: profile.availability ? profile.availability % 16 >= 8 : false
		}

		this.handlePictureChange = (e) => {
			e.preventDefault()

			let file = e.target.files[0]
			this.props.fetchUpdatePicture(this.state.picture, file, (picture) => {
				this.setState({ picture: picture })
			})
		}

		this.handleFirstnameChange = (e) => {
			let firstname = e.target.value
			let fullname = firstname + ' ' + this.state.lastname
			let nameError = ''

			if (fullname.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) === -1)
				nameError = 'Please input correct name'

			this.setState({
				firstname: firstname,
				nameError: nameError
			})
		}

		this.handleLastnameChange = (e) => {
			let lastname = e.target.value
			let fullname = this.state.firstname + ' ' + lastname
			let nameError = ''

			if (fullname.search(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/) === -1)
				nameError = 'Please input correct name'

			this.setState({
				lastname: lastname,
				nameError: nameError
			})
		}

		this.handleNumberChange = (e) => {
			this.setState({ number: e.target.value })
		}

		this.handleCountryChange = (e) => {
			this.setState({ country: e.target.value })
		}

		this.handleLanguageClick = (e) => {
			e.preventDefault()
			this.setState({ language: e.target.value })
		}

		this.handleCityChange = (e) => {
			this.setState({ city: e.target.value })
		}

		this.handleLocationChange = (e) => {
			this.setState({ location: e.target.value })
		}

		this.handleCurrencyChange = (e) => {
			this.setState({ currency: e.target.value })
		}

		this.handlePriceChange = (e) => {
			this.setState({ price: e.target.value })
		}

		this.handleAboutChange = (e) => {
			this.setState({ about: e.target.value })
		}

		this.handleMorningsChange = (e) => {
			this.setState({ mornings: (e.target.value === 'false') })
		}

		this.handleAfternoonsChange = (e) => {
			this.setState({ afternoons: (e.target.value === 'false') })
		}

		this.handleEveningsChange = (e) => {
			this.setState({ evenings: (e.target.value === 'false') })
		}

		this.handleWeekendsChange = (e) => {
			this.setState({ weekends: (e.target.value === 'false') })
		}

		this.handleSubmitClick = (e) => {
			e.preventDefault()

			let availability = 0
			if (this.state.mornings)
				availability += 1
			if (this.state.afternoons)
				availability += 2
			if (this.state.evenings)
				availability += 4
			if (this.state.weekends)
				availability += 8
			this.setState({ availability: availability })

			if (this.state.nameError)
				alert(this.state.nameError)
			else {
				this.props.fetchUpdateProfile(this.state)
				window.scrollTo(0, 0)
			}
		}
	}

	render() {
		if (this.props.auth === false)
			return (<Redirect to='/user/login' />)

		return (
			<div className="content user">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Create Your Tutor Profile</h1>
							<form role="form" noValidate>
								<div className="row">
									<div className="col-xs-4 col-xs-offset-4">
										<img src={this.state.picture} />
										<div className="form-group">
											<input type="file" className="fileupload" onChange={this.handlePictureChange} />
											<div className="btn btn-primary btn-fake">UPLOAD YOUR PICTURE</div>
										</div>
									</div>
								</div>
								<h1><i className="fa fa-user-circle" aria-hidden="true"></i> Personal Info</h1>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="firstname">First Name</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.firstname} onChange={this.handleFirstnameChange} name="firstname" required />
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="lastname">Last Name</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.lastname} onChange={this.handleLastnameChange} name="lastname" required />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="number">Whatsapp Number including country code and + sign</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.number} onChange={this.handleNumberChange} name="number" />
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="country">Country of origin</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.country} onChange={this.handleCountryChange} name="country" />
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
												<li value="0"><button className="btn btn-link" onClick={this.handleLanguageClick} value="English">English</button></li>
												<li value="1"><button className="btn btn-link" onClick={this.handleLanguageClick} value="Chinese">Chinese</button></li>
												<li value="2"><button className="btn btn-link" onClick={this.handleLanguageClick} value="French">French</button></li>
												<li value="3"><button className="btn btn-link" onClick={this.handleLanguageClick} value="Germany">Germany</button></li>
											</ul>
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="city">In which city can you teach?</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.city} onChange={this.handleCityChange} name="city" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label htmlFor="location">Choose where exactly you want to be shown on the TUTOR Map:</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.location} onChange={this.handleLocationChange} name="location" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="currency">Currency</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.currency} onChange={this.handleCurrencyChange} name="currency" />
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="price">Per hour Tutoring rates</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.price} onChange={this.handlePriceChange} name="price" />
										</div>
									</div>
								</div>
								<h1><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Availability</h1>
								<div className="row">
									<div className="col-xs-2">
										<div className="form-group input-checkbox">
											<input type="checkbox" checked={this.state.mornings} onChange={this.handleMorningsChange} value={this.state.mornings} /><span> Mornings</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group input-checkbox">
											<input type="checkbox" checked={this.state.afternoons} onChange={this.handleAfternoonsChange} value={this.state.afternoons} /><span> Afternoons</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group input-checkbox">
											<input type="checkbox" checked={this.state.evenings} onChange={this.handleEveningsChange} value={this.state.evenings} /><span> Evenings</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group input-checkbox">
											<input type="checkbox" checked={this.state.weekends} onChange={this.handleWeekendsChange} value={this.state.weekends} /><span> Weekends</span>
										</div>
									</div>
								</div>
								<h1><i className="fa fa-info-circle" aria-hidden="true"></i> About Me</h1>
								<div className="row">
									<div className="col-xs-12">
										<div className="form-group">
											<textarea className="form-control" value={this.state.about} onChange={this.handleAboutChange} name="about" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<div className="form-group">
											<button type="submit" className="btn btn-primary submit" onClick={this.handleSubmitClick}>SUBMIT YOUR PROFILE NOW</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Profile.propTypes = {
	auth: PropTypes.bool.isRequired,
	profile: PropTypes.shape({
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
	}).isRequired
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth,
		profile: state.auth.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUpdateProfile: bindActionCreators(fetchUpdateProfile, dispatch),
		fetchUpdatePicture: bindActionCreators(fetchUpdatePicture, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile)
