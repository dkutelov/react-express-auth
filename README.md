# react-express-auth
Boilerplate for react and express/ mongoose authentication with Passport (email-password, google, facebook)

- runs on two different servers (proxy in package.json in client is required)

- User authentication with Google, Facebook accounts and email/password; User registration email/password

- react client side created with react-create-app

- creates and updates Redux state - auth

- Google, Facebook, Email/password - requests to urls; logout is with AJAX request

- server uses Express and Mongoose

- authentication is with Passport

- password is protected with bcryptjs

- in production Facebook and Google Id and secret keys need to be set in prod.js or as environment variables: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_APP_ID, FACEBOOK_SECRET, in development mode dev.js needs to be created with all keys.

- run npm install in both server and client folders