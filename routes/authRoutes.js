const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const keys = require('../config/keys')

//Local Strategy
passport.use(
	'local',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		(username, password, done) => {
			User.getUserByEmail(username, (err, user) => {
				if (err) throw err
				if (!user) {
					return done(null, false, { message: 'No user found!' })
				}
				User.comparePassword(password, user.password, (err, isMatch) => {
					if (err) throw err
					if (isMatch) {
						return done(null, user)
					} else {
						return done(null, false, { message: 'Wrong password!' })
					}
				})
			})
		}
	)
)

// USER NAME POST
router.post('/auth/email', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/',
		failureFlash: false
	})(req, res, next)
})

// GOOGLE AUTH
router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
)

router.get(
	'/auth/google/callback',
	passport.authenticate('google'),
	(req, res) => res.redirect('/surveys')
)

// FACEBOOK AUTH
router.get('/auth/facebook', passport.authenticate('facebook'))

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/login'
	}),
	(req, res) => res.redirect(keys.facebookRedirectURL)
)

// CHECK USER
router.get('/api/user', (req, res) => {
	res.send(req.user)
})

// LOGOUT
router.get('/api/logout', (req, res) => {
	req.logout()
	res.send(false)
})

module.exports = router
