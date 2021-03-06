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
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateRestaurant = (event) => {
  event.preventDefault()
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
  api.destroy(restaurantId)
    .then((response) => {
      ui.onDestroySuccess()
      onGetRestaurants(event)
    })
    .catch(ui.onDestroyFailure)
}

const onUpdateClick = () => {
  event.preventDefault()
  const restaurant = $(event.target)
  // console.log(event.target)
  const restaurantId = restaurant.data('id')
  const restaurantName = restaurant.data('name')
  const restaurantURL = restaurant.data('url')
  const restaurantAddress = restaurant.data('address')
  const restaurantCuisine = restaurant.data('cuisine')
  const restaurantBest = restaurant.data('best_thing_to_order')

  $('#rid').val(restaurantId)
  $('#rcuisine').val(restaurantCuisine)
  $('#rname').val(restaurantName)
  $('#rurl').val(restaurantURL)
  $('#raddress').val(restaurantAddress)
  $('#rbest_thing_to_order').val(restaurantBest)
  $('#restaurant-modal').modal('show')
}

const onUpdateRestaurant = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const restaurantId = formData.restaurant.id
  api.update(formData, restaurantId)
    .then(() => {
      ui.onUpdateSuccess()
      $('#restaurant-modal').modal('hide')
      onGetRestaurants(event)
    })
    .catch(ui.onUpdateFailure)
}

let add, charSet, emoji, left, width

charSet = ['banana', 'bento', 'birthday_cake', 'bread', 'burrito', 'cake', 'candy', 'cheese', 'cherries', 'chocolate', 'cookie', 'corn', 'curry', 'dango', 'doughnut', 'egg', 'eggplant', 'fish_cake', 'flan', 'fried_shrimp', 'fries', 'grapes', 'green_apple', 'hamburger', 'honey_pot', 'hot_dog', 'ice_cream', 'icecream', 'lemon', 'lollipop', 'meat_on_bone', 'melon', 'oden', 'orange', 'peach', 'pear', 'pepper', 'pineapple', 'pizza', 'popcorn', 'poultry_leg', 'ramen', 'red_apple', 'rice_ball', 'rice_cracker', 'rice', 'shaved_ice', 'spaghetti', 'stew', 'strawberry', 'sushi', 'sweet_potato', 'taco', 'tomato', 'watermelon']

width = $(window).width() - 64

$('#create-restaurant').click(function () {
  left = Math.floor(Math.random() * width)
  emoji = charSet[Math.floor(Math.random() * charSet.length)]
  add = '<img class="emoji" style="left: ' + left + 'px;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/168840/' + emoji + '.svg"/>'
  $(add).appendTo('.container').animate({
    top: $(window).height()
  }, 3000, function () {
    $(this).remove()
  })
})

const addHandlers = () => {
  $('#create-restaurant').on('submit', onCreateRestaurant)
  $('.content').on('click', '.delete-restaurant', onDestroyRestaurant)
  $('.content').on('click', '.update-restaurant', onUpdateClick)
  $('#update-restaurant-modal').on('submit', onUpdateRestaurant)
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
}
