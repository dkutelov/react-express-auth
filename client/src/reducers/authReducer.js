import { FETCH_USER, LOGOUT_USER } from '../actions/types'

export default (state = null, action) => {
	console.log(action)
	switch (action.type) {
		case FETCH_USER:
			return action.payload.data || false
		case LOGOUT_USER:
			return action.payload
		default:
			return state
	}
}
