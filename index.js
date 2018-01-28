'use strict'

const posts = require('./src/posts')
const filterPostWith30DaysAgo = require('./src/filter-30-days-ago/fp')
const groupByTags = require('./src/group-by-tag/fp')

//console.log('post Filtered', filterPostWith30DaysAgo(posts))
console.log('post group by tags', groupByTags(posts))
