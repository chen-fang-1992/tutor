import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import home_bg from '~/public/img/home_bg.jpeg';

import HomeSearchBar from './home/HomeSearchBar';
import HomeIntroBar from './home/HomeIntroBar';
import HomeTestimonials from './home/HomeTestimonials';


export default class Home extends Component {
	render() {
		return (
			<div className="content home">
				<div className="background" style={{backgroundImage:"url("+home_bg+")"}}></div>
				<HomeSearchBar />
				<HomeIntroBar />
				<HomeTestimonials />
			</div>
		);
	}
}

if (document.getElementById('home')) {
	ReactDOM.render(<Home />, document.getElementById('home'));
}
