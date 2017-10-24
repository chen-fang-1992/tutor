import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ text }) => {
	if (text === '')
		return ( <div className="row alert"></div> )
	else
		return (
			<div className="row alert">
				<span>{text}</span>
			</div>
		)
}

const mapStateToProps = (state) => {
	return { text: state.auth.text }
}

export default connect( mapStateToProps )(Alert)
