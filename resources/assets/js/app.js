import bootstrap from './bootstrap'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Login from './components/Login'
import Search from './components/Search'
import reducer from './reducers'

const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" render={ props => <App><Home { ...props }/></App> } />
				<Route exact path="/user/register" render={ props => <App><Register { ...props }/></App> } />
				<Route exact path="/user/profile" render={ props => <App><Profile { ...props }/></App> } />
				<Route exact path="/user/login" render={ props => <App><Login { ...props }/></App> } />
				<Route exact path="/tutor" render={ props => <App><Search { ...props }/></App> } />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
