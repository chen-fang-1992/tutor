import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import reducer from '../reducers'

const configureStore = () => {
	let middleware = [ thunk ]
	if (process.env.NODE_ENV !== 'production')
		middleware.push(createLogger())

	let config = {
		key: 'root',
		storage: sessionStorage
	}

	let configureReducer = persistReducer(config, reducer)

	let store = createStore(
		configureReducer,
		applyMiddleware(...middleware)
	)

	let persistor = persistStore(store)

	return store
}

export default configureStore
