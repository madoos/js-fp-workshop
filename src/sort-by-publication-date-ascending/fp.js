'use strict'

const {
  curry,
  get,
  comparator,
  lt,
  useWith,
  sort,
  tap
} = require('../core')

const debug = curry((tag, arg) => {
  console.log(tag, arg)
})

const getPublished = get('Published')
const ascendingByPublishedDate = useWith([getPublished, getPublished], comparator(lt))
const sortPostByPublicationDate = sort(ascendingByPublishedDate)
module.exports = sortPostByPublicationDate
