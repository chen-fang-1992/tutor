import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstname: '',
			lastname: '',
			nameError: '',
			number: '',
			country: '',
			language: '',
			city: '',
			location: '',
			availability: 0,
			currency: '',
			price: '',
			about: '',
			picture: '/img/default.png',
			mornings: false,
			afternoons: false,
			evenings: false,
			weekends: false
		}

		this.handlePictureChange = (e) => {
			e.preventDefault()

			let reader = new FileReader()
			let file = e.target.files[0]

			reader.onloadend = () => {
				this.setState({ picture: reader.result })
			}
			reader.readAsDataURL(file)
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

		this.handleMorningsClick = (e) => {
			this.setState({ mornings: (e.target.value === false) })
		}

		this.handleAfternoonsClick = (e) => {
			this.setState({ afternoons: (e.target.value === false) })
		}

		this.handleEveningsClick = (e) => {
			this.setState({ evenings: (e.target.value === false) })
		}

		this.handleWeekendsClick = (e) => {
			this.setState({ weekends: (e.target.value === false) })
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
				axios.post('/user/profile/update', {
					firstname: this.state.firstname,
					lastname: this.state.lastname,
					number: this.state.number,
					country: this.state.country,
					language: this.state.language,
					city: this.state.city,
					location: this.state.location,
					availability: this.state.availability,
					currency: this.state.currency,
					price: this.state.price,
					about: this.state.about,
					picture: this.state.picture
				}).then(response => {
					window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
				}).catch((error) => { throw new Error(error.message) })
			}
		}
	}

	componentDidMount () {
		let profile

		if (this.props.profile !== undefined) {
			profile = this.props.profile
			this.setState({
				firstname: profile.firstname ? profile.firstname : '',
				lastname: profile.lastname ? profile.lastname : '',
				number: profile.number ? profile.number : '',
				country: profile.country ? profile.country : '',
				language: profile.language ? profile.language : 'English',
				city: profile.city ? profile.city : '',
				location: profile.location ? profile.location : '',
				currency: profile.currency ? profile.currency : '',
				price: profile.price ? profile.price : '',
				mornings: profile.availability ? profile.availability % 2 === 1 : false,
				afternoons: profile.availability ? profile.availability  % 4 >= 2 : false,
				evenings: profile.availability ? profile.availability % 8 >= 4 : false,
				weekends: profile.availability ? profile.availability % 16 >= 8 : false,
				about: profile.about ? profile.about : '',
				picture: profile.picture ? profile.picture : '/img/default.png'
			})
		} else {
			axios.get('/user/profile/show').then(response => {
				profile = response.data
				this.setState({
					firstname: profile.firstname ? profile.firstname : '',
					lastname: profile.lastname ? profile.lastname : '',
					number: profile.number ? profile.number : '',
					country: profile.country ? profile.country : '',
					language: profile.language ? profile.language : 'English',
					city: profile.city ? profile.city : '',
					location: profile.location ? profile.location : '',
					currency: profile.currency ? profile.currency : '',
					price: profile.price ? profile.price : '',
					mornings: profile.availability ? profile.availability % 2 === 1 : false,
					afternoons: profile.availability ? profile.availability  % 4 >= 2 : false,
					evenings: profile.availability ? profile.availability % 8 >= 4 : false,
					weekends: profile.availability ? profile.availability % 16 >= 8 : false,
					about: profile.about ? profile.about : '',
					picture: profile.picture ? profile.picture : '/img/default.png'
				})
			}).catch((error) => { throw new Error(error.message) })
		}
	}

	render() {
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
										<div className="form-group">
											<input type="checkbox" checked={this.state.mornings} onClick={this.handleMorningsClick} value={this.state.mornings} /><span> Mornings</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.afternoons} onClick={this.handleAfternoonsClick} value={this.state.afternoons} /><span> Afternoons</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.evenings} onClick={this.handleEveningsClick} value={this.state.evenings} /><span> Evenings</span>
										</div>
									</div>
									<div className="col-xs-2">
										<div className="form-group">
											<input type="checkbox" checked={this.state.weekends} onClick={this.handleWeekendsClick} value={this.state.weekends} /><span> Weekends</span>
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
	profile: PropTypes.shape({
		picture: PropTypes.string,
		firstname: PropTypes.string.isRequired,
		lastname: PropTypes.string.isRequired,
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

const mapStateToProps = state => {
	return { profile: state.auth.profile }
}

export default connect(
	mapStateToProps
)(Profile)
