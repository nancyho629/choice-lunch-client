'use strict'
const showRestaurantsTemplate = require('../templates/index.handlebars')

const onIndexSuccess = function (responseData) {
  $('#login-message').text('Here are the restaurants!')
  const showRestaurantHtml = showRestaurantsTemplate({restaurants: responseData.restaurants})
  $('.content').html(showRestaurantHtml)
  $('form.return input').prop('disabled', true)
  $('form.return input[type=submit]').prop('hidden', true)

  let randomVal
  $('#comp').click(event => {
    randomVal = Math.floor(Math.random() * responseData.restaurants.length)
    $('#comp').text(`Choice Lunch is: ${responseData.restaurants[randomVal].name}, ${responseData.restaurants[randomVal].address}`)
  })
}

const onIndexFailure = function () {
  $('#login-message').text(`There aren't any restaurant suggestions!`)
}

const onDestroyFailure = function () {
  $('#restaurant-message').text(`Restaurant Removed`)
}
const onDestroySuccess = function () {
  $('#restaurant-message').text(`You deleted a restaurant`)
}

const onCreateSuccess = responseData => {
  $('#restaurant-message').text(`You've added a new suggestion!!! Please scroll down! `)
  $('#signed-in-user').text('')
  $('form').trigger('reset')
  let randomVal
  $('a').click(event => {
    randomVal = Math.floor(Math.random() * responseData.restaurants.length)
    $('#comp').text(`Choice Lunch is: ${responseData.restaurants[randomVal].name}, ${responseData.restaurants[randomVal].address}`)
  })
}

const onCreateFailure = function () {
  $('#restaurant-message').text(`Restaurant Not Created`)
  $('form').trigger('reset')
}

const onUpdateSuccess = () => {
  $('#restaurant-message').text(`You updated your restaurant listing! `)
}
const onUpdateFailure = function () {
  $('#restaurant-message').text(`Restaurant Not Updated`)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onDestroyFailure,
  onDestroySuccess,
  onCreateFailure,
  onCreateSuccess,
  onUpdateSuccess,
  onUpdateFailure
}
