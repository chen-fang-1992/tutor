import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLogout } from '../actions/auth'
import { resetTutors } from '../actions/search'

let logo = '/img/logo.png'

class Header extends Component {
	constructor(props) {
		super(props)

		this.authTrue = (
			<div>
				<ul className="nav navbar-nav navbar-right">
					<li><Link className="register nav-btn" to="/user/profile">My Profile</Link></li>
					<li><Link className="login nav-btn" to="/" onClick={this.props.fetchLogout}>Log Out</Link></li>
				</ul>
			</div>
		)

		this.authFalse = (
			<div>
				<ul className="nav navbar-nav navbar-right">
					<li><Link className="register nav-btn" to="/user/register">Become a Tutor</Link></li>
					<li><Link className="login nav-btn" to="/user/login">Login</Link></li>
				</ul>
			</div>
		)
	}

	render() {
		return (
			<div className={`header ${this.props.header}`}>
				<nav className={`navbar ${this.props.header==="home"?"navbar-static-top":"navbar-fixed-top"}`} role="navigation">
					<div className="container-fluid navigation-bar">
						<div className="navbar-header">
							<Link className="logo" to="/" onClick={this.props.resetTutors}><img src={logo} /></Link>
						</div>
						{ (this.props.auth === true) ? this.authTrue : this.authFalse }
					</div>
				</nav>
			</div>
		)
	}
}

Header.propTypes = {
	header: PropTypes.string.isRequired,
	auth: PropTypes.bool.isRequired,
	fetchLogout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		fetchLogout: bindActionCreators(fetchLogout, dispatch),
		resetTutors: bindActionCreators(resetTutors, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchProps
)(Header)
