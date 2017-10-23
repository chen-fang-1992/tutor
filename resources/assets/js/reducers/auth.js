import * as types from '../constants/AuthActionTypes'

const initialState = {
	auth: false,
	profile: {}
}

const auth = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.LOG_IN_SUCCESS:
			state = {
				auth: true,
				profile: action.profile
			}
			return state
		case types.LOG_OUT_SUCCESS:
			state = {
				auth: false,
				profile: {}
			}
			return state
		case types.UPDATE_PROFILE_SUCCESS:
			state.profile = action.profile
			return state
		case types.REGISTER_SUCCESS:
			state = {
				auth: true,
				profile: action.profile
			}
			return state
		default:
			return state
	}
}

export default auth
