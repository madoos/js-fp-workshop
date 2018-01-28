'use strict'

const { expect } = require('chai')
const { get } = require('../src/core')
const posts = require('../src/posts')
const filterPostWith30DaysAgo = require('../src/filter-30-days-ago/imperative')

describe('filter-30-days-ago', function () {
  it('should get 8 posts with ids: 2, 1, 3, 4, 5, 6, 7, 8', function () {
    const expectedPostIds = [ 2, 1, 3, 4, 5, 6, 7, 8 ]
    const postFiltered = filterPostWith30DaysAgo(posts)
    const postIds = postFiltered.map(get('id'))
    expect(postIds).to.have.ordered.members(expectedPostIds)
  })
})
