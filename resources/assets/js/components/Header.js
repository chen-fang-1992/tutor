import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from '../../../../public/img/logo.png';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-static-top" role="navigation">
					<div className="container navigation-bar">
						<div className="navbar-header">
							<a className="logo" href="/"><img src={logo}/></a>
						</div>
						<div>
							<ul className="nav navbar-nav navbar-right">
								<li><a className="register nav-btn" href="/user/register">Become a Tutor</a></li>
								<li><a className="login nav-btn" href="/user/profile">Login</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

if (document.getElementById('header')) {
	ReactDOM.render(<Header />, document.getElementById('header'));
}