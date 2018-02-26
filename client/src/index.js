import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const composeEmhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducers,
	{},
	composeEmhancers(applyMiddleware(reduxThunk))
)

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(jsx, document.querySelector('#root'))
