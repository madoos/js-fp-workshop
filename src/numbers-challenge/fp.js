'use strict'

const {
  map,
  reduce,
  curry,
  pipe

} = require('../core')

module.exports = calculate4

function calculate1 (numbers) {
  const add = (a, b) => a + b
  const mult = (a, b) => a * b

  const result = numbers
                .map((n) => add(n, 1))
                .map((n) => mult(n, 5))
                .reduce(add, 0)

  return result
}

// Usign curry
function calculate2 (numbers) {
  const add = curry((a, b) => a + b)
  const mult = curry((a, b) => a * b)

  const result = numbers
                .map(add(1))
                .map(mult(5))
                .reduce(add, 0)

  return result
}

// Using curry and composition
function calculate3 (numbers) {
  const add = curry((a, b) => a + b)
  const mult = curry((a, b) => a * b)

  const addOneAndMultFive = pipe(
    add(1),
    mult(5)
  )

  const result = numbers
                .map(addOneAndMultFive)
                .reduce(add, 0)

  return result
}

// Using curry, composition avoid context
function calculate4 (numbers) {
  const add = curry((a, b) => a + b)
  const mult = curry((a, b) => a * b)

  const addOneAndMultFive = pipe(
    add(1),
    mult(5)
  )

  const calculate = pipe(
    map(addOneAndMultFive),
    reduce(add, 0)
  )

  const result = calculate(numbers)
  return result
}
