'use strict'
const showRestaurantsTemplate = require('../templates/index.handlebars')

const onIndexSuccess = function (responseData) {
  $('#login-message').text('Here are the restaurants!')
  // console.log('onIndexSuccess: ', responseData)
  const showRestaurantHtml = showRestaurantsTemplate({restaurants: responseData.restaurants})
  $('.content').html(showRestaurantHtml)
  $('form.return input').prop('disabled', true)
  $('form.return input[type=submit]').prop('hidden', true)

  let randomVal
  $('#comp').click(event => {
    randomVal = Math.floor(Math.random() * responseData.restaurants.length)
    $('#comp').text(`Choice Lunch is: ${responseData.restaurants[randomVal].name}, ${responseData.restaurants[randomVal].address}`)
    // console.log('your suggestion is: ', responseData.restaurants[randomVal].name)
  })
}

const onIndexFailure = function () {
  $('#login-message').text(`There aren't any restaurant suggestions!`)
}

const onDestroyFailure = function () {
  $('#login-message').text(`Restaurant Removed`)
}
const onDestroySuccess = function () {
  $('#login-message').text(`You deleted a restaurant`)
}

const onCreateSuccess = responseData => {
  $('#login-message').text(`You've added a new suggestion!! `)
  $('form').trigger('reset')
  let randomVal
  $('a').click(event => {
    randomVal = Math.floor(Math.random() * responseData.restaurants.length)
    $('#comp').text(`Choice Lunch is: ${responseData.restaurants[randomVal].name}, ${responseData.restaurants[randomVal].address}`)
    // console.log('your suggestion is: ', responseData.restaurants[randomVal].name)
  })
}

const onCreateFailure = function () {
  $('#login-message').text(`Restaurant Not Created`)
  $('form').trigger('reset')
}

const onUpdateSuccess = () => {
  $('#login-message').text(`You updated your restaurant listing! `)
}
const onUpdateFailure = function () {
  $('#login-message').text(`Restaurant Not Updated`)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  // onShowFailure,
  // onShowSuccess,
  onDestroyFailure,
  onDestroySuccess,
  onCreateFailure,
  onCreateSuccess,
  onUpdateSuccess,
  onUpdateFailure
}
