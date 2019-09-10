'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onShowRestaurants = () => {
  api.show()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onGetRestaurants = (event) => {
  // event.preventDefault()
  console.log('onGetRestaurants', event)
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateRestaurant = (event) => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  api.create(data)
    .then(responseData => {
      ui.onCreateSuccess(responseData)
      onGetRestaurants(event)
    })
    .catch(ui.onCreateFailure)
}

const onDestroyRestaurant = (event) => {
  event.preventDefault()
  const restaurant = $(event.target)
  const restaurantId = restaurant.data('id')
  console.log(event)
  api.destroy(restaurantId)
    .then((response) => {
      ui.onDestroySuccess()
      onGetRestaurants(event)
    })
    .catch(ui.onDestroyFailure)
}

const onUpdateClick = (event) => {
  event.preventDefault()
  const restaurant = $(event.target)
  const restaurantId = restaurant.data('id')
  console.log('onUpdateClick', event)

  $(`form.return[data-id='${restaurantId}'] input`).prop('disabled', false)
  $(`form.return[data-id='${restaurantId}'] input[type=submit]`).prop('hidden', false)
}

const onUpdateRestaurant = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const restaurant = $(event.target)
  const restaurantId = restaurant.data('id')
  api.update(formData, restaurantId)
    .then(responseData => {
      $(`form.return[data-id='${restaurantId}'] input`).prop('disabled', true)
      $(`form.return[data-id='${restaurantId}'] input[type=submit]`).prop('hidden', true)
      ui.onUpdateSuccess(responseData)
    })
    .catch(ui.onUpdateFailure)
}

// const randomGenerator = () => {
//   event.preventDefault()
//
// }

const addHandlers = () => {
  // $('#onGetRestaurants').on('click', onGetRestaurants)
  $('.content').on('click', '.delete-restaurant', onDestroyRestaurant)
  $('#create-restaurant').on('submit', onCreateRestaurant)
  $('.content').on('click', '.update-restaurant', onUpdateClick)
  $('.content').on('submit', '.return', onUpdateRestaurant)
  $('#message').text('').hide()
}

module.exports = {
  onShowRestaurants,
  onGetRestaurants,
  onDestroyRestaurant,
  onCreateRestaurant,
  onUpdateClick,
  onUpdateRestaurant,
  addHandlers
  // randomGenerator
}
