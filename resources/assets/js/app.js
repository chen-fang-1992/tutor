import bootstrap from './bootstrap'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores'
import configureRoute from './routes'

const store = configureStore()

render(
	<Provider store={store}>
		{configureRoute}
	</Provider>,
	document.getElementById('root')
)
