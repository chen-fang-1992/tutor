import * as types from '../constants/SearchActionTypes'
import axios from 'axios'

const getTutorsSuccess = (info, tutors) => {
	return {
		type: types.GET_TUTORS_SUCCESS,
		state: {
			info: info,
			tutors: tutors,
			show: true
		}
	}
}

export const getTutors = (info) => {
	return (dispatch) => {
		axios.get('/tutor/show', {
			params: {
				language: info.language,
				availability: info.availability,
				location: info.location,
				filter: info.filter
			}
		}).then(response => {
			dispatch(getTutorsSuccess(info, response.data))
		}).catch((error) => { throw new Error(error.message) })
	}
}

const resetTutorsSuccess = () => {
	return {
		type: types.RESET_TUTORS_SUCCESS
	}
}

export const resetTutors = () => {
	return (dispatch) => {
		return dispatch(resetTutorsSuccess())
	}
}
