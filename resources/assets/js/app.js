
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
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import { Router, browserHistory, Route, IndexRoute, applyRouterMiddleware } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Login from './components/Login'
import Search from './components/Search'

//const store = createStore(reducer)

const useExtraProps = {
  renderRouteComponent: child => React.cloneElement(child, root.dataset)
}

render(
//	<Provider store={store}>
	<Router history={browserHistory} render={applyRouterMiddleware(useExtraProps)}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/user/register" component={Register} />
			<Route path="/user/profile" component={Profile} />
			<Route path="/user/login" component={Login} />
			<Route path="/user/login" component={Search} />
		</Route>
	</Router>,
	document.getElementById('root')
//	</Provider>
)
