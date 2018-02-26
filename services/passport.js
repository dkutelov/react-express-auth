const passport = require('passport')
const mongoose = require('mongoose')
const User = require('../models/User')

// PASSPORT STRATEGIES
const GoogleStrategy = require('passport-google-oauth20')
const FacebookStrategy = require('passport-facebook').Strategy

const keys = require('../config/keys')

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user)
	})
})

// GOOGLE STRATEGY
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id }).catch(
				err => {
					console.log(err)
				}
			)
			if (existingUser) {
				return done(null, existingUser)
			}
			const user = await new User({ googleId: profile.id })
				.save()
				.catch(err => {
					console.log(err)
				})
			done(null, user)
		}
	)
)

// FACEBOOK STRATEGY
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookAppID,
			clientSecret: keys.facebookSecret,
			callbackURL: keys.facebookCallbackURL
		},
		async (accessToken, refreshToken, profile, done) => {
			const oldUser = await User.findOne({ facebookId: profile.id }).catch(
				err => {
					console.log(err)
				}
			)
			if (oldUser) {
				return done(null, oldUser)
			}
			const newUser = await new User({ facebookId: profile.id })
				.save()
				.catch(err => {
					console.log(err)
				})
			done(null, newUser)
		}
	)
)
