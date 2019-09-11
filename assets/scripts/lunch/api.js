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

const show = function () {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET'
  })
}

const destroy = restaurantID => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + restaurantID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

const create = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/restaurants/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = (data, restaurantId) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + restaurantId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  index,
  show,
  destroy,
  create,
  update
}
