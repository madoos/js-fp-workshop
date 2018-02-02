'use strict'

const { curry, pipe, hightOrderFunction } = require('./fp')

const add = (a, b) => a + b
const mult = (a, b) => a * b

const addCurry = curry(add)
const multCurry = curry(mult)

const two = addCurry(1)(1)
const four = multCurry(2)(2)
console.log(two, four)
