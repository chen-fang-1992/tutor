import * as types from '../constants/SearchActionTypes'

const initialState = {
	info: {
		language: 'English',
		availability: 'When?',
		location: '',
		filter: 'Price'
	},
	tutors: {},
	show: false
}

const search = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.GET_TUTORS_SUCCESS:
			state = action.state
			return state
		case types.RESET_TUTORS_SUCCESS:
			return initialState
		default:
			return state
	}
}

export default search
