'use strict'

const { expect } = require('chai')
const { get } = require('../../src/core')
const posts = require('../../src/post-challenge/posts')
const sortAscendingByDate = require('../../src/post-challenge/sort-by-publication-date-ascending/imperative')

describe('sort-ascending-by-publication-date', function () {
  it('should sort posts: 2, 1, 3, 4, 5, 6, 7, 8, 9, 10', function () {
    const expectedPostIds = [ 2, 1, 3, 4, 5, 6, 7, 8, 9, 10 ]
    const postsSorted = sortAscendingByDate(posts)
    const postIds = postsSorted.map(get('id'))
    expect(postIds).to.have.ordered.members(expectedPostIds)
  })
})
