'use strict'

const { expect } = require('chai')
const calculate = require('../src/async-numbers-challenge/imperative')

const {
  _await,
  generatorInstanceToStream,
  mapStream,
  naturals,
  take,
  identity
} = require('../src/core')

const numbers = take(naturals(), 10)
const numberStream = generatorInstanceToStream(numbers)
const asyncNumberStream = numberStream.pipe(mapStream(_await(identity, 50)))

describe('async number challenges', function () {
  it('should to be equal to 275', function () {
    const expectedNumber = 275
    return calculate(asyncNumberStream)
            .then((res) => {
              expect(expectedNumber).to.be.equal(res);
            })
  })
})
