const express = require('express')
const passport = require('passport')
const router = express.Router()

// EMAIL AUTH
router.post(
	'/auth/email',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	})
)

// GOOGLE AUTH
router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
)

router.get('/auth/google/callback', passport.authenticate('google'))

// CHECK USER
router.get('/api/user', (req, res) => {
	res.send(req.user)
})

// LOGOUT
router.get('/api/logout', (req, res) => {
	req.logout()
	res.send(req.user)
})

module.exports = router
