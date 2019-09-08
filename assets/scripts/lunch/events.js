'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetRestaurants = (event) => {
  event.preventDefault()
  console.log('onGetRestaurants', event)
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// const onDestroyRestaurant = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.destroy(formData)
//     .then(() => {
//       ui.onDestroySuccess()
//       onGetRestaurants()
//     })
//     .catch(ui.onDestroyFailure)
// }

// const onCreateRestaurant = (event) => {
//   event.preventDefault()
//   console.log(event)
//   const data = getFormFields(event.target)
//   api.create(data)
//     .then(ui.onCreateSuccess)
//     .catch(ui.onCreateFailure)
// }

const onCreateRestaurant = (event) => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  api.create(data)
    .then(responseData => {
      console.log('before ui.oncreatesuccs: ', responseData)
      ui.onCreateSuccess(responseData)
      onGetRestaurants(event)
    })
    .catch(ui.onCreateFailure)
}

// const onUpdateRestaurant = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.update(formData)
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }

const addHandlers = () => {
  // $('#onGetRestaurants').on('click', onGetRestaurants)
  // $('#onDestroyRestaurant').on('submit', onDestroyRestaurant)
  $('#create-restaurant').on('submit', onCreateRestaurant)
  // $('#onUpdateRestaurant').on('submit', onUpdateRestaurant)
}

module.exports = {
  onGetRestaurants,
  // onDestroyRestaurant,
  onCreateRestaurant,
  // onUpdateRestaurant,
  addHandlers
}
