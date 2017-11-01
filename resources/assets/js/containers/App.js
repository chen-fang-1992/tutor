import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLogout } from '../actions/auth'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		window.scrollTo(0, 0)
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App
