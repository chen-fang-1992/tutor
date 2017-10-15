import bootstrap from './bootstrap'

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
