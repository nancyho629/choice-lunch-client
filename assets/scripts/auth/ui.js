'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message')
    .text('Sign Up Successful. Please log in!')
  $('#message').removeClass()
  $('#message').addClass('Success') // optional adds class for styling
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign Up Failed. Please retry!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exists
  store.user = data.user
  $('#message').text('Sign In Successful')
  $('#message').removeClass()
  $('#message').addClass('success') // optional adds class for styling
  $('#signed-in-user').text(`Signed in user is ${store.user.email}`)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
}

const signInFailure = function () {
  $('#message').text('Sign In Failed')
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
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
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
