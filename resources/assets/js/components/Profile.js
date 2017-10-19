import React, { Component } from 'react'

export default class Profile extends Component {
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

		this.handlePicture = (e) => {
			e.preventDefault()

			let reader = new FileReader()
			let file = e.target.files[0]

			reader.onloadend = () => {
				this.setState({ picture: reader.result })
			}
			reader.readAsDataURL(file)
		}

		this.handleFirstname = (e) => {
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

		this.handleLastname = (e) => {
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

		this.handleNumber = (e) => {
			this.setState({ number: e.target.value })
		}

		this.handleCountry = (e) => {
			this.setState({ country: e.target.value })
		}

		this.handleLanguage = (e) => {
			e.preventDefault()
			this.setState({ language: e.target.value })
		}

		this.handleCity = (e) => {
			this.setState({ city: e.target.value })
		}

		this.handleLocation = (e) => {
			this.setState({ location: e.target.value })
		}

		this.handleCurrency = (e) => {
			this.setState({ currency: e.target.value })
		}

		this.handlePrice = (e) => {
			this.setState({ price: e.target.value })
		}

		this.handleAbout = (e) => {
			this.setState({ about: e.target.value })
		}

		this.handleMornings = (e) => {
			this.setState({ mornings: (e.target.value === 'false') })
		}

		this.handleAfternoons = (e) => {
			this.setState({ afternoons: (e.target.value === 'false') })
		}

		this.handleEvenings = (e) => {
			this.setState({ evenings: (e.target.value === 'false') })
		}

		this.handleWeekends = (e) => {
			this.setState({ weekends: (e.target.value === 'false') })
		}

		this.handleSubmit = (e) => {
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

		if (this.props.location.state !== undefined) {
			profile = this.props.location.state.profile
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
										<img src={this.state.picture}/>
										<div className="form-group">
											<input type="file" className="fileupload" onChange={this.handlePicture} />
											<div className="btn btn-primary btn-fake">UPLOAD YOUR PICTURE</div>
										</div>
									</div>
								</div>
								<h1><i className="fa fa-user-circle" aria-hidden="true"></i> Personal Info</h1>
								<div className="row">
									<div className="col-xs-6">
										<label htmlFor="firstname">First Name</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.firstname} onChange={this.handleFirstname} name="firstname" required/>
										</div>
									</div>
									<div className="col-xs-6">
										<label htmlFor="lastname">Last Name</label>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.lastname} onChange={this.handleLastname} name="lastname" required/>
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
											<button type="submit" className="btn btn-primary submit" onClick={this.handleSubmit}>SUBMIT YOUR PROFILE NOW</button>
											<input type="hidden" className="form-control" value={this.state.picture} name="picture" />
											<input type="hidden" className="form-control" value={this.state.language} name="language" />
											<input type="hidden" className="form-control" value={this.state.availability} name="availability" />
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
