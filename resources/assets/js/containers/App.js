import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import Home from '../components/content/Home';
import Register from '../components/content/Register';
import Profile from '../components/content/Profile';
import Login from '../components/content/Login';
import Search from '../components/content/Search';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			header: ''
		};

		if (this.props.content === 'home')
			this.state.header = 'home';
		else if (this.props.content === 'register')
			this.state.header = 'user';
		else if (this.props.content === 'profile')
			this.state.header = 'user';
		else if (this.props.content === 'login')
			this.state.header = 'user';
		else if (this.props.content === 'search')
			this.state.header = 'tutor';
	}

	get content () {
		if (this.props.content === 'home')
			return <Home />;
		else if (this.props.content === 'register')
			return <Register />;
		else if (this.props.content === 'profile')
			return <Profile />;
		else if (this.props.content === 'login')
			return <Login />;
		else if (this.props.content === 'search')
			return <Search tutors={this.props.tutors} />;
	}

	render() {
		return (
			<div>
				<Header auth={this.props.auth} header={this.state.header}/>
				{this.content}
				<Footer />
			</div>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<App {...(root.dataset)} />, document.getElementById('root'));
}
