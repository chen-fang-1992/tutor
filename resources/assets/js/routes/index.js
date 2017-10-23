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
			<Route exact path="/" render={ () => <App><Home /></App> } />
			<Route exact path="/user/register" render={ () => <App><Register /></App> } />
			<Route exact path="/user/profile" render={ () => <App><Profile /></App> } />
			<Route exact path="/user/login" render={ () => <App><Login /></App> } />
			<Route exact path="/tutor" render={ () => <App><Search /></App> } />
		</div>
	</BrowserRouter>
)

export default configureRoute
