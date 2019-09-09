'use strict'
const showRestaurantsTemplate = require('../templates/index.handlebars')

const onIndexSuccess = function (responseData) {
  $('#message').text('Here are the restaurants!')
  console.log('onIndexSuccess: ', responseData)
  const showRestaurantHtml = showRestaurantsTemplate({restaurants: responseData.restaurants})
  $('.content').html(showRestaurantHtml)
  $('form.return input').prop('disabled', true)
  // $('form.return input[type=submit]').prop('hidden', true)
}

const onIndexFailure = function () {
  $('#message').text(`There aren't any restaurant suggestions!`)
}
// let restaurantHtml = ''
// const onShowSuccess = function (responseData) {
//   $('#message').text(`Here's a restaurant!`)
//   restaurantHtml = `
//   <h3>${responseData.restaurant.name}</h3>
//   <h4>${responseData.restaurant.cuisine}</h4>
//   <h5>id: ${responseData.restaurant.id}</h5>
//   <hr>
//     `
//   $('#results').html(restaurantHtml)
// }
// const onShowFailure = function () {
//   $('#message').text(`Restaurant Not Found`)
// }
const onDestroyFailure = function () {
  $('#message').text(`Restaurant Removed`)
}
const onDestroySuccess = function () {
  $('#message').text(`You deleted a restaurant`)
}

const onCreateSuccess = responseData => {
  $('#message').text(`You've added a new suggestion!! `)
  console.log(responseData)
  // const restaurantHtml = `
  //   <h3>${responseData.restaurant.title}</h3>
  //   <h4>${responseData.restaurant.author}</h4>
  //   <h5>id: ${responseData.restaurant.id}</h5>
  //   <hr>
  //     `
  // $('#results').html(restaurantHtml)
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#message').text(`Restaurant Not Created`)
  $('form').trigger('reset')
}

const onUpdateSuccess = () => {
  $('#message').text(`You updated your restaurant listing! `)
}
const onUpdateFailure = function () {
  $('#message').text(`Restaurant Not Updated`)
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
