'use strict'

const config = require('./../config')
const store = require('./../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}
// const show = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/restaurants/' + data.restaurant.id,
//     method: 'GET'
//   })
// }
//
// const destroy = data => {
//   return $.ajax({
//     url: config.apiUrl + '/restaurants/' + data.restaurant.id,
//     method: 'DELETE'
//   })
// }

const create = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/restaurants/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const update = data => {
//   return $.ajax({
//     url: config.apiUrl + '/restaurants/' + data.restaurant.id,
//     method: 'PATCH',
//     data: data
//   })
// }
module.exports = {
  index,
  // show,
  // destroy,
  create
  // update
}
