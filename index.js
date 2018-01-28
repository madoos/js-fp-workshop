'use strict'

const posts = require('./src/posts')
const filterPostWith30DaysAgo = require('./src/filter-30-days-ago/fp')

console.log('post Filtered', filterPostWith30DaysAgo(posts))
