'use strict'

const FPSolution = require('./fp')

// IMPLEMENT YOUR SOLUTION
function filterPostWith30DaysAgo (posts) {
  const _30DaysAgo = (new Date()).getTime() - (86400000 * 30)
  return posts
}

module.exports = FPSolution
