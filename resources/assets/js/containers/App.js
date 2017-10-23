import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'

const App = ({ children }) => {
	window.scrollTo(0, 0)
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App
