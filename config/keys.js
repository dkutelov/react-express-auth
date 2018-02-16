// key.js logic what keys to return

if (process.env.NODE_ENV === 'production') {
	// we are in production mode
	module.exports = require('./prod')
} else {
	// we are in development mode - return dev.js
	module.exports = require('./dev')
}
