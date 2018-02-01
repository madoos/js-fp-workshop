'use strict'

const { naturals, take, toArray } = require('../core')
const calculate = require('./fp')

const numbers = toArray(
    take(naturals(), 10)
)

const result = calculate(numbers)
console.log({ in: numbers, out: result })
