'use strict'

const { expect } = require('chai')
const { get, mapObject, map } = require('../src/core')
const posts = require('../src/posts')
const groupByTags = require('../src/group-by-tag/imperative')

describe('group-by-tags', function () {
  it('should group all post by tag', function () {
    const expectedGroups = {
      destructuring:2,
      es6:4,
      'functional programming': 4,
      futures:2,
      promises:4
    }

    const grouped = groupByTags(posts)
    const countGrouped = mapObject(get('length'), grouped)
    expect(countGrouped).to.deep.equal(expectedGroups);

  })
})
