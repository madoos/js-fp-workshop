'use strict'

const { expect } = require('chai')
const { get, mapObject, map, naturals, toArray, take } = require('../src/core')
const calculate = require('../src/numbers-challenge/imperative')

describe('number challenges', function () {
  it('should to be equal to 275', function () {
    const expectedNumber = 275
    const numbers = toArray(take(naturals(), 10))
    const res = calculate(numbers)
    expect(expectedNumber).to.be.equal(res);
  })
})
