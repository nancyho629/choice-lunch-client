'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  store.user = data.user
  $('#signed-in-user').text('Sign Up Successful. You\'re now logged in.')
  $('form').trigger('reset')
  $('.modal').modal('hide')
  $('#create-restaurant').show()
  $('.dropdown').show().fadeIn(5000)
  $('.dropdown-login').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#signup-message').text('Sign Up Failed. Please check that your username is not taken & your passwords match.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exists
  store.user = data.user
  $('#login-message').text('Sign In Successful')
  $('#signed-in-user').text(`Signed in successfully as user ${store.user.email}`)
  $('form').trigger('reset')
  // $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-restaurant').show()
  $('.dropdown').show().fadeIn(5000)
  $('.dropdown-login').hide()
}

const signInFailure = function () {
  $('#login-message').text('Sign In Failed')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#login-message').text('Change Password Successful')
  $('form').trigger('reset')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#login-message').text('Change password failed')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('#signed-in-user').text('')
  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#sign-up').show()
  $('.delete-restaurant').hide()
  $('.update-restaurant').hide()
  $('#create-restaurant').hide()
  $('.dropdown-login').show()
  $('.dropdown').hide()
  $('#login-message').text('Sign Out Successful')
  $('#signup-message').text('')
}

const signOutFailure = function () {
  $('#login-message').text('Sign Out Failed')
  $('form').trigger('reset')
  $('.dropdown').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
