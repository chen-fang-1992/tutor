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
		if (this.props.children.type.name === 'Home')
			this.state.header = 'home'
		else if (this.props.children.type.name === 'Register')
			this.state.header = 'user'
		else if (this.props.children.type.name === 'Profile')
			this.state.header = 'user'
		else if (this.props.children.type.name === 'Login')
			this.state.header = 'user'
		else if (this.props.children.type.name === 'Search')
			this.state.header = 'tutor'

		return (
			<div>
				<Header header={this.state.header} />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
