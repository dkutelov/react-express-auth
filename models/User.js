const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
	googleId: String,
	facebookId: String,
	email: {
		type: String,
		trim: true
	},
	username: {
		type: String
	},
	password: {
		type: String,
		trim: true
	},
	name: String
})

const User = mongoose.model('users', userSchema)
module.exports = User

// FUNCTIONS
// REGISTER USER
module.exports.registerUser = (newUser, callback) => {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (errh, hash) => {
			if (err) {
				console.log(err)
			}
			// set pasword to hash
			newUser.password = hash
			newUser.save(callback)
		})
	})
}

// LOOK FOR USER WITH PROVIDED EMAIL
module.exports.getUserByEmail = (email, callback) => {
	const query = { email }
	User.findOne(query, callback)
}

// CHECKS IF PASSPORT MATCHES
module.exports.comparePassword = (candidatePassword, hash, callback) => {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) throw err
		callback(null, isMatch)
	})
}
