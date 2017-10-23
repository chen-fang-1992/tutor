import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Warning = ({ text }) => {
	if (text === '')
		return null
	else
		return (
			<div className="alert alert-warning">
				<a href="#" className="close" data-dismiss="alert">
					&times;
				</a>
				<strong>Warning！</strong>{text}
			</div>
		)
}

const mapStateToProps = (state) => {
	return { text: state.auth.text }
}

export default connect( mapStateToProps )(Warning)
