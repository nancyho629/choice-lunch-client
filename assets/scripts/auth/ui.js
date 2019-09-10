'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#login-message').text('Sign Up Successful. Please log in!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#login-message').text('Sign Up Failed. Please check that your username is not taken & your passwords match.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exists
  store.user = data.user
  $('#login-message').text('Sign In Successful')
  $('#signed-in-user').text(`Signed in successfully as user ${store.user.email}`)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-restaurant').show()
  $('.dropdown').show().fadeIn(5000)
}

const signInFailure = function () {
  $('#login-message').text('Sign In Failed')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#change-pw-message').text('Change Password Successful').delay(3000).hide()
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#change-pw-message')
    .text('Change password failed')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('#signed-in-user').text('')
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.delete-restaurant').hide()
  $('.update-restaurant').hide()
}

const signOutFailure = function () {
  $('#login-message').text('Sign Out Failed')
  $('form').trigger('reset')
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
