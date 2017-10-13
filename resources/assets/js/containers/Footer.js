import React from 'react'
import { Link } from 'react-router'

const Footer = () => (
	<div className="footer">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xs-4">
					<ul className="list-footer">
						<li><Link className="link" to="/user/register">Become a Tutor</Link></li>
						<li><Link className="link" to="/">FAQ Students</Link></li>
						<li><Link className="link" to="/">FAQ Tutor</Link></li>
					</ul>
				</div>
				<div className="col-xs-4">
					<ul className="list-footer">
						<li><Link className="link" to="/">Terms and conditions</Link></li>
						<li><Link className="link" to="/">Privacy policy</Link></li>
						<li className="social-footer">
							<Link className="link" to="/"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></Link>
							<Link className="link" to="/"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></Link>
							<Link className="link" to="/"><span><i className="fa fa-instagram" aria-hidden="true"></i></span></Link>
						</li>
					</ul>
				</div>
				<div className="col-xs-4">
					<ul className="list-footer">
						<li><Link className="link" to="/">Contact Us</Link></li>
						<li><Link className="link" to="/">+12 3456 7890</Link></li>
					</ul>
				</div>
			</div>
			<div className="row support">
				<h1>©2017 XXX PTE LTD. All Rights Reserved.</h1>
				<div>Icons made by <Link className="link" to="http://www.freepik.com" title="Freepik">Freepik</Link> from <Link className="link" to="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link> is licensed by <Link className="link" to="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</Link></div>
			</div>
		</div>
	</div>
)

export default Footer
