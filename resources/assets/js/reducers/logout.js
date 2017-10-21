import {
	LOG_OUT_REQUEST,
	LOG_OUT_SUCCESS
} from '../constants/ActionTypes'

const initialState = {
	auth: false
}

const login = (state = initialState.auth, action) => {
	switch (action.type) {
		case LOG_OUT_REQUEST:
			return state
		case LOG_OUT_SUCCESS:
			return true
		default:
			return state
	}
}

export default login
