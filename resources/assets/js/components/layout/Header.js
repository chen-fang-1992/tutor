import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from '~/public/img/logo.png';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	get auth () {
		if (this.props.auth === 'true') {
			return (
				<div>
					<ul className="nav navbar-nav navbar-right">
						<li><a className="register nav-btn" href="/user/profile">My Profile</a></li>
						<li><a className="login nav-btn" href="/user/logout">Log Out</a></li>
					</ul>
				</div>
			);
		} else {
			return (
				<div>
					<ul className="nav navbar-nav navbar-right">
						<li><a className="register nav-btn" href="/user/register">Become a Tutor</a></li>
						<li><a className="login nav-btn" href="/user/login">Login</a></li>
					</ul>
				</div>
			);
		}
	}

	render() {
		return (
			<div className={"header " + this.props.header}>
				<nav className={"navbar " + (this.props.header==="home"?"navbar-static-top":"navbar-fixed-top")} role="navigation">
					<div className="container-fluid navigation-bar">
						<div className="navbar-header">
							<a className="logo" href="/"><img src={logo}/></a>
						</div>
						{this.auth}
					</div>
				</nav>
			</div>
		);
	}
}

if (document.getElementById('header')) {
	ReactDOM.render(<Header />, document.getElementById('header'));
}
