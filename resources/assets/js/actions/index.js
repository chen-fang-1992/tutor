import * as types from '../constants/ActionTypes'
import axios from 'axios'

const fetchLoginSuccess = (profile) => {
	return {
		type: types.LOG_IN_SUCCESS,
		profile: profile
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
			console.log('fetch log in '+response.data)
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
			if (response.data !== 'fail')
				dispatch(fetchLogoutSuccess())
			console.log('fetch log out '+response.data)
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
			console.log('fetch profile update '+response.data)
		}).catch((error) => { throw new Error(error.message) })
	}
}

const fetchRegisterSuccess = (profile) => {
	return {
		type: types.REGISTER_SUCCESS,
		profile: profile
	}
}

export const fetchRegister = (name, email, password) => {
	return (dispatch) => {
		axios.post('/user/register', {
			name: name,
			email: email,
			password: password
		}).then(response => {
			if (response.data !== 'fail')
				dispatch(fetchRegisterSuccess(response.data))
			console.log('fetch register '+response.data)
		}).catch((error) => { throw new Error(error.message) })
	}
}