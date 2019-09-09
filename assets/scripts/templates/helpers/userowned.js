'use strict'
const store = require('../../store')

const userowned = function (id) {
  return store.user ? store.user.id === id : false
}

module.exports = userowned
