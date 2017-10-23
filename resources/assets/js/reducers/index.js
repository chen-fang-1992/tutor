import { combineReducers } from 'redux'
import auth from './auth'
import search from './search'

const reducer = combineReducers({
	auth,
	search
})

export default reducer
