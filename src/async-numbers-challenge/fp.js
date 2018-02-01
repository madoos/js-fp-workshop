'use strict'

const {
  curry,
  pipe,
  mapStream
} = require('../core')

const _ = require('highland')
const reduceStream = require('stream-reduce')
const add = curry((a, b) => a + b)
const mult = curry((a, b) => a * b)
const addOneAndMultFive = pipe(add(1), mult(5))

function calculate1 (numberStream) {
  return new Promise((resolve, reject) => {
    numberStream
    .pipe(mapStream(addOneAndMultFive))
    .pipe(reduceStream(add, 0))
    .on('data', resolve)
    .on('error', reject)
  })
}

function calculate2 (numberStream) {
  return _(numberStream)
    .map(addOneAndMultFive)
    .reduce(0, add)
    .toPromise(Promise)
}

module.exports = calculate2
