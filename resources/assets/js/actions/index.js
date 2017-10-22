import * as types from '../constants/ActionTypes'
import axios from 'axios'

const fetchLoginSuccess = (profile) => {
	return {
		type: types.LOG_IN_SUCCESS,
		profile: profile
	}
}

const fetchLogoutSuccess = () => {
	return {
		type: types.LOG_OUT_SUCCESS
	}
}

export const fetchLogin = (email, password) => {
	return (dispatch) => {
		axios.post('/user/login', {
			email: email,
			password: password
		}).then((response) => {
			if (response.data !== 'fail1' || response.data !== 'fail2')
				dispatch(fetchLoginSuccess(response.data))
		}).catch((error) => { throw new Error(error.message) })
	}
}

export const fetchLogout = () => {
	return (dispatch) => {
		axios.get('/user/logout').then((response) => {
			if (response.data !== 'fail')
				dispatch(fetchLogoutSuccess())
		}).catch((error) => { throw new Error(error.message) })
	}
}