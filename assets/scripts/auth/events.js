'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const lunchEvents = require('../lunch/events')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const signUpIn = () => {
    api.signIn(data)
      .then(ui.signUpSuccess)
      .catch(ui.signInFailure)
  }
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(signUpIn, 500)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then((responseData) => {
      ui.signInSuccess(responseData)
      lunchEvents.onGetRestaurants()
    })
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // data = {passwords: {old:123, new:1234}}
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // make api call
  api.signOut()
  // handle success
    .then(ui.signOutSuccess)
  // handle failure
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-restaurant').hide()
  $('#change-password').hide()
  $('#restaurant-message').text(``)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers
}
