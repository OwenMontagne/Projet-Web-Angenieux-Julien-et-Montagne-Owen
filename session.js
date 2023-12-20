// session.js

const express_session = require('express-session');

// Session configuration
const sessionConfig = {
  secret: 'laclefsecretesupersecuriseesinoncavavousmoicavasuper', // Change this to a secure secret key
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 360000, // 1 hour
  },
};

// Middleware to manage user sessions
const sessionMiddleware = express_session(sessionConfig);

module.exports = { sessionMiddleware };
