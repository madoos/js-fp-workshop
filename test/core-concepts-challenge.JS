'use strict'

const { expect } = require('chai')
const { curry, pipe, hightOrderFunction } = require('../src/core-concepts-challenge/imperative')

describe('core concepts challenge', function () {
  it('should return a hight order function', function () {
    const fn = hightOrderFunction((a, b) => a + b)
    expect(fn).to.be.a('function')
    expect(fn(1, 1)).to.equal(2)
  })

  it('should apply curry to function', function () {
    const add = curry((a, b) => a + b)
    expect(add).to.be.a('function')
    expect(add(1)(1)).to.be.equal(2)
  })

  it('should compose the function', function () {
    const add1 = (n) => n + 1
    const mult2 = (n) => n * 2
    expect(pipe(add1, mult2)(1)).to.equal(4)
  })
})
