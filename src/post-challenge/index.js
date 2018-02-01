'use strict'

const { mapObject, pipe, tap, curry, get } = require('../core')

const debug = curry((tag, arg) => {
  console.log(tag, arg)
})

const filterPostWith30DaysAgo = require('./filter-30-days-ago/fp')
const groupByTags = require('./group-by-tag/fp')
const sortByPubicationDateAscending = require('./sort-by-publication-date-ascending/fp')

const mostRecentByTagOrderedByPublishDate = pipe(
  filterPostWith30DaysAgo,
  groupByTags,
  mapObject(sortByPubicationDateAscending)
)

module.exports = mostRecentByTagOrderedByPublishDate

// console.log('post Filtered', filterPostWith30DaysAgo(posts))
// console.log('post group by tags', groupByTags(posts))
// console.log('sort by publication date ascending', sortByPubicationDateAscending(posts).map(get('id')))
// console.log(JSON.stringify(mostRecentByTagOrderedByPublishDate(posts), null, 2))
