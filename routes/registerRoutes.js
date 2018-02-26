const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Register
router.post('/', (req, res, next) => {
	const { name, username, email, password, password2 } = req.body

	const newUser = new User({
		name,
		username,
		email,
		password
	})

	User.registerUser(newUser, (err, user) => {
		if (err) throw err
		res.redirect('/')
	})
})

module.exports = router
