import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			header: ''
		}

		if (this.props.content === 'home')
			this.state.header = 'home'
		else if (this.props.content === 'register')
			this.state.header = 'user'
		else if (this.props.content === 'profile')
			this.state.header = 'user'
		else if (this.props.content === 'login')
			this.state.header = 'user'
		else if (this.props.content === 'search')
			this.state.header = 'tutor'
	}

	render() {
		return (
			<div>
				<Header auth={this.props.auth} header={this.state.header} />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
