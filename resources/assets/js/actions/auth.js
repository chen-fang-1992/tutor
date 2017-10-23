import * as types from '../constants/AuthActionTypes'
import axios from 'axios'

const fetchLoginSuccess = (profile) => {
	return {
		type: types.LOG_IN_SUCCESS,
		state: {
			auth: true,
			profile: profile,
			text: ''
		}
	}
}

const fetchFailure = (type, text) => {
	return {
		type: type,
		text: text
	}
}

export const fetchLogin = (email, password) => {
	return (dispatch) => {
		axios.post('/user/login', {
			email: email,
			password: password
		}).then((response) => {
			if (response.data === 'fail1')
				dispatch(fetchFailure(types.LOG_IN_FAILURE, 'You have already logged in.'))
			else if (response.data === 'fail2')
				dispatch(fetchFailure(types.LOG_IN_FAILURE, 'Please input correct email and password.'))
			else
				dispatch(fetchLoginSuccess(response.data))
		}).catch((error) => { throw new Error(error.message) })
	}
}

const fetchLogoutSuccess = () => {
	return {
		type: types.LOG_OUT_SUCCESS
	}
}

export const fetchLogout = () => {
	return (dispatch) => {
		axios.get('/user/logout').then((response) => {
			if (response.data === 'fail')
				dispatch(fetchFailure(types.LOG_OUT_FAILURE, 'You haven\'t logged in.'))
			else
				dispatch(fetchLogoutSuccess())
		}).catch((error) => { throw new Error(error.message) })
	}
}

const fetchUpdateProfileSuccess = (profile) => {
	return {
		type: types.UPDATE_PROFILE_SUCCESS,
		profile: profile
	}
}

export const fetchUpdateProfile = (profile) => {
	return (dispatch) => {
		axios.post('/user/profile/update', {
			firstname: profile.firstname,
			lastname: profile.lastname,
			number: profile.number,
			country: profile.country,
			language: profile.language,
			city: profile.city,
			location: profile.location,
			availability: profile.availability,
			currency: profile.currency,
			price: profile.price,
			about: profile.about,
			picture: profile.picture
		}).then(response => {
			if (response.data !== 'fail')
				dispatch(fetchUpdateProfileSuccess(profile))
		}).catch((error) => { throw new Error(error.message) })
	}
}

const fetchRegisterSuccess = (profile) => {
	return {
		type: types.REGISTER_SUCCESS,
		state: {
			auth: true,
			profile: profile,
			text: ''
		}
	}
}

export const fetchRegister = (name, email, password) => {
	return (dispatch) => {
		axios.post('/user/register', {
			name: name,
			email: email,
			password: password
		}).then(response => {
			if (response.data === 'fail')
				dispatch(fetchFailure(types.REGISTER_FAILURE, 'This email is occupied.'))
			else
				dispatch(fetchRegisterSuccess(response.data))
		}).catch((error) => { throw new Error(error.message) })
	}
}
