// prod.js - production keys
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	facebookAppID: process.env.FACEBOOK_APP_ID,
	facebookSecret: process.env.FACEBOOK_SECRET,
	facebookCallbackURL: '/auth/facebook/callback',
	facebookRedirectURL: '/surveys',
}
