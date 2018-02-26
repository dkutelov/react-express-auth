import axios from 'axios'
import { FETCH_USER, LOGOUT_USER } from './types'

export const fetchUser = () => async dispatch =>
	dispatch({ type: FETCH_USER, payload: await axios.get('/api/user') })

export const logoutUser = () => async dispatch => {
	const res = await axios.get('/api/logout')
	dispatch({ type: LOGOUT_USER, payload: res.data })
}
