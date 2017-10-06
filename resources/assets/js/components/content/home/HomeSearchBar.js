import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HomeSearchBar extends Component {
	render() {
		return (
			<div className="container search-bar">
				<div className="row">
					<h1>Find A Native Language Tutor Near You</h1>
					<div className="col-xs-10 col-xs-offset-1">
						<div className="col-xs-3">
							<div className="dropdown">
								<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
									<span className="placeholder">English</span>
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu" role="menu">
									<li value="0"><a className="btn btn-link">English</a></li>
									<li value="1"><a className="btn btn-link">Chinese</a></li>
									<li value="2"><a className="btn btn-link">French</a></li>
									<li value="3"><a className="btn btn-link">Germany</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xs-3">
							<div className="dropdown">
								<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
									<span className="placeholder">When?</span>
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu" role="menu">
									<li value="0"><a className="btn btn-link">Monday</a></li>
									<li value="1"><a className="btn btn-link">Tuesday</a></li>
									<li value="2"><a className="btn btn-link">Wednesday</a></li>
									<li value="3"><a className="btn btn-link">Thursday</a></li>
									<li value="4"><a className="btn btn-link">Friday</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xs-3">
							<div className="dropdown">
								<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
									<span className="placeholder">Price</span>
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu" role="menu">
									<li value="0"><a className="btn btn-link">Price</a></li>
									<li value="1"><a className="btn btn-link">Rating</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xs-3">
							<button type="button" className="btn btn-success">Search</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('home-search-bar')) {
	ReactDOM.render(<HomeSearchBar />, document.getElementById('home-search-bar'));
}
