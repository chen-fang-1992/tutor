import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = { header: '' }
	}

	render() {
		if (this.props.children.props.location.pathname === '/')
			this.state.header = 'home'
		else if (this.props.children.props.location.pathname === '/user/register')
			this.state.header = 'user'
		else if (this.props.children.props.location.pathname === '/user/profile')
			this.state.header = 'user'
		else if (this.props.children.props.location.pathname === '/user/login')
			this.state.header = 'user'
		else if (this.props.children.props.location.pathname === '/tutor')
			this.state.header = 'tutor'

		return (
			<div>
				<Header header={this.state.header} />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

App.propTypes = {
	auth: PropTypes.bool,
	children: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return { auth: state.auth.auth }
}

export default connect(
	mapStateToProps
)(App)
