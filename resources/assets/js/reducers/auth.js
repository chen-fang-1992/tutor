import * as types from '../constants/AuthActionTypes'

const initialState = {
	auth: false,
	profile: {},
	text: ''
}

const auth = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.LOG_IN_SUCCESS:
			return action.state
		case types.LOG_IN_FAILURE:
			return {
				...state,
				text: action.text
			}
		case types.LOG_OUT_SUCCESS:
			return initialState
		case types.LOG_OUT_FAILURE:
			return {
				...state,
				text: action.text
			}
		case types.UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.profile
			}
		case types.REGISTER_SUCCESS:
			return action.state
		case types.REGISTER_FAILURE:
			return {
				...state,
				text: action.text
			}
		default:
			return state
	}
}

export default auth
