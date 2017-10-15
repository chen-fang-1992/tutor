
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import bootstrap from './bootstrap'

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Login from './components/Login'
import Search from './components/Search'

//const store = createStore(reducer)

render(
//	<Provider store={store}>,
	<BrowserRouter>
		<div>
			<Route exact path="/" render={ props => <App { ...(root.dataset) }><Home { ...props }/></App> } />
			<Route exact path="/user/register" render={ props => <App { ...(root.dataset) }><Register { ...props }/></App> } />
			<Route exact path="/user/profile" render={ props => <App { ...(root.dataset) }><Profile { ...props }/></App> } />
			<Route exact path="/user/login" render={ props => <App { ...(root.dataset) }><Login { ...props }/></App> } />
			<Route exact path="/tutor" render={ props => <App { ...(root.dataset) }><Search { ...props }/></App> } />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
//	</Provider>
)
