const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const flash = require('connect-flash')

const authRoutes = require('./routes/authRoutes')
const registerRoutes = require('./routes/registerRoutes')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// initiate and config cookie-session
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
)
// initiate cookies for passport
app.use(passport.initialize())
app.use(passport.session())

// Express Messages
app.use(flash())
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg')
	res.locals.error_msg = req.flash('error_msg')
	res.locals.error = req.flash('error')
	res.locals.user = req.user || null
	//    res.locals.messages = require('express-messages')(req,res);
	next()
})

// Set routes
app.use('/', authRoutes)
app.use('/register', registerRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT)
