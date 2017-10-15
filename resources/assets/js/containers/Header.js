import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/public/img/logo.png'

const Header = ({auth, header}) => {
	const authTrue = (
		<div>
			<ul className="nav navbar-nav navbar-right">
				<li><Link className="register nav-btn" to="/user/profile">My Profile</Link></li>
				<li><Link className="login nav-btn" to="/user/logout">Log Out</Link></li>
			</ul>
		</div>
	)

	const authFalse = (
		<div>
			<ul className="nav navbar-nav navbar-right">
				<li><Link className="register nav-btn" to="/user/register">Become a Tutor</Link></li>
				<li><Link className="login nav-btn" to="/user/login">Login</Link></li>
			</ul>
		</div>
	)

	return (
		<div className={`header ${header}`}>
			<nav className={`navbar ${header==="home"?"navbar-static-top":"navbar-fixed-top"}`} role="navigation">
				<div className="container-fluid navigation-bar">
					<div className="navbar-header">
						<Link className="logo" to="/"><img src={logo}/></Link>
					</div>
					{(auth === 'true') ? authTrue : authFalse}
				</div>
			</nav>
		</div>
	)
}

export default Header
