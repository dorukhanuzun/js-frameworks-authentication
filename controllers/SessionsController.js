const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

// Step 1: Add the login logic

exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
      pageTitle: 'Login Page'
    });
  };

// Step 2: Add the authentication logic
exports.create = (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/plans',
      successFlash: 'Congrats, you were logged in successfully!',
      failureRedirect: '/login',
      failureFlash: 'Your email or password is wrong, please try again.'
    })(req, res, next);
  };

// Step 3: Add the logout logic

exports.delete = (req, res) => {
    req.logout();
    req.flash('success', 'You were logged out successfully.');
    res.redirect('/');
  };