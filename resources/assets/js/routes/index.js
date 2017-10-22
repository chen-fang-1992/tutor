import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../containers/App'
import Home from '../components/Home'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Search from '../components/Search'

const configureRoute = (
	<BrowserRouter>
		<div>
			<Route exact path="/" render={ props => <App><Home { ...props } /></App> } />
			<Route exact path="/user/register" render={ props => <App><Register { ...props } /></App> } />
			<Route exact path="/user/profile" render={ props => <App><Profile { ...props } /></App> } />
			<Route exact path="/user/login" render={ props => <App><Login { ...props } /></App> } />
			<Route exact path="/tutor" render={ props => <App><Search { ...props } /></App> } />
		</div>
	</BrowserRouter>
)

export default configureRoute
