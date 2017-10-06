import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-4">
						<ul className="list-footer">
							<li><a href="/user/register">Become a Tutor</a></li>
							<li><a href="/faq-students">FAQ Students</a></li>
							<li><a href="/faq-tutor">FAQ Tutor</a></li>
						</ul>
					</div>
					<div className="col-xs-4">
						<ul className="list-footer">
							<li><a href="/terms">Terms and conditions</a></li>
							<li><a href="/privacy">Privacy policy</a></li>
							<li className="social-footer">
								<a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a>
								<a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a>
								<a href="#"><span><i className="fa fa-instagram" aria-hidden="true"></i></span></a>
							</li>
						</ul>
					</div>
					<div className="col-xs-4">
						<ul className="list-footer">
							<li><a href="#">Contact Us</a></li>
							<li><a href="tel:+12-3456-7890">+12 3456 7890</a></li>
						</ul>
					</div>
				</div>
				<div className="row title">
					<h1>©2017 XXX PTE LTD. All Rights Reserved.</h1>
					<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('footer')) {
	ReactDOM.render(<Footer />, document.getElementById('footer'));
}
