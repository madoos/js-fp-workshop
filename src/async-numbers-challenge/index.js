'use strict'

const calculate = require('./fp')

const {
  _await,
  generatorInstanceToStream,
  mapStream,
  naturals,
  take,
  identity
} = require('../core')

const numbers = take(naturals(), 10)
const numberStream = generatorInstanceToStream(numbers)

const asyncNumberStream = numberStream
                            .pipe(mapStream(
                              _await(identity, 1000)
                            ))

const res = calculate(asyncNumberStream)

res
.then((data) => {
  console.log(data)
})
