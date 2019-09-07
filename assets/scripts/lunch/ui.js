'use strict'

// does this need anything passed in?
// const onIndexSuccess = function (responseData) {
//   $('#message').text('Restaurants')
//
//   let restaurantsHtml = ''
//
//   responseData.restaurants.forEach(restaurant => {
//     restaurantsHtml += `
//     <h3>${restaurant.title}</h3>
//     <h4>${restaurant.author}</h4>
//     <h5>id: ${restaurant.id}</h5>
//     <hr>
//     `
//   })
//   $('#results').html(restaurantsHtml)
// }
//
// const onIndexFailure = function () {
//   $('#message').text(`There aren't any restaurant suggestions!`)
// }
//
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
// const onDestroyFailure = function () {
//   $('#message').text(`Restaurant Not Found`)
// }
//
// const onDestroySuccess = function () {
//   $('#message').text(`You deleted a restaurant`)
// }

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

// const onUpdateSuccess = () => {
//   $('#message').text(`You updated your restaurant listing! `)
// }
//
// const onUpdateFailure = function () {
//   $('#message').text(`Restaurant Not Updated`)
// }

module.exports = {
  // onIndexSuccess,
  // onIndexFailure,
  // onShowFailure,
  // onShowSuccess,
  // onDestroyFailure,
  // onDestroySuccess,
  onCreateFailure,
  onCreateSuccess
  // onUpdateSuccess,
  // onUpdateFailure
}
