import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			header: ''
		}
	}

	render() {
		if (this.props.location.pathname === '/')
			this.state.header = 'home'
		else if (this.props.location.pathname === '/user/register')
			this.state.header = 'user'
		else if (this.props.location.pathname === '/user/profile')
			this.state.header = 'user'
		else if (this.props.location.pathname === '/user/login')
			this.state.header = 'user'
		else if (this.props.location.pathname === '/tutor')
			this.state.header = 'tutor'

		return (
			<div>
				<Header auth={this.props.auth} header={this.state.header} />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
