import {
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS
} from '../constants/ActionTypes'

const initialState = {
	auth: false,
	profile: {}
}

const login = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOG_IN_REQUEST:
			return state
		case LOG_IN_SUCCESS:
			state = {
				auth: true,
				profile: action.profile
			}
			return state
		default:
			return state
	}
}

export default login
