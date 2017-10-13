import React, { Component } from 'react'
import { Link } from 'react-router'
import logo from '~/public/img/logo.png'

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	get auth () {
		if (this.props.auth === 'true') {
			return (
				<div>
					<ul className="nav navbar-nav navbar-right">
						<li><Link className="register nav-btn" to="/user/profile">My Profile</Link></li>
						<li><Link className="login nav-btn" to="/user/logout">Log Out</Link></li>
					</ul>
				</div>
			)
		} else {
			return (
				<div>
					<ul className="nav navbar-nav navbar-right">
						<li><Link className="register nav-btn" to="/user/register">Become a Tutor</Link></li>
						<li><Link className="login nav-btn" to="/user/login">Login</Link></li>
					</ul>
				</div>
			)
		}
	}

	render() {
		return (
			<div className={"header " + this.props.header}>
				<nav className={"navbar " + (this.props.header==="home"?"navbar-static-top":"navbar-fixed-top")} role="navigation">
					<div className="container-fluid navigation-bar">
						<div className="navbar-header">
							<Link className="logo" to="/"><img src={logo}/></Link>
						</div>
						{this.auth}
					</div>
				</nav>
			</div>
		)
	}
}
