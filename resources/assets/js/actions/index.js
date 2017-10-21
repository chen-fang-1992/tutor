import * as types from '../constants/ActionTypes'
import axios from 'axios'

const fetchLoginSuccess = profile => {
	return {
		type: types.LOG_IN_SUCCESS,
		profile: profile
	}
}

export const fetchLogin = (email, password) => {
	return dispatch => {
		axios.post('/user/login', {
			email: email,
			password: password
		}).then(response => {
			if (response.data !== 'fail1' || response.data !== 'fail2')
				dispatch(fetchLoginSuccess(response.data))
		}).catch((error) => { throw new Error(error.message) })
	}
}