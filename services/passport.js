const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require('mongoose')

const keys = require('../config/keys')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user)
	})
})

// Local strategy email
passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		(req, username, password, done) => {
			console.log('User name: ', username)
			User.findOne({ email: username }).then(user => {
				if (!user) {
					// No email found/ no existing user
					return done(null, false, { message: 'Incorrect username.' })
				}
				if (!user.validPassword(password)) {
					return done(null, false, { message: 'Incorrect password.' })
				}
				return done(null, user)
			})
		}
	)
)

// Google Strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					// do something
					done(null, existingUser)
				} else {
					new User({ googleId: profile.id }).save().then(user => {
						done(null, user)
					})
				}
			})
		}
	)
)
