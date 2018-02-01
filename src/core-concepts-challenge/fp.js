'use strict'

const { curry, pipe } = require('../core')

module.exports = {
  curry,
  pipe,
  hightOrderFunction: (fn) => (...args) => fn(...args)
}
